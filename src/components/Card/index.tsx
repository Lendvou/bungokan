import clsx from "clsx";
import React from "react";
import { useCardStyles } from "./styles";

interface ICardProps {
    className?: string;
    children: React.ReactNode;
}

export const Card: React.FC<ICardProps> = ({ className, children }) => {
    const styles = useCardStyles();
    return <div className={clsx(styles.container, className)}>{children}</div>;
};
