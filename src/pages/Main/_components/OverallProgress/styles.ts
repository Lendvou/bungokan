import { createUseStyles } from "react-jss";

export const useOverallProgressStyles = createUseStyles({
    container: {
        marginBottom: 20,
    },
    header: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        marginBottom: 12,
    },
    currentDate: {
        fontSize: 22,
        marginTop: 8,
        fontWeight: 500,
    },
    days: {
        display: "flex",
        justifyContent: "space-around",
        flexWrap: "wrap",
        marginBottom: 10,
    },
    day: {
        flex: "10%",
        // width: 20,
        height: 30,
        margin: 6,
        borderRadius: 6,
        backgroundColor: "#292929",
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-end",
        overflow: "hidden",
        position: "relative",
    },
    day__active: {
        opacity: 0.4,
    },
    dayProgressBar: {
        width: "100%",
        backgroundColor: "#8E3737",
        transition: "height 0.2s",
    },
    doneIconWrapper: {
        width: "100%",
        height: "100%",
        backgroundColor: "transparent",
        position: "absolute",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    },
    doneIcon: {
        // width: "50%",
        // opacity: 0,
        transition: "0.4s",
    },
    doneIcon__visible: {
        opacity: 1,
    },
    selectedDayInfo: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        fontSize: 14,
        padding: "0 8px",
    },
});
