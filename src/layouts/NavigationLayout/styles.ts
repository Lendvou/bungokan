import { createUseStyles } from "react-jss";

export const useNavigationLayoutStyles = createUseStyles({
    container: {
        // paddingLeft: 12,
        // paddingRight: 12,
        paddingBottom: 58,
    },
    touchbar: {
        position: "fixed",
        left: 0,
        bottom: 0,
        display: "flex",
        justifyContent: "space-around",
        alignItems: "stretch",
        backgroundColor: "#242424",
        paddingTop: 8,
        paddingBottom: 8,
        width: "calc(100% - 8px)",
        paddingLeft: 4,
        paddingRight: 4,
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
    touchbarItem__settings: {
        "& img": {
            marginTop: 3,
            width: "30%",
        },
    },
    touchbarItem__active: {
        backgroundColor: "#3E3E3E",
        borderRadius: 4,
    },
    icon: {
        width: "35%",
    },
    name: {
        width: "100%",
        color: "white",
        fontSize: 11,
        textAlign: "center",
        marginTop: 2,
    },
});
