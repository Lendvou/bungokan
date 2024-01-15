export interface IUserLesson {
    id?: string;
    num: string;
    totalLearningTime: number;
    learningProgress: number; // percentage
}

export const USER_LESSONS_SCHEMA =
    "++id, &num, totalLearningTime, learningProgress";
