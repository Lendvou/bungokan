import { useGrammarPageStyles } from "./styles";
import { GrammarOverview } from "./_components/Overview";
import { GrammarContents } from "./_components/Contents";
import useAsyncLiveQuery from "../../database/_utils/useAsyncLiveQuery";
import { GrammarCourses } from "../../database/grammarCourses";
import { checkIsCourseAvailable } from "../../database/grammarCourses/checkIsCourseAvailable";

export const GrammarPage = () => {
    const { data, isLoading } = useAsyncLiveQuery((db) =>
        checkIsCourseAvailable(db, { courseName: GrammarCourses.CURE_DOLLY })
    );

    const isInstalled = isLoading || Boolean(data);

    const styles = useGrammarPageStyles();

    return isInstalled ? <GrammarContents /> : <GrammarOverview />;
};
