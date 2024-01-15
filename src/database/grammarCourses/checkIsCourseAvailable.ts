import { GrammarCourses } from ".";
import { BungokanDB } from "..";

interface ICheckIsCourseAvailableParams {
    courseName: GrammarCourses;
}

export const checkIsCourseAvailable = (
    db: BungokanDB,
    { courseName }: ICheckIsCourseAvailableParams
) => db.grammarCourses.get({ courseName });
