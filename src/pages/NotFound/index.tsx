import { useNotFoundStyles } from "./styles";
import { LinkReplace } from "../../components/LinkReplace";

export const NotFound = () => {
    const styles = useNotFoundStyles();

    return (
        <div className={styles.container}>
            <span className={styles.text}>Not found</span>
            <LinkReplace to="/">Go to main page {"->"}</LinkReplace>
        </div>
    );
};
