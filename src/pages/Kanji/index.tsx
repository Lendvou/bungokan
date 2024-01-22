import { Touchbar } from "@/components/Touchbar";
import { useKanjiPageStyles } from "./styles";

export const KanjiPage = () => {
    const styles = useKanjiPageStyles();
    return (
        <div className={styles.container}>
            <div className={styles.body}>Work in progress</div>

            <Touchbar />
        </div>
    );
};
