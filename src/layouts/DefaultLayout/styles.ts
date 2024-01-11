import { createUseStyles } from "react-jss";

export const useDefaultLayoutStyles = createUseStyles({
    container: {
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
        justifyContent: "space-between",
        "@media(min-width: 420px)": {
            maxWidth: 720,
            justifyContent: "center",
            margin: "auto",
        },
    },
});
