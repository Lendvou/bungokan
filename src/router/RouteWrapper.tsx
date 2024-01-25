import React from "react";
import { createUseStyles } from "react-jss";
import {
    ScrollRestoration,
    useLocation,
    useNavigationType,
} from "react-router-dom";
import { CSSTransition, TransitionGroup } from "react-transition-group";

interface IRouteWrapperProps {
    Component: React.FC;
}

const TRANSITION_MS = 150;
const useRouterStyles = createUseStyles({
    pushEnter: {
        transform: "translateX(40px)",
        minHeight: "100vh",
    },
    pushEnterActive: {
        transform: "translateX(0px)",
        transition: `${TRANSITION_MS}ms`,
        minHeight: "100vh",
    },
    pushExit: {
        minHeight: "100vh",
    },
    pushExitActive: {
        minHeight: "100vh",
    },

    popEnter: {
        transform: "translateX(-40px)",
        minHeight: "100vh",
    },
    popEnterActive: {
        transform: "translateX(0px)",
        transition: `${TRANSITION_MS}ms`,
        minHeight: "100vh",
    },
    popExit: {
        minHeight: "100vh",
    },
    popExitActive: {
        minHeight: "100vh",
    },
});

export const RouteWrapper: React.FC<IRouteWrapperProps> = ({ Component }) => {
    const location = useLocation();
    const navigationType = useNavigationType();

    const getTransitionClassnames = () => {
        if (navigationType === "POP") {
            return {
                enter: styles.popEnter,
                enterActive: styles.popEnterActive,
                exit: styles.popExit,
                exitActive: styles.popExitActive,
            };
        } else if (navigationType === "PUSH") {
            return {
                enter: styles.pushEnter,
                enterActive: styles.pushEnterActive,
                exit: styles.pushExit,
                exitActive: styles.pushExitActive,
            };
        }
        return {};
    };

    const styles = useRouterStyles();

    return (
        <>
            <ScrollRestoration />
            <TransitionGroup>
                <CSSTransition
                    key={location.pathname}
                    timeout={navigationType === "REPLACE" ? 0 : TRANSITION_MS}
                    classNames={getTransitionClassnames()}
                    mountOnEnter
                    unmountOnExit
                >
                    <div>
                        <Component />
                    </div>
                </CSSTransition>
            </TransitionGroup>
        </>
    );
};
