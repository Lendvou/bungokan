import { useGrammarOverviewStyles } from "./styles";
import { CURE_DOLLY_DESCRIPTION } from "./constants";
import { Button } from "../../../../components/Button";
// import { useLoadGrammarContentStore } from "@/store/loadGrammar";
import { GrammarLoadStatus } from "@/store/loadGrammar/types";
import { useNavigate } from "react-router-dom";
import { RouteNames } from "@/router/routeNames";
import { useTypedStore } from "@/store";

export const GrammarOverview = () => {
    const navigate = useNavigate();

    const { status, downloadProgress, installProgress, loadGrammarContent } =
        useTypedStore((state) => state.loadGrammar);

    const handleLoadContentClick = () => {
        if (status === GrammarLoadStatus.done) {
            navigate(RouteNames.GRAMMAR);
        } else {
            loadGrammarContent();
        }
    };

    const styles = useGrammarOverviewStyles();

    const renderButtonText = () => {
        if (status === GrammarLoadStatus.notStarted) {
            return "Download (14.20Mb)";
        }
        if (status === GrammarLoadStatus.downloading) {
            return `Downloading... ${downloadProgress}`;
        }
        if (status === GrammarLoadStatus.installing) {
            return `Installing... ${installProgress}`;
        }
        return "Go to contents";
    };

    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <h1 className={styles.title}>Cure dolly organic japanese</h1>
            </div>

            <div className={styles.body}>
                <Button
                    disabled={status !== GrammarLoadStatus.notStarted}
                    onClick={handleLoadContentClick}
                >
                    {renderButtonText()}
                </Button>

                <div className={styles.description}>
                    {CURE_DOLLY_DESCRIPTION.split("\n").map((text, i) => (
                        <div key={i} className={styles.descriptionText}>
                            {text}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};
