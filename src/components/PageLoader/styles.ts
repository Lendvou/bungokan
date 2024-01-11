import { createUseStyles } from "react-jss";

export const usePageLoaderStyles = createUseStyles({
    container: {
        position: "fixed",
        zIndex: 10,
        width: "100vw",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    },
});
