import React from "react";
import { useHeaderStyles } from "./styles";
import BackIcon from "@/assets/icons/back.svg?react";
import { useNavigate } from "react-router-dom";
import clsx from "clsx";

interface IHeaderProps
    extends React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLDivElement>,
        HTMLDivElement
    > {
    withBackButton?: boolean;
}

export const Header: React.FC<IHeaderProps> = ({
    children,
    withBackButton = false,
    className,
    ...restProps
}) => {
    const navigate = useNavigate();

    const styles = useHeaderStyles();
    return (
        <div {...restProps} className={clsx(styles.container, className)}>
            {withBackButton && (
                <BackIcon
                    cursor="pointer"
                    className={styles.backIcon}
                    onClick={() => navigate(-1)}
                />
            )}

            {children}
        </div>
    );
};
