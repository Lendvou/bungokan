import { BungokanDB } from "..";

interface IGetLessonByNumParams {
    num?: string;
}

export const getLessonByNum = (
    db: BungokanDB,
    { num }: IGetLessonByNumParams
) => db.lessons.get({ num });
