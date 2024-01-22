import { Touchbar } from "@/components/Touchbar";
import { useVocabPageStyles } from "./styles";

export const VocabPage = () => {
    const styles = useVocabPageStyles();
    return (
        <div className={styles.container}>
            <div className={styles.body}>Work in progress</div>
            <Touchbar />
        </div>
    );
};
