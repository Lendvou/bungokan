import { createUseStyles } from "react-jss";

export const useHeaderStyles = createUseStyles({
    container: {
        padding: "6px 10px",
        backgroundColor: "#181818",
        display: "flex",
        alignItems: "center",
        position: "sticky",
        top: 0,
        left: 0,
        overflow: "hidden",
        height: 51,
        zIndex: 10,
        // width: "100%",
    },
    backIcon: {
        marginRight: 10,
        maxWidth: 20,
        minWidth: 20,
        height: 20,
    },
});
