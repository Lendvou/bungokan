import React, { useDeferredValue, useEffect, useState } from "react";
import { Loader } from "../Loader";
import { useContentLoaderStyles } from "./styles";
import { CSSTransition } from "react-transition-group";
import clsx from "clsx";

interface IContentLoaderProps {
    isLoading?: boolean;
    content: () => React.ReactNode;
    fullPage?: boolean;
    loaderSizeScale?: number;
    loaderAppearTimer?: number;
}

export const ContentLoader: React.FC<IContentLoaderProps> = ({
    isLoading,
    content,
    fullPage = false,
    loaderSizeScale = 1,
    loaderAppearTimer = 200,
}) => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        setTimeout(() => setIsVisible(true), loaderAppearTimer);
    }, [loaderAppearTimer]);

    const styles = useContentLoaderStyles();
    return (
        <>
            {isLoading && (
                <div
                    className={clsx(styles.container, {
                        [styles.container__fullpage]: fullPage,
                    })}
                >
                    {isVisible ? (
                        <Loader
                            style={{ transform: `scale(${loaderSizeScale})` }}
                        />
                    ) : null}
                </div>
            )}
            <CSSTransition
                in={!isLoading}
                timeout={150}
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
