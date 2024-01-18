import { createUseStyles } from "react-jss";

interface IUseDetailsStylesProps {
    isOpened: boolean;
}

export const useDetailsStyles = createUseStyles<string, IUseDetailsStylesProps>(
    {
        container: {
            // padding: "8px 4px",
        },
        title: {
            fontWeight: 500,
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
        },
        titleText: {
            paddingRight: 20,
        },
        arrow: ({ isOpened }) => ({
            // width: 40,
            padding: 10,
            transform: isOpened ? `rotate(${180}deg)` : null,
            transition: "0.2s",
        }),
        content: ({ isOpened }) => ({
            fontSize: 14,
            paddingLeft: 16,
            paddingRight: 16,
            transition: "all 0.2s",
            // opacity: isOpened ? 1 : 0,
            // transform: isOpened ? "scaleY(1)" : "scaleY(0)",
            height: isOpened ? "auto" : 0,
            overflow: isOpened ? "visible" : "hidden",
            // transformOrigin: "top",
            // visibility: isOpened ? "visible" : "hidden",
        }),
    }
);
