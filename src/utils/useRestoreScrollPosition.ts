import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export const useRestoreScrollPosition = (skip: boolean = false) => {
    const location = useLocation();

    useEffect(() => {
        if (!skip) {
            window.scrollTo(0, 0);
        }
    }, [skip, location.pathname]);
};
