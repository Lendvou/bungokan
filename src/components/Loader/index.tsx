import { useLoaderStyles } from "./styles";

export const Loader = () => {
    const styles = useLoaderStyles();
    return <div className={styles.container}>Loading...</div>;
};
