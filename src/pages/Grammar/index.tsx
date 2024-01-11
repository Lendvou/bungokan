import { useGrammarPageStyles } from "./styles";
import { GrammarOverview } from "./_components/Overview";
import { GrammarContents } from "./_components/Contents";
import useAsyncLiveQuery from "../../database/_utils/useAsyncLiveQuery";
import { GrammarCourses } from "../../database/grammarCourses";

export const GrammarPage = () => {
    const { data, isLoading } = useAsyncLiveQuery(
        (db) =>
            db.grammarCourses.get({ courseName: GrammarCourses.CURE_DOLLY }),
        []
    );

    const isInstalled = isLoading || Boolean(data);

    const styles = useGrammarPageStyles();

    return isInstalled ? <GrammarContents /> : <GrammarOverview />;
};
