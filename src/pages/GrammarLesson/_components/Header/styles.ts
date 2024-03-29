import { createUseStyles } from "react-jss";

interface IUseGrammarLessonHeaderStylesProps {
    isHidden: boolean;
    learningProgress?: number;
}

export const useGrammarLessonHeaderStyles = createUseStyles<
    string,
    IUseGrammarLessonHeaderStylesProps
>({
    header: ({ isHidden }) => ({
        padding: "6px 10px",
        backgroundColor: "#181818",
        display: "flex",
        alignItems: "center",
        position: "sticky",
        top: 0,
        left: 0,
        opaicty: isHidden ? 0 : 1,
        // width: "100%",
        overflow: "hidden",
        height: 51,
    }),
    doneIcon: {
        marginLeft: "auto",
    },
    title: {
        width: "80%",
        marginLeft: 10,
        fontSize: 14,
        display: "flex",
        flexDirection: "column",
    },
    courseName: {
        fontSize: 12,
    },
    lessonName: {
        overflow: "hidden",
        whiteSpace: "nowrap",
        textOverflow: "ellipsis",
    },
});
