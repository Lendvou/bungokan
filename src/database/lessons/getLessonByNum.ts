import { db } from "..";

export const getLessonByNum = async (num?: string) => db.lessons.get({ num });
