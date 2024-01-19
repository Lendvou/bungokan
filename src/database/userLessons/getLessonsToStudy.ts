import { sleep } from "@/utils/sleep";
import { db } from "..";
import { GrammarCourses } from "../grammarCourses";
import { ILessonItem } from "../lessons";

interface IGetLessonsToStudyReturn {
    type: "pending" | "next";
    content: ILessonItem[];
}

export const getLessonsToStudy =
    async (): Promise<IGetLessonsToStudyReturn> => {
        const userLessons = await db.userLessons
            .where({
                courseName: GrammarCourses.CURE_DOLLY,
            })
            .sortBy("num");

        // await sleep(1000);

        const pendingLessons = userLessons.filter(
            (item) =>
                item.learningProgress !== 0 && item.learningProgress !== 100
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

interface IProgress {
    lessonsLearned: number;
    lessonsInProgress: number;
    lessonsRemaining: number;
}

interface IGetLessonsProgressInfo {
    progress: IProgress;
    lessonToStudy: ILessonItem;
}

export const getUserLessonsProgress = async (): Promise<
    IGetLessonsProgressInfo | undefined
> => {
    const cureDollyCourseInfo = await db.grammarCourses.get({
        courseName: GrammarCourses.CURE_DOLLY,
    });
    if (!cureDollyCourseInfo) {
        return;
    }

    const userLessons = await db.userLessons
        .where({
            courseName: GrammarCourses.CURE_DOLLY,
        })
        .sortBy("num");

    const lessonsLearned = userLessons.filter(
        (item) => item.learningProgress === 100
    ).length;
    const lessonsInProgress = userLessons.filter(
        (item) => item.learningProgress > 0 && item.learningProgress < 95
    ).length;
    const lessonsRemaining =
        cureDollyCourseInfo.lessonsCount - lessonsLearned - lessonsInProgress;
};
