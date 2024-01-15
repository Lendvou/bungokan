import { useMainPageStyles } from "./styles";
import { OverallProgress } from "./_components/OverallProgress";
import useAsyncLiveQuery from "../../database/_utils/useAsyncLiveQuery";
import { getUserDailyProgress } from "../../database/userProgress/getUserDailyProgress";
import { GrammarProgress } from "./_components/GrammarProgress";

export const MainPage = () => {
    const { data: overallProgress } = useAsyncLiveQuery(getUserDailyProgress);

    const styles = useMainPageStyles();
    return (
        <div className={styles.container}>
            <OverallProgress progressData={overallProgress} />

            <GrammarProgress />
        </div>
    );
};
