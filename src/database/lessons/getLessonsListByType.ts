import { ILessonItem } from ".";
import { BungokanDB } from "..";
import { GrammarCourses } from "../grammarCourses";

export interface ILessonListItem extends Omit<ILessonItem, "content"> {}

interface IGetLessonsListByTypeParams {
    courseName: GrammarCourses;
}

export const getLessonsListByType = (
    db: BungokanDB,
    { courseName }: IGetLessonsListByTypeParams
) =>
    db.lessons.where({ courseName }).toArray((arr) => {
        const result: ILessonListItem[] = arr.map((item) => ({
            ...item,
            content: undefined,
        }));
        return result;
    });
