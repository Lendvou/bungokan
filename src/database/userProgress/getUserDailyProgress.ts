import moment from "moment";
import { BungokanDB } from "..";

export const getUserDailyProgress = (db: BungokanDB) =>
    db.userProgress
        .where("dayTimestamp")
        .between(
            moment().subtract(28, "days").startOf("day").toDate(),
            moment().toDate()
        )
        .toArray();
