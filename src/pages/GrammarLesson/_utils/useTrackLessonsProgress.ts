import { useEffect } from "react";
import { ILessonItem } from "../../../database/lessons";
import { db } from "../../../database";
import debounce from "lodash.debounce";
import { incrementTotalLearningTime } from "../../../database/userProgress/incrementTotalLearningTime";
import { incrementLessonLearningTime } from "../../../database/userLessons/incrementLessonLearningTime";

const LESSON_LEARNED_THRESHOLD = 95; // percentage

export const useTrackLessonsProgress = (lesson?: ILessonItem) => {
    useEffect(() => {
        if (!lesson) {
            return;
        }

        const updateProgressOnScroll = debounce(async (e: Event) => {
            const userLesson = await db.userLessons.get({ num: lesson.num });
            if (!userLesson?.id) {
                return;
            }

            const scrollingEl = (e.target as Document)?.scrollingElement;
            if (!scrollingEl) {
                return;
            }
            const progress = Math.min(
                100,
                Math.ceil(
                    ((scrollingEl.scrollTop + scrollingEl.clientHeight) /
                        scrollingEl.scrollHeight) *
                        100
                )
            );
            if (progress > userLesson.learningProgress) {
                db.userLessons.update(userLesson.id, {
                    learningProgress:
                        progress >= LESSON_LEARNED_THRESHOLD ? 100 : progress,
                });
            }
        }, 200);

        window.addEventListener("scroll", updateProgressOnScroll);
        return () =>
            window.removeEventListener("scroll", updateProgressOnScroll);
    }, [lesson]);

    useEffect(() => {
        if (!lesson) {
            return;
        }

        const interval = setInterval(() => {
            incrementLessonLearningTime(lesson);
            incrementTotalLearningTime("lessons");
        }, 1000);
        return () => clearInterval(interval);
    }, [lesson]);
};
