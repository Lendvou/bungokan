import { Details } from "../../../../components/Details";
import { useGrammarContentsStyles } from "./styles";
import SearchSVG from "../../../../assets/icons/search.svg";
import useAsyncLiveQuery from "../../../../database/_utils/useAsyncLiveQuery";
import { GrammarCourses } from "../../../../database/grammarCourses";
import { useNavigate } from "react-router-dom";
import { ILessonListItem } from "../../../../database/lessons";

export const GrammarContents = () => {
    const navigate = useNavigate();

    const { data, isLoading } = useAsyncLiveQuery(
        (db) =>
            db.lessons
                .where({ courseName: GrammarCourses.CURE_DOLLY })
                .toArray((arr) => {
                    const result: ILessonListItem[] = arr.map((item) => ({
                        ...item,
                        content: undefined,
                    }));
                    return result;
                }),
        []
    );

    const handleTitleClick = (num: string) => {
        navigate(`/grammar-lesson/${num}`);
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
                    <div key={item.num} className={styles.listItem}>
                        <Details
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
                        </Details>
                    </div>
                ))}
            </div>
        </div>
    );
};
