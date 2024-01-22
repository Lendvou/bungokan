import { createUseStyles } from "react-jss";

export const useMainPageStyles = createUseStyles({
    container: {
        // minHeight: "100vh",
        position: "relative",
    },
    body: {
        padding: "18px 12px",
        minHeight: "calc(100vh - 60px)",
    },
});
