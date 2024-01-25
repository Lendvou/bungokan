import { createUseStyles } from "react-jss";

export const useGrammarContentsStyles = createUseStyles({
    container: {
        // paddingLeft: 12,
        // paddingRight: 12,
        position: "relative",
    },
    header: {
        position: "sticky",
        top: 0,
        left: 0,
        fontSize: 16,
        padding: "6px 10px",
        backgroundColor: "#181818",
        // marginBottom: 10,
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
    },
    headerInfo: {
        display: "flex",
        flexDirection: "column",
    },
    grammarCourse: {
        fontSize: 12,
    },
    courseName: {
        fontWeight: 500,
        fontSize: 14,
    },
    list: {},
    listItem: {
        paddingBottom: 6,
        paddingTop: 6,
        paddingLeft: 6,
        borderBottom: "1px solid #626262",
        fontSize: 14,
        transition: "0.2s",
        cursor: "pointer",
        "&:hover": {
            backgroundColor: "#313131",
        },
    },
    title: {
        fontWeight: 500,
        display: "flex",
        alignItems: "center",
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
    infoBlock: {
        paddingLeft: 20,
        marginLeft: "auto",
        marginRight: 6,
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
    },
    lessonProgress: {
        // marginLeft: 8,
        // marginRight: 8,
        fontSize: 12,
    },
    doneIcon: {
        padding: 4,
    },
});
