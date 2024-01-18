import { createUseStyles } from "react-jss";

export const useGrammarProgressStyles = createUseStyles({
    container: {
        paddingLeft: 16,
        paddingRight: 16,
    },
    header: {
        textAlign: "center",
    },
    lessons: {
        marginTop: 8,
    },
    lessonsList: {
        fontSize: 14,
    },
    lessonType: {
        fontSize: 12,
    },
    title: {
        paddingTop: 4,
        paddingBottom: 4,
        fontWeight: 500,
        display: "flex",
        alignItems: "center",
        borderBottom: "1px solid #626262",
    },
    titleNum: {
        minWidth: 40,
        minHeight: 40,
        borderRadius: 1000,
        backgroundColor: "#181818",
        marginRight: 10,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        fontWeight: 500,
    },
    gotoIcon: {
        // width: 40,
        transform: "rotate(180deg)",
        marginLeft: "auto",
        padding: 10,
        // paddingLeft: 10,
    },
});
