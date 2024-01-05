import React, { useEffect, useState } from "react";
import { useLocation, useMatch } from "react-router-dom";

interface INavigationLayoutProps {
    children: React.ReactNode;
}

export const NavigationLayout: React.FC<INavigationLayoutProps> = ({
    children,
}) => {
    const location = useLocation();
    console.log("location", location);

    useEffect(() => {
        // window.onpopstate = (e) => {
        //     console.log("window.onpopstate", e.state);
        // };
    }, []);

    useEffect(() => {
        const stack: string[] = JSON.parse(
            sessionStorage.getItem("stack") || "[]"
        );

        if (stack.includes(location.key)) {
            console.log("BACK");
            sessionStorage.setItem(
                "stack",
                JSON.stringify(stack.slice(0, stack.length - 1))
            );
        } else if (location.state?.replace) {
            let index = stack.findIndex((key) => key === location.key);
            index = index === -1 ? stack.length - 1 : index;
            stack.splice(index, 1, location.key);
            sessionStorage.setItem("stack", JSON.stringify(stack));
            console.log("REPLACED", index);
        } else {
            console.log("FORWARD");

            sessionStorage.setItem(
                "stack",
                JSON.stringify(stack.concat(location.key))
            );
        }
        console.log(
            "useeffect",
            location.key,
            JSON.parse(sessionStorage.getItem("stack") || "[]")
        );
    }, [location]);

    return <div key={location.pathname}>{children}</div>;
};
