import React from "react";
import { Card } from "../../../../components/Card";
import { useGrammarProgressStyles } from "./styles";
import useAsyncLiveQuery from "../../../../database/_utils/useAsyncLiveQuery";
import { getLessonsToStudy } from "../../../../database/userLessons/getLessonsToStudy";
import BackIcon from "../../../../assets/icons/back.svg";
import { useNavigate } from "react-router-dom";

interface IGrammarProgressProps {
    asdf?: string;
}

export const GrammarProgress: React.FC<IGrammarProgressProps> = ({ asdf }) => {
    const navigate = useNavigate();

    const { data } = useAsyncLiveQuery(getLessonsToStudy);
    console.log("data", data);

    const styles = useGrammarProgressStyles();

    return (
        <Card className={styles.container}>
            <div className={styles.header}>
                <span>Grammar</span>
            </div>

            {data ? (
                <div className={styles.lessons}>
                    <span className={styles.lessonType}>
                        {data.type === "next" ? "To study" : "Pending"}
                    </span>

                    <div className={styles.lessonsList}>
                        {data.content.map((lesson) => (
                            <div
                                key={lesson.id}
                                className={styles.title}
                                onClick={() =>
                                    navigate(`/grammar-lesson/${lesson.num}`)
                                }
                            >
                                <div className={styles.titleNum}>
                                    {lesson.num}
                                </div>
                                <span>{lesson.title}</span>

                                <img
                                    src={BackIcon}
                                    alt="->"
                                    className={styles.gotoIcon}
                                />
                            </div>
                        ))}
                    </div>
                </div>
            ) : null}
        </Card>
    );
};
