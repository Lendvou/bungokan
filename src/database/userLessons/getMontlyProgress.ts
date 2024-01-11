import { BungokanDB } from "..";

export const getMonthlyProgress = async (db: BungokanDB) => {
    const grammarProgress = await db.userLessons
        .where("learningDaysTimestamps")
        .between("dateStart", "dateEnd");
};
