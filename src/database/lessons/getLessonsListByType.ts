import { sleep } from "@/utils/sleep";
import { ILessonItem } from ".";
import { db } from "..";
import { GrammarCourses } from "../grammarCourses";
import { IUserLesson } from "../userLessons";

export interface ILessonListItem extends Omit<ILessonItem, "content"> {
    userLesson?: IUserLesson;
}

export const getLessonsListByType = async (
    courseName: GrammarCourses
): Promise<ILessonListItem[]> => {
    const lessons: ILessonListItem[] = await db.lessons
        .where({ courseName })
        .toArray((arr) => {
            const result = arr.map((item: any) => {
                delete item.content;
                return item as ILessonListItem;
            });
            return result;
        });

    const result: ILessonListItem[] = await db.userLessons
        .where("num")
        .anyOf(lessons.map((item) => item.num))
        .toArray((userLessons) =>
            lessons.map((lesson) => ({
                ...lesson,
                userLesson: userLessons.find((item) => item.num === lesson.num),
            }))
        );

    // await sleep(1000);

    return result;
};
