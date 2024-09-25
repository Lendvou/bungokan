import { useGrammarPageStyles } from "./styles";
import { GrammarContents } from "./_components/Contents";
import useAsyncLiveQuery from "../../database/_utils/useAsyncLiveQuery";
import { GrammarCourses } from "../../database/grammarCourses";
import { checkIsCourseInstalled } from "../../database/grammarCourses/checkIsCourseInstalled";
import { DownloadGrammarContent } from "@/components/DownloadGrammarContent";
import { Touchbar } from "@/components/Touchbar";

export const GrammarPage = () => {
    const { data, isLoading } = useAsyncLiveQuery(() =>
        checkIsCourseInstalled(GrammarCourses.CURE_DOLLY)
    );

    const isInstalled = Boolean(isLoading || data);

    const styles = useGrammarPageStyles();

    return isInstalled ? (
        <GrammarContents />
    ) : (
        <div>
            <DownloadGrammarContent withLongDescription />
            <Touchbar />
        </div>
    );
};
