import React, { useState } from "react";
import { useDetailsStyles } from "./styles";
import clsx from "clsx";
import ArrowDown from "@/assets/icons/arrow-down.svg?react";

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

    const handleArrowClick: React.MouseEventHandler<SVGSVGElement> = (e) => {
        e.stopPropagation();
        setIsOpened((v) => !v);
    };

    const styles = useDetailsStyles({ isOpened });
    return (
        <div className={clsx(styles.container, className)} onClick={onClick}>
            <div className={styles.title}>
                <span className={styles.titleText}>{title}</span>

                {!hideArrow && (
                    <ArrowDown
                        width={20}
                        height={20}
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
