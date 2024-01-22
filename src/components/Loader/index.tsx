import { useLoaderStyles } from "./styles";
import "./animations.css";
import clsx from "clsx";

export const Loader: React.FC<React.SVGProps<SVGSVGElement>> = ({
    className,
    ...restProps
}) => {
    const styles = useLoaderStyles();
    return (
        <svg
            {...restProps}
            className={clsx(styles.spinner, className)}
            viewBox="0 0 50 50"
        >
            <circle
                className={styles.path}
                cx="25"
                cy="25"
                r="20"
                fill="none"
                strokeWidth="5"
            ></circle>
        </svg>
    );
};
