import { createUseStyles } from "react-jss";

export const useGrammarLessonStyles = createUseStyles({
    container: {
        position: "relative",
        // overflow: "auto",
        // height: "100%",
    },
    header: {
        padding: "10px 12px",
        backgroundColor: "#181818",
        display: "flex",
        alignItems: "center",
        position: "sticky",
        top: 0,
        left: 0,
    },
    backIcon: {
        width: 20,
        transform: "rotate(90deg)",
    },
    doneIcon: {
        width: 20,
        marginLeft: "auto",
    },
    headerTitle: {
        overflow: "hidden",
        whiteSpace: "nowrap",
        textOverflow: "ellipsis",
    },
    title: {
        fontSize: 22,
        fontWeight: 500,
        padding: "16px 12px 4px",
    },
    body: {
        padding: "16px 12px",
    },
    newline: {
        display: "block",
        marginBottom: 14,
    },
    subtitle: {
        fontSize: 20,
        fontWeight: 500,
        marginTop: 22,
        marginBottom: 22,
    },
    text: {
        marginRight: 6,
    },
    image: {
        width: "100%",
        marginTop: 8,
        marginBottom: 8,
    },
});
