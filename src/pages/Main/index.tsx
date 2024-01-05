import { useMainPageStyles } from "./styles";

export const MainPage = () => {
    const styles = useMainPageStyles();
    return (
        <div className={styles.container}>
            Overall progress
            <br />
            Grammar progress
            <br />
            Vocab progress
            <br />
            Kanji progress
        </div>
    );
};
