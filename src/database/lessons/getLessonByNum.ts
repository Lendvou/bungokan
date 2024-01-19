import { sleep } from "@/utils/sleep";
import { db } from "..";

export const getLessonByNum = async (num?: string) => {
    // await sleep(1000);
    return db.lessons.get({ num });
};
