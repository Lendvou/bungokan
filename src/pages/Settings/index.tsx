import { Touchbar } from "@/components/Touchbar";
import { useSettingsPageStyles } from "./styles";

export const SettingsPage = () => {
    const styles = useSettingsPageStyles();
    return (
        <div className={styles.container}>
            <div className={styles.body}>Work in progress</div>
            <Touchbar />
        </div>
    );
};
