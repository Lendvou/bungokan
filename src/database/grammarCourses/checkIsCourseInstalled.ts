import { GrammarCourses } from ".";
import { db } from "..";

export const checkIsCourseInstalled = (courseName: GrammarCourses) =>
    db.grammarCourses.get({ courseName }).then((res) => Boolean(res));
