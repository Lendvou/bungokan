import clsx from "clsx";
import React from "react";
import { useButtonStyles } from "./styles";
import { Ripples } from "../Ripples";

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
        <Ripples>
            <button
                disabled={isLoading || Boolean(progress)}
                {...props}
                className={clsx(styles.button, className)}
            >
                {isLoading ? `Loading... (${progress}%)` : children}
            </button>
        </Ripples>
    );
};
