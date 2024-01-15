import React from "react";
import { Card } from "../../../../components/Card";
import { useGrammarProgressStyles } from "./styles";
import useAsyncLiveQuery from "../../../../database/_utils/useAsyncLiveQuery";
import { getLessonsToStudy } from "../../../../database/userLessons/getLessonsToStudy";

interface IGrammarProgressProps {
    asdf?: string;
}

export const GrammarProgress: React.FC<IGrammarProgressProps> = ({ asdf }) => {
    const { data } = useAsyncLiveQuery(getLessonsToStudy);
    console.log("data", data);

    const styles = useGrammarProgressStyles();

    return (
        <Card>
            <div className={styles.header}>
                <span>Grammar</span>
            </div>
        </Card>
    );
};
