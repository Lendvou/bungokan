import { useMainPageStyles } from "./styles";
import { OverallProgress } from "./_components/OverallProgress";
import useAsyncLiveQuery from "../../database/_utils/useAsyncLiveQuery";
import moment from "moment";

export const MainPage = () => {
    const { data: overallProgress } = useAsyncLiveQuery((db) =>
        db.userProgress
            .where("dayTimestamp")
            .between(
                moment().subtract(28, "days").startOf("day").toDate(),
                moment().toDate()
            )
            .toArray()
    );

    // console.log("overallProgress", overallProgress);

    const styles = useMainPageStyles();
    return (
        <div className={styles.container}>
            <OverallProgress progressData={overallProgress} />
        </div>
    );
};
