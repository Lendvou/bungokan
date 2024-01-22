import { createUseStyles } from "react-jss";

export const useKanjiPageStyles = createUseStyles({
    container: {
        textAlign: "center",
        marginTop: 50,
    },
    body: {
        minHeight: "calc(100vh - 60px)",
    },
});
