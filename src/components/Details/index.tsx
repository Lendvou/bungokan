import React, { useState } from "react";
import { useDetailsStyles } from "./styles";
import clsx from "clsx";
import ArrowDown from "../../assets/icons/arrow-down.svg";

interface IDetailsProps {
    onClick?: () => void;
    title: React.ReactNode;
    children: React.ReactNode;
    className?: string;
    hideArrow?: boolean;
}

export const Details: React.FC<IDetailsProps> = ({
    title,
    children,
    className,
    onClick,
    hideArrow = false,
}) => {
    const [isOpened, setIsOpened] = useState<boolean>(false);

    const handleArrowClick: React.MouseEventHandler<HTMLImageElement> = (e) => {
        e.stopPropagation();
        setIsOpened((v) => !v);
    };

    const styles = useDetailsStyles({ isOpened });
    return (
        <div className={clsx(styles.container, className)} onClick={onClick}>
            <div className={styles.title}>
                <span className={styles.titleText}>{title}</span>

                {!hideArrow && (
                    <img
                        src={ArrowDown}
                        alt="arrow"
                        className={styles.arrow}
                        onClick={handleArrowClick}
                    />
                )}
            </div>

            <div
                className={clsx(styles.content, {
                    [styles.content__opened]: isOpened,
                })}
            >
                {children}
            </div>
        </div>
    );
};
