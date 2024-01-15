import { BungokanDB } from "..";

interface IGetGrammarMetaInfoParams {
    courseName: string;
}

export const getGrammarMetaInfo = (
    db: BungokanDB,
    { courseName }: IGetGrammarMetaInfoParams
) => db.grammarCourses.get({ courseName: courseName });
