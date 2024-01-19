import React from "react";
import { Loader } from "../Loader";
import { useContentLoaderStyles } from "./styles";
import { CSSTransition } from "react-transition-group";
import clsx from "clsx";

interface IContentLoaderProps {
    isLoading?: boolean;
    content: () => React.ReactNode;
    fullPage?: boolean;
    loaderSizeScale?: number;
}

export const ContentLoader: React.FC<IContentLoaderProps> = ({
    isLoading,
    content,
    fullPage = false,
    loaderSizeScale = 1,
}) => {
    const styles = useContentLoaderStyles();
    return (
        <>
            {isLoading && (
                <div
                    className={clsx(styles.container, {
                        [styles.container__fullpage]: fullPage,
                    })}
                    style={{ transform: `scale(${loaderSizeScale})` }}
                >
                    <Loader />
                </div>
            )}
            <CSSTransition
                in={!isLoading}
                timeout={200}
                classNames={{
                    enter: styles.fadeEnter,
                    enterActive: styles.fadeEnterActive,
                    enterDone: styles.fadeEnterDone,
                }}
                mountOnEnter
                unmountOnExit
            >
                {isLoading ? <span /> : content()}
                {/* <div ref={nodeRef} className={styles.contentWrapper}>
                </div> */}
            </CSSTransition>
        </>
    );
};
