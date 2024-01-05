import { Link } from "react-router-dom";
import { LinkReplace } from "../../components/LinkReplace";

export const VocabPage = () => {
    return (
        <div>
            <p>VocabPage</p>

            <Link to="/">go to Main page</Link>
            <br />
            <LinkReplace to="/">replace with Main page</LinkReplace>
        </div>
    );
};
