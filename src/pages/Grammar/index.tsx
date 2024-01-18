import { useGrammarPageStyles } from "./styles";
import { GrammarOverview } from "./_components/Overview";
import { GrammarContents } from "./_components/Contents";
import useAsyncLiveQuery from "../../database/_utils/useAsyncLiveQuery";
import { GrammarCourses } from "../../database/grammarCourses";
import { checkIsCourseAvailable } from "../../database/grammarCourses/checkIsCourseAvailable";

export const GrammarPage = () => {
    const { data, isLoading } = useAsyncLiveQuery(() =>
        checkIsCourseAvailable(GrammarCourses.CURE_DOLLY)
    );

    const isInstalled = Boolean(isLoading || data);

    const styles = useGrammarPageStyles();

    return isInstalled ? <GrammarContents /> : <GrammarOverview />;
};
