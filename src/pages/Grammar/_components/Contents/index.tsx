import { useGrammarContentsStyles } from "./styles";
import SearchSVG from "../../../../assets/icons/search.svg";
import useAsyncLiveQuery from "../../../../database/_utils/useAsyncLiveQuery";
import { useNavigate } from "react-router-dom";
import { getLessonsListByType } from "../../../../database/lessons/getLessonsListByType";
import { GrammarCourses } from "../../../../database/grammarCourses";
import DoneIcon from "../../../../assets/icons/done.svg";
import DoneSuccessIcon from "../../../../assets/icons/done-success.svg";
import { updateLessonLearnedStatus } from "../../../../database/userLessons/updateLessonLearnedStatus";

export const GrammarContents = () => {
    const navigate = useNavigate();

    const { data, isLoading } = useAsyncLiveQuery(() =>
        getLessonsListByType(GrammarCourses.CURE_DOLLY)
    );

    // console.log("content", data);

    const handleTitleClick = (num: string) => {
        navigate(`/grammar-lesson/${num}`);
    };
    const handleClickDone = (
        e: React.MouseEvent<HTMLImageElement, MouseEvent>,
        num: string
    ) => {
        e.stopPropagation();
        updateLessonLearnedStatus(num);
    };

    const styles = useGrammarContentsStyles();
    if (isLoading) {
        return (
            <div
                style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    height: "100vh",
                }}
            >
                Loading...
            </div>
        );
    }

    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <div className={styles.headerInfo}>
                    <span className={styles.grammarCourse}>Grammar course</span>
                    <span className={styles.courseName}>
                        Cure dolly organic japanese
                    </span>
                </div>
                <img src={SearchSVG} alt="s" className={styles.searchIcon} />
            </div>

            <div className={styles.list}>
                {data?.map((item) => (
                    <div
                        key={item.num}
                        className={styles.listItem}
                        onClick={() => handleTitleClick(item.num)}
                    >
                        <div className={styles.title}>
                            <div className={styles.titleNum}>{item.num}</div>
                            <span>{item.title}</span>

                            <img
                                src={
                                    item.userLesson?.learningProgress === 100
                                        ? DoneSuccessIcon
                                        : DoneIcon
                                }
                                alt="s"
                                className={styles.doneIcon}
                                onClick={(e) => handleClickDone(e, item.num)}
                            />
                        </div>

                        {/* <Details
                            hideArrow={item.subtitles.length < 1}
                            onClick={() => handleTitleClick(item.num)}
                            title={
                                <div className={styles.title}>
                                    <div className={styles.titleNum}>
                                        {item.num}
                                    </div>
                                    <span>{item.title}</span>
                                </div>
                            }
                        >
                            <div className={styles.subtitles}>
                                {item.subtitles.map((subtitle) => (
                                    <div
                                        key={subtitle}
                                        className={styles.subtitle}
                                    >
                                        {subtitle}
                                    </div>
                                ))}
                            </div>
                        </Details> */}
                    </div>
                ))}
            </div>
        </div>
    );
};
