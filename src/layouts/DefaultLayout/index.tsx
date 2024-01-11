import React from "react";
import { useDefaultLayoutStyles } from "./styles";
import { ScrollRestoration, useNavigationType } from "react-router-dom";

interface IDefaultLayoutProps {
    children: React.ReactNode;
}

export const DefaultLayout: React.FC<IDefaultLayoutProps> = ({ children }) => {
    const navigationType = useNavigationType();

    console.log("navigation", navigationType);

    const styles = useDefaultLayoutStyles();
    return (
        <div className={styles.container}>
            <ScrollRestoration />

            {children}
        </div>
    );
};
