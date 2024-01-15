import { BungokanDB } from "..";
import { GrammarCourses } from "../grammarCourses";
import { ILessonItem } from "../lessons";

interface IGetLessonsToStudyReturn {
    type: "pending" | "next";
    content: ILessonItem[];
}

export const getLessonsToStudy = async (
    db: BungokanDB
): Promise<IGetLessonsToStudyReturn> => {
    const userLessons = await db.userLessons
        .where({
            courseName: GrammarCourses.CURE_DOLLY,
        })
        .sortBy("num");

    const pendingLessons = userLessons.filter(
        (item) => item.learningProgress !== 0 && item.learningProgress !== 100
    );
    if (pendingLessons.length > 0) {
        const pendingGrammarLessons = await db.lessons
            .where("num")
            .anyOf(pendingLessons.map((item) => item.num))
            .toArray();
        return {
            type: "pending",
            content: pendingGrammarLessons.filter(
                (item) => item
            ) as ILessonItem[],
        };
    }

    const lastLearnedLesson = userLessons[userLessons.length - 1];
    const nextLesson = await db.lessons.get({
        num: lastLearnedLesson
            ? String(parseInt(lastLearnedLesson.num) + 1)
            : "1",
    });

    return {
        type: "next",
        content: nextLesson ? [nextLesson] : [],
    };
};
