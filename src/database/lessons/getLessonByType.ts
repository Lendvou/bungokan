import useAsyncLiveQuery from "../_utils/useAsyncLiveQuery";
import { GrammarCourses } from "../grammarCourses";

interface IGetLessonByTypeParams {
    type: GrammarCourses;
}

export const useGetLessonByType = (
    { type }: IGetLessonByTypeParams,
    deps: any[],
    fallbackObject?: Record<any, any>
) => {
    const data = useAsyncLiveQuery(
        (db) => db.lessons.where({ courseName: type }).toArray(),
        deps,
        fallbackObject
    );
    return data;
};
