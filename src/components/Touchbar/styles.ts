import { createUseStyles } from "react-jss";

export const useTouchbarStyles = createUseStyles({
    container: {
        position: "sticky",
        left: 0,
        bottom: "0px",
        display: "flex",
        justifyContent: "space-around",
        alignItems: "stretch",
        justifySelf: "flex-end",
        backgroundColor: "#181818",
        paddingTop: 8,
        paddingBottom: 8,
        // width: "calc(100% - 8px)",
        width: "100%",
        paddingLeft: 4,
        paddingRight: 4,
        marginTop: 20,
        zIndex: 10,
        "@media(min-width: 420px)": {
            width: "100%",
            height: 100,
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
