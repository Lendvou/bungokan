import { BungokanDB } from "..";

interface IGetUserLessonByNumParams {
    num: string;
}

export const getUserLessonByNum = (
    db: BungokanDB,
    { num }: IGetUserLessonByNumParams
) => db.userLessons.get({ num });
