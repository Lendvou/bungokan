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
        padding: "1em 1.8em",
        fontFamily: "inherit",
        outline: "none",
        fontSize: 14,
        fontWeight: 500,
        textTransform: "uppercase",
        position: "relative",
        // "-webkit-tap-highlight-color": "transparent",
    }),
});
