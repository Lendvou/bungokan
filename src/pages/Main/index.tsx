import { useMainPageStyles } from "./styles";
import { OverallProgress } from "./_components/OverallProgress";
import useAsyncLiveQuery from "../../database/_utils/useAsyncLiveQuery";
import { getUserDailyProgress } from "../../database/userProgress/getUserDailyProgress";
import { GrammarProgress } from "./_components/GrammarProgress";
import { Touchbar } from "@/components/Touchbar";
import { Button } from "../../components/Button/index";
import SearchIcon from "@/assets/icons/search.svg?react";
import { useNavigate } from "react-router-dom";
import { RouteNames } from "@/router/routeNames";

export const MainPage = () => {
    const navigate = useNavigate();

    const { data: overallProgress } = useAsyncLiveQuery(getUserDailyProgress);

    const styles = useMainPageStyles();
    return (
        <div className={styles.container}>
            <div className={styles.body}>
                <OverallProgress progressData={overallProgress} />
                <GrammarProgress />
            </div>

            <Button
                className={styles.dictionaryButton}
                onClick={() => navigate(RouteNames.DICTIONARY)}
            >
                <SearchIcon
                    width={20}
                    height={20}
                    className={styles.dictButtonIcon}
                />
                Dictionary
            </Button>

            <Touchbar />
        </div>
    );
};
