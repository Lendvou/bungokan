import { GrammarCourses } from ".";
import { db } from "..";

export const checkIsCourseAvailable = (courseName: GrammarCourses) =>
    db.grammarCourses.get({ courseName }).then((res) => Boolean(res));
