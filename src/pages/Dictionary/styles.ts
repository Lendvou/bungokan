import { createUseStyles } from "react-jss";

export const useDictionaryPageStyles = createUseStyles({
    container: {
        position: "relative",
    },
    searchInput: {
        width: "100%",
        marginRight: 20,
        marginLeft: 8,
    },
    clipboardIcon: {
        marginRight: 14,
        maxWidth: 27,
        minWidth: 27,
        height: 27,
        cursor: "pointer",
    },
    deleteIcon: {
        maxWidth: 24,
        minWidth: 24,
        height: 24,
        cursor: "pointer",
    },
    noDictionary: {
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        textAlign: "center",
        marginTop: 40,
        padding: "0 36px",
    },
    noDictionaryText: {
        marginBottom: 14,
    },
    body: {
        minHeight: "100vh",
    },
});
