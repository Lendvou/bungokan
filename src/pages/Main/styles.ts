import { createUseStyles } from "react-jss";

export const useMainPageStyles = createUseStyles({
    container: {
        // minHeight: "100vh",
        position: "relative",
    },
    body: {
        padding: "18px 12px",
        minHeight: "calc(100vh - 60px)",
    },
    dictionaryButton: {
        display: "flex",
        alignItems: "center",
        position: "sticky",
        bottom: 80,
        right: "5%",
        marginLeft: "auto",
        boxShadow: "0px 1px 6px 0px rgba(0,0,0,0.6)",
        zIndex: 20,
    },
    dictButtonIcon: {
        marginRight: 8,
    },
});
