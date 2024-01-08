import { createUseStyles } from "react-jss";

export const useNotFoundStyles = createUseStyles({
    container: {
        width: "100vw",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
    },
    text: {
        fontSize: "1.5em",
    },
});
