import { useNavigate } from "react-router-dom";
import useAsyncLiveQuery from "@/database/_utils/useAsyncLiveQuery";
import { getLessonsListByType } from "@/database/lessons/getLessonsListByType";
import { GrammarCourses } from "@/database/grammarCourses";
import { updateLessonLearnedStatus } from "@/database/userLessons/updateLessonLearnedStatus";
import SearchIcon from "@/assets/icons/search.svg?react";
import DoneIcon from "@/assets/icons/done.svg?react";
import { useGrammarContentsStyles } from "./styles";
import { ContentLoader } from "@/components/ContentLoader";
import { useRestoreScrollPosition } from "@/utils/useRestoreScrollPosition";
import { Touchbar } from "@/components/Touchbar";

export const GrammarContents = () => {
    const navigate = useNavigate();

    const { data, isLoading } = useAsyncLiveQuery(() =>
        getLessonsListByType(GrammarCourses.CURE_DOLLY)
    );

    const handleTitleClick = (num: string) => {
        navigate(`/grammar-lesson/${num}`);
    };
    const handleClickDone = (
        e: React.MouseEvent<SVGSVGElement, MouseEvent>,
        num: string
    ) => {
        e.stopPropagation();
        updateLessonLearnedStatus(num);
    };

    useRestoreScrollPosition(isLoading);

    const styles = useGrammarContentsStyles();

    return (
        <>
            <ContentLoader
                isLoading={isLoading}
                fullPage
                content={() => (
                    <div className={styles.container}>
                        <div className={styles.header}>
                            <div className={styles.headerInfo}>
                                <span className={styles.grammarCourse}>
                                    Grammar course
                                </span>
                                <span className={styles.courseName}>
                                    Cure dolly organic japanese
                                </span>
                            </div>
                            <SearchIcon width={18} height={"100%"} />
                        </div>

                        <div className={styles.list}>
                            {data?.map((item) => (
                                <div
                                    key={item.num}
                                    className={styles.listItem}
                                    onClick={() => handleTitleClick(item.num)}
                                >
                                    <div className={styles.title}>
                                        <div className={styles.titleNum}>
                                            {item.num}
                                        </div>
                                        <span>{item.title}</span>

                                        <div className={styles.infoBlock}>
                                            <DoneIcon
                                                width={23}
                                                height={23}
                                                color={
                                                    item.userLesson
                                                        ?.learningProgress ===
                                                    100
                                                        ? "#00B489"
                                                        : "#ffffff"
                                                }
                                                onClick={(e) =>
                                                    handleClickDone(e, item.num)
                                                }
                                            />
                                            {![0, 100].includes(
                                                item.userLesson
                                                    ?.learningProgress || 0
                                            ) && (
                                                <span
                                                    className={
                                                        styles.lessonProgress
                                                    }
                                                >
                                                    {
                                                        item.userLesson
                                                            ?.learningProgress
                                                    }
                                                    %
                                                </span>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                )}
            />
            <Touchbar />
        </>
    );
};
