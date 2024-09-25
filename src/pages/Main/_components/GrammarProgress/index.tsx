import { Card } from "@/components/Card";
import { useGrammarProgressStyles } from "./styles";
import useAsyncLiveQuery from "@/database/_utils/useAsyncLiveQuery";
import { getLessonsToStudy } from "@/database/userLessons/getLessonsToStudy";
import BackIcon from "@/assets/icons/back.svg?react";
import { useNavigate } from "react-router-dom";
import { ContentLoader } from "../../../../components/ContentLoader/index";
import { useRestoreScrollPosition } from "@/utils/useRestoreScrollPosition";
import { GrammarCourses } from "@/database/grammarCourses";
import { DownloadGrammarContent } from "@/components/DownloadGrammarContent";
import { checkIsCourseInstalled } from "@/database/grammarCourses/checkIsCourseInstalled";

export const GrammarProgress = () => {
    const navigate = useNavigate();

    const { data: isCourseInstalled, isLoading: isMetaLoading } =
        useAsyncLiveQuery(() =>
            checkIsCourseInstalled(GrammarCourses.CURE_DOLLY)
        );
    const { data: lessonsToStudy, isLoading: isLessonsLoading } =
        useAsyncLiveQuery(getLessonsToStudy);

    useRestoreScrollPosition(isMetaLoading || isLessonsLoading);

    const styles = useGrammarProgressStyles();

    return (
        <Card className={styles.container}>
            <div className={styles.header}>
                <span>Grammar</span>
            </div>

            <ContentLoader
                isLoading={isMetaLoading || isLessonsLoading}
                loaderSizeScale={0.6}
                content={() =>
                    isCourseInstalled ? (
                        <div className={styles.lessons}>
                            <span className={styles.lessonType}>
                                {lessonsToStudy!.type === "next"
                                    ? "To study"
                                    : "Pending"}
                            </span>

                            <div className={styles.lessonsList}>
                                {lessonsToStudy?.content.map((lesson) => (
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
                    ) : (
                        <DownloadGrammarContent />
                    )
                }
            />
        </Card>
    );
};
