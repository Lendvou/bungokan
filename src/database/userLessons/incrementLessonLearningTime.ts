import { db } from "..";
import { ILessonItem } from "../lessons";

export const incrementLessonLearningTime = async (lesson: ILessonItem) => {
    const currentUserLesson = await db.userLessons.get({
        num: lesson.num,
    });
    if (!currentUserLesson?.id) {
        db.userLessons.add({
            num: lesson.num,
            totalLearningTime: 1,
            learningProgress: 0,
            courseName: lesson.courseName,
        });
    } else {
        db.userLessons.update(currentUserLesson.id, {
            totalLearningTime: currentUserLesson.totalLearningTime + 1,
        });
    }
};
