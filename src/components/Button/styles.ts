import { createUseStyles } from "react-jss";

interface IUseButtonStylesProps {
    progress?: number;
}

export const useButtonStyles = createUseStyles<string, IUseButtonStylesProps>({
    container: {},
    button: () => ({
        backgroundColor: "#8E3737",
        cursor: "pointer",
        color: "white",
        borderRadius: 6,
        border: "none",
        padding: "0.7em 1.6em",
        fontFamily: "inherit",
        // transition: "all 0.2s",
        outline: "none",
        fontSize: 14,
        fontWeight: 500,
        textTransform: "uppercase",
        position: "relative",
        "-webkit-tap-highlight-color": "transparent",
    }),
});
