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
        // opacity: 0.7,
    },
    pushEnterActive: {
        transform: "translateX(0px)",
        transition: `${TRANSITION_MS}ms`,
        opacity: 1,
    },
    pushExit: {
        opacity: 1,
    },
    pushExitActive: {
        // opacity: 0.7,
    },

    popEnter: {
        transform: "translateX(-40px)",
        // opacity: 0.7,
    },
    popEnterActive: {
        transform: "translateX(0px)",
        transition: `${TRANSITION_MS}ms`,
        opacity: 1,
    },
    popExit: {
        opacity: 1,
    },
    popExitActive: {
        // opacity: 0.7,
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
