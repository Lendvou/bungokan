import { db } from "..";

export const getUserLessonByNum = (num: string) => db.userLessons.get({ num });
