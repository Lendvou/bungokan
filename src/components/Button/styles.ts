import { createUseStyles } from "react-jss";

interface IUseButtonStylesProps {
    progress?: number;
}

export const useButtonStyles = createUseStyles<string, IUseButtonStylesProps>({
    container: {},
    button: () => ({
        backgroundColor: "#8E3737",
        // cursor: progress === undefined ? "pointer" : "default",
        // pointerEvents: progress === undefined ? "none" : "auto",
        cursor: "pointer",
        color: "white",
        borderRadius: 6,
        border: "none",
        padding: "0.6em 1.6em 0.6em",
        fontFamily: "inherit",
        // transition: "all 0.2s",
        outline: "none",
        fontSize: 14,
        fontWeight: 500,
        textTransform: "uppercase",
        position: "relative",
        "-webkit-tap-highlight-color": "transparent",

        // backgroundPosition: "center",
        // transition: "background 0.8s",

        // "&:hover": {
        //     background:
        //         "#E75A5A radial-gradient(circle, transparent 1%, #E75A5A 1%) center/15000%",
        // },
        // "&:active": {
        //     backgroundColor: "#B84747",
        //     backgroundSize: "100%",
        //     transition: "background 0s",
        // },
    }),
});
