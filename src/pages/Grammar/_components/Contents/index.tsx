import { Details } from "../../../../components/Details";
import { useGrammarContentsStyles } from "./styles";
import SearchSVG from "../../../../assets/icons/search.svg";
import useAsyncLiveQuery from "../../../../database/_utils/useAsyncLiveQuery";
import { GrammarCourses } from "../../../../database/grammarCourses";
import { useNavigate } from "react-router-dom";
import { db } from "../../../../database";
import { ILessonListItem } from "../../../../database/lessons";
import { Ripples } from "../../../../components/Ripples";

const CONTENTS_LIST = [
    {
        num: "1",
        title: "Type of sentences",
        subtitles: [
            "The japanese core sentences",
            "The particle Ga",
            "The Verb sentences",
        ],
    },
    {
        num: "2b",
        title: "Omitting the subject",
        subtitles: ["The invisible carriage", "The particle Wo"],
    },
    {
        num: "3",
        title: "Te-oku vs te-shimau, helper verb secrets. ておく てしまう",
        subtitles: [
            `The particle Wa, what it isn't, what it is, Wa doesn't mean "="`,
            "Logical / non-logical particle",
        ],
    },
];

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
