import moment from "moment";
import { db } from "..";

export const getUserDailyProgress = () =>
    db.userProgress
        .where("dayTimestamp")
        .between(
            moment().subtract(28, "days").startOf("day").toDate(),
            moment().toDate()
        )
        .toArray();
