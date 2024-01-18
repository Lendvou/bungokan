import moment from "moment";
import { db } from "..";

export const incrementTotalLearningTime = async (
    type: "kanji" | "vocab" | "lessons"
) => {
    const today = moment().startOf("day").toDate();
    const todayUserProgress = await db.userProgress.get({
        dayTimestamp: today,
    });
    if (!todayUserProgress?.id) {
        db.userProgress.add({
            dayTimestamp: today,
            kanjiLearningTime: type === "kanji" ? 1 : 0,
            vocabLearningTime: type === "vocab" ? 1 : 0,
            lessonsLearningTime: type === "lessons" ? 1 : 0,
        });
    } else {
        switch (type) {
            case "kanji":
                db.userProgress.update(todayUserProgress.id, {
                    kanjiLearningTime: todayUserProgress.kanjiLearningTime + 1,
                });
                break;
            case "vocab":
                db.userProgress.update(todayUserProgress.id, {
                    vocabLearningTime: todayUserProgress.vocabLearningTime + 1,
                });
                break;
            case "lessons":
                db.userProgress.update(todayUserProgress.id, {
                    lessonsLearningTime:
                        todayUserProgress.lessonsLearningTime + 1,
                });
                break;
        }
    }
};
