import { createUseStyles } from "react-jss";

export const useGrammarOverviewStyles = createUseStyles({
    container: {
        position: "relative",
    },
    header: {
        position: "sticky",
        top: 0,
        backgroundColor: "#292929",
        zIndex: 2,
        paddingTop: 18,
        paddingBottom: 18,
        marginBottom: 20,
        boxShadow: "0px 3px 5px 0px rgba(0,0,0,0.45)",
        // borderBottom: "1px solid white",
    },
    title: {
        fontSize: 24,
        textAlign: "center",
        margin: 0,
        // marginTop: 25,
        // marginBottom: 25,
    },
    body: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "0 12px",
    },
    newline: {
        marginBottom: 10,
    },
    description: {
        marginTop: 14,
    },
    descriptionText: {
        marginTop: 0,
        marginBottom: 10,
    },
});
