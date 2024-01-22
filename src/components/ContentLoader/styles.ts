import { createUseStyles } from "react-jss";

export const useContentLoaderStyles = createUseStyles({
    container: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    },
    container__fullpage: {
        // position: "fixed",
        zIndex: 10,
        width: "100vw",
        height: "100vh",
    },
    contentWrapper: {
        opacity: 0.5,
    },
    fadeEnter: {
        opacity: 0.5,
    },
    fadeEnterActive: {
        opacity: 1,
        transition: "0.2s",
    },
    fadeEnterDone: {
        opacity: 1,
    },
});
