import { createUseStyles } from "react-jss";

export const useLoaderStyles = createUseStyles({
    spinner: {
        animation: "rotate 2s linear infinite",
        width: 50,
        height: 50,
    },
    path: {
        stroke: "#ffffff",
        strokeLinecap: "round",
        animation: "dash 1.5s ease-in-out infinite",
    },
});
