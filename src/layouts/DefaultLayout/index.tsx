import React from "react";
import { useDefaultLayoutStyles } from "./styles";
import { ScrollRestoration } from "react-router-dom";

interface IDefaultLayoutProps {
    children: React.ReactNode;
}

export const DefaultLayout: React.FC<IDefaultLayoutProps> = ({ children }) => {
    const styles = useDefaultLayoutStyles();
    return (
        <div className={styles.container}>
            <ScrollRestoration />

            {children}
        </div>
    );
};
