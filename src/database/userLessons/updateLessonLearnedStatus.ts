import { db } from "..";
import { GrammarCourses } from "../grammarCourses";

export const updateLessonLearnedStatus = async (num: string) => {
    const userLesson = await db.userLessons.get({ num });
    if (!userLesson?.id) {
        db.userLessons.add({
            num,
            courseName: GrammarCourses.CURE_DOLLY,
            learningProgress: 100,
            totalLearningTime: 1,
        });
    } else {
        db.userLessons.update(userLesson.id, {
            learningProgress: userLesson.learningProgress === 100 ? 0 : 100,
        });
    }
};
