import clsx from "clsx";
import React from "react";
import { useButtonStyles } from "./styles";

interface IButtonProps
    extends React.DetailedHTMLProps<
        React.ButtonHTMLAttributes<HTMLButtonElement>,
        HTMLButtonElement
    > {
    children: React.ReactNode;
    progress?: number;
    isLoading?: boolean;
}

export const Button: React.FC<IButtonProps> = ({
    children,
    className,
    progress,
    isLoading = false,
    ...props
}) => {
    const styles = useButtonStyles({ progress });

    return (
        <button
            disabled={isLoading || Boolean(progress)}
            {...props}
            className={clsx(styles.button, className)}
        >
            {isLoading ? `Loading... (${progress}%)` : children}
        </button>
    );
};
