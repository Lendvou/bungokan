import { useState } from "react";
import { useGrammarOverviewStyles } from "./styles";
import { CURE_DOLLY_DESCRIPTION } from "./constants";
import { Button } from "../../../../components/Button";
import { loadGrammarContent } from "../../_utils/loadGrammarContent";

export const GrammarOverview = () => {
    const [progress, setProgress] = useState<number>();

    const startLoading = () => {
        setProgress(0);
        setInterval(() => {
            setProgress((v) => ((v || 0) + 8 >= 100 ? 100 : (v || 0) + 8));
        }, 1000);

        loadGrammarContent();
    };

    const styles = useGrammarOverviewStyles();

    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <h1 className={styles.title}>Cure dolly organic japanese</h1>
            </div>

            <div className={styles.body}>
                <Button
                    isLoading={progress !== undefined}
                    progress={progress}
                    onClick={startLoading}
                >
                    Download {"(14.20Mb)"}
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
