import { useMainPageStyles } from "./styles";
import { Card } from "../../components/Card/index";

export const MainPage = () => {
    const styles = useMainPageStyles();
    return (
        <div className={styles.container}>
            <Card>sdfasdf</Card>
        </div>
    );
};
