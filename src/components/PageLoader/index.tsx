import { Loader } from "../Loader";
import { usePageLoaderStyles } from "./styles";

export const PageLoader = () => {
    const styles = usePageLoaderStyles();
    return (
        <div className={styles.container}>
            <Loader />
        </div>
    );
};
