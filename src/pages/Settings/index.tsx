import { Link } from "react-router-dom";
import { LinkReplace } from "../../components/LinkReplace";

export const SettingsPage = () => {
    return (
        <div>
            <p>SettingsPage</p>

            <Link to="/">go to Main page</Link>
            <br />
            <LinkReplace to="/">replace with Main page</LinkReplace>
        </div>
    );
};
