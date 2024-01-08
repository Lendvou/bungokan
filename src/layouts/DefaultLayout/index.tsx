import React from "react";

interface IDefaultLayoutProps {
    children: React.ReactNode;
}

export const DefaultLayout: React.FC<IDefaultLayoutProps> = ({ children }) => {
    return <div>{children}</div>;
};
