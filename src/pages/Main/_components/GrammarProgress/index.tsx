import React from "react";
import { Card } from "@/components/Card";
import { useGrammarProgressStyles } from "./styles";
import useAsyncLiveQuery from "@/database/_utils/useAsyncLiveQuery";
import { getLessonsToStudy } from "@/database/userLessons/getLessonsToStudy";
import BackIcon from "@/assets/icons/back.svg?react";
import { useNavigate } from "react-router-dom";
import { ContentLoader } from "../../../../components/ContentLoader/index";
import { useRestoreScrollPosition } from "@/utils/useRestoreScrollPosition";

interface IGrammarProgressProps {
    asdf?: string;
}

export const GrammarProgress: React.FC<IGrammarProgressProps> = ({ asdf }) => {
    const navigate = useNavigate();

    const { data, isLoading } = useAsyncLiveQuery(getLessonsToStudy);
    // console.log("data", data);

    useRestoreScrollPosition(isLoading);

    const styles = useGrammarProgressStyles();

    return (
        <Card className={styles.container}>
            <div className={styles.header}>
                <span>Grammar</span>
            </div>

            <ContentLoader
                isLoading={isLoading}
                loaderSizeScale={0.6}
                content={() => (
                    <div className={styles.lessons}>
                        <span className={styles.lessonType}>
                            {data!.type === "next" ? "To study" : "Pending"}
                        </span>

                        <div className={styles.lessonsList}>
                            {data!.content.map((lesson) => (
                                <div
                                    key={lesson.id}
                                    className={styles.title}
                                    onClick={() =>
                                        navigate(
                                            `/grammar-lesson/${lesson.num}`
                                        )
                                    }
                                >
                                    <div className={styles.titleNum}>
                                        {lesson.num}
                                    </div>
                                    <span>{lesson.title}</span>

                                    <BackIcon
                                        width={40}
                                        height="100%"
                                        className={styles.gotoIcon}
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                )}
            />
        </Card>
    );
};
