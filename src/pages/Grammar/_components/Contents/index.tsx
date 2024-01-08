import { Details } from "../../../../components/Details";
import { useGrammarContentsStyles } from "./styles";
import SearchSVG from "../../../../assets/icons/search.svg";

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
    const styles = useGrammarContentsStyles();

    return (
        <div className={styles.container}>
            <div className={styles.courseName}>
                Cure dolly organic japanese
                <img src={SearchSVG} alt="s" className={styles.searchIcon} />
            </div>

            <div className={styles.list}>
                {CONTENTS_LIST.map((item) => (
                    <div key={item.num} className={styles.listItem}>
                        <Details
                            onClick={() => console.log("on click")}
                            title={
                                <div className={styles.title}>
                                    <span className={styles.titleNum}>
                                        {item.num}.
                                    </span>
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
