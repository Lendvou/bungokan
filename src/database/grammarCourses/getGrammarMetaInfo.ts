import { GrammarCourses } from ".";
import { db } from "..";

export const getGrammarMetaInfo = (courseName: GrammarCourses) =>
    db.grammarCourses.get({ courseName: courseName });
