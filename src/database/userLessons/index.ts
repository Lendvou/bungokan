interface ILearningDay {
    dayTimestamp: number;
    timeSpent: number;
}

export interface IUserLesson {
    id?: string;
    num: string;
    isDone: boolean;
    totalLearningTime: number;
    learningProgress: number; // percentage
}

export const USER_LESSONS_SCHEMA = "++id, &num, *learningDaysTimestamps";
