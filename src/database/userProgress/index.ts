export interface IUserProgressItem {
    id?: number;
    dayTimestamp: Date;
    lessonsLearningTime: number;
    vocabLearningTime: number;
    kanjiLearningTime: number;
}

export const USER_PROGRESS_SCHEMA =
    "++id, dayTimestamp, lessonsLearningTime, vocabLearningTime, kanjiLearningTime";
