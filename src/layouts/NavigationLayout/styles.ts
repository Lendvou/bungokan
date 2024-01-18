import { createUseStyles } from "react-jss";

export const useNavigationLayoutStyles = createUseStyles({
    container: {
        position: "relative",
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
        justifyContent: "space-between",
        "@media(min-width: 420px)": {
            maxWidth: 720,
            margin: "auto",
        },
    },
    body: {
        height: "100vh",
        overflow: "auto",
    },
    touchbar: {
        position: "sticky",
        left: 0,
        bottom: 0,
        display: "flex",
        justifyContent: "space-around",
        alignItems: "stretch",
        backgroundColor: "#181818",
        paddingTop: 8,
        paddingBottom: 8,
        // width: "calc(100% - 8px)",
        width: "100%",
        paddingLeft: 4,
        paddingRight: 4,
        marginTop: 20,
        "@media(min-height: 420px)": {
            maxWidth: 720,
        },
    },
    touchbarItem: {
        width: "20%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        minHeight: "100%",
        alignItems: "center",
        cursor: "pointer",
        "-webkit-tap-highlight-color": "transparent",
        userSelect: "none",
    },
    touchbarItem__active: {
        backgroundColor: "#3E3E3E",
        borderRadius: 4,
    },
    name: {
        width: "100%",
        color: "white",
        fontSize: 11,
        textAlign: "center",
        marginTop: 2,
    },
});
