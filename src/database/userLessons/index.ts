import { GrammarCourses } from "../grammarCourses";

export interface IUserLesson {
    id?: string;
    num: string;
    courseName: GrammarCourses;
    totalLearningTime: number;
    learningProgress: number; // percentage
}

export const USER_LESSONS_SCHEMA =
    "++id, &num, courseName, totalLearningTime, learningProgress";
