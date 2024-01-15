import { useEffect } from "react";
import { ILessonItem } from "../../../database/lessons";
import { db } from "../../../database";
import moment from "moment";
import debounce from "lodash.debounce";

export const useTrackLessonsProgress = (lesson?: ILessonItem) => {
    useEffect(() => {
        if (!lesson) {
            return;
        }

        const updateOnScroll = debounce(async (e: Event) => {
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
                    learningProgress: progress >= 95 ? 100 : progress,
                });
            }
        }, 200);

        window.addEventListener("scroll", updateOnScroll);
        return () => window.removeEventListener("scroll", updateOnScroll);
    }, [lesson]);

    useEffect(() => {
        if (!lesson) {
            return;
        }

        const trackLessons = async () => {
            // track current lesson learning time
            const currentUserLesson = await db.userLessons.get({
                num: lesson.num,
            });
            if (!currentUserLesson?.id) {
                db.userLessons.add({
                    num: lesson.num,
                    totalLearningTime: 1,
                    learningProgress: 0,
                });
            } else {
                db.userLessons.update(currentUserLesson.id, {
                    totalLearningTime: currentUserLesson.totalLearningTime + 1,
                });
            }

            // track today's overall learning time
            const today = moment().startOf("day").toDate();
            const todayUserProgress = await db.userProgress.get({
                dayTimestamp: today,
            });
            if (!todayUserProgress?.id) {
                db.userProgress.add({
                    dayTimestamp: today,
                    kanjiLearningTime: 0,
                    vocabLearningTime: 0,
                    lessonsLearningTime: 1,
                });
            } else {
                db.userProgress.update(todayUserProgress.id, {
                    lessonsLearningTime:
                        todayUserProgress.lessonsLearningTime + 1,
                });
            }
        };
        const interval = setInterval(() => trackLessons(), 1000);
        return () => clearInterval(interval);
    }, [lesson]);
};
