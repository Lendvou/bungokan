import clsx from "clsx";
import { TOUCHBAR_ITEMS } from "./constants";
import { useTouchbarStyles } from "./styles";
import { useNavigate } from "react-router-dom";

export const Touchbar = () => {
    const navigate = useNavigate();

    const styles = useTouchbarStyles();
    return (
        <div className={styles.container}>
            {TOUCHBAR_ITEMS.map(({ name, Icon, link }) => (
                <div
                    key={name}
                    className={clsx(styles.touchbarItem, {
                        [styles.touchbarItem__active]:
                            location.pathname === link,
                    })}
                    onClick={() => navigate(link, { replace: true })}
                >
                    <Icon width={"35%"} height={"100%"} />
                    <span className={styles.name}>{name}</span>
                </div>
            ))}
        </div>
    );
};
