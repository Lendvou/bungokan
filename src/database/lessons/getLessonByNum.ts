import { db } from "..";

export const getLessonByNum = (num?: string) => db.lessons.get({ num });
