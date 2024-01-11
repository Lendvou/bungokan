export enum GrammarCourses {
    CURE_DOLLY = "cure_dolly",
}

export interface IGrammarCourses {
    id?: number;
    courseName: GrammarCourses;
    fullName: string;
    description?: string;
    lessonsCount: number;
}

export const GRAMMAR_COURSES_SCHEMA = "id++, &courseName";
