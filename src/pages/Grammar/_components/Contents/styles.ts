import { createUseStyles } from "react-jss";

export const useGrammarContentsStyles = createUseStyles({
    container: {
        // paddingLeft: 12,
        // paddingRight: 12,
    },
    courseName: {
        fontSize: 18,
        fontWeight: 500,
        paddingTop: 10,
        paddingBottom: 10,
        paddingLeft: 20,
        paddingRight: 20,
        backgroundColor: "#242424",
        marginBottom: 10,
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
    },
    searchIcon: {
        width: 20,
    },
    list: {},
    listItem: {
        paddingBottom: 4,
        paddingTop: 4,
        paddingLeft: 12,
        borderTop: "1px solid #626262",
        "&:last-child": {
            borderBottom: "1px solid #626262",
        },
    },
    title: {
        paddingTop: 4,
        paddingBottom: 4,
        fontWeight: 500,
    },
    titleNum: {
        marginRight: 6,
    },
    subtitles: {
        // marginTop: 10,
        padding: "8px 0",
    },
    subtitle: {
        fontSize: 14,
        // marginBottom: 12,
        paddingTop: 4,
        paddingBottom: 4,
    },
});
