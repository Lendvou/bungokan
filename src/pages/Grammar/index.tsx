import { useGrammarPageStyles } from "./styles";
import { GrammarOverview } from "./_components/Overview";
import { GrammarContents } from "./_components/Contents";

export const GrammarPage = () => {
    const isInstalled = false;

    const styles = useGrammarPageStyles();

    return isInstalled ? <GrammarContents /> : <GrammarOverview />;
};
