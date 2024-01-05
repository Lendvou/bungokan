import React from "react";
import { useNavigationLayoutStyles } from "./styles";
import { touchbarItems } from "./constants";
import clsx from "clsx";
import { useLocation, useNavigate } from "react-router-dom";

interface INavigationLayoutProps {
    children: React.ReactNode;
}

export const NavigationLayout: React.FC<INavigationLayoutProps> = ({
    children,
}) => {
    const location = useLocation();
    const navigate = useNavigate();

    const styles = useNavigationLayoutStyles();

    return (
        <div className={styles.container}>
            {children}

            <div className={styles.touchbar}>
                {touchbarItems.map(({ name, icon, link }) => (
                    <div
                        key={name}
                        className={clsx(styles.touchbarItem, {
                            [styles.touchbarItem__settings]:
                                name === "Settings",
                            [styles.touchbarItem__active]:
                                location.pathname === link,
                        })}
                        onClick={() => navigate(link, { replace: true })}
                    >
                        <img src={icon} alt={name} className={styles.icon} />
                        <span className={styles.name}>{name}</span>
                    </div>
                ))}
            </div>
        </div>
    );
};
