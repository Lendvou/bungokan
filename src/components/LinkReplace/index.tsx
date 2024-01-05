import { Link, LinkProps } from "react-router-dom";

export const LinkReplace: React.FC<LinkProps> = ({
    children,
    state,
    ...props
}) => {
    return (
        <Link {...props} replace state={{ ...state, replace: true }}>
            {children}
        </Link>
    );
};
