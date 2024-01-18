import { db } from "..";
import { ILessonItem } from "../lessons";

const LESSON_LEARNED_THRESHOLD = 95; // percentage

export const updateLessonProgress = async (
    lesson: ILessonItem,
    progress: number
) => {
    progress = progress < 0 ? 0 : progress;
    progress = progress > 100 ? 100 : progress;

    const userLesson = await db.userLessons.get({ num: lesson.num });
    if (!userLesson?.id) {
        db.userLessons.add({
            num: lesson.num,
            courseName: lesson.courseName,
            totalLearningTime: 0,
            learningProgress:
                progress >= LESSON_LEARNED_THRESHOLD ? 100 : progress,
        });
        return;
    }

    if (progress > userLesson.learningProgress) {
        db.userLessons.update(userLesson.id, {
            learningProgress:
                progress >= LESSON_LEARNED_THRESHOLD ? 100 : progress,
        });
    }
};
