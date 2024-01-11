import { useGrammarLessonHeaderStyles } from "./styles";
import BackIcon from "../../../../assets/icons/back.svg";
import DoneIcon from "../../../../assets/icons/done.svg";
import { ILessonItem } from "../../../../database/lessons";
import { useNavigate } from "react-router-dom";

interface IGrammarLessonHeaderProps {
    data: ILessonItem;
    courseFullName: string;
    isHidden?: boolean;
}

export const GrammarLessonHeader: React.FC<IGrammarLessonHeaderProps> = ({
    data,
    courseFullName,
    isHidden = false,
}) => {
    const navigate = useNavigate();

    const styles = useGrammarLessonHeaderStyles({ isHidden });
    return (
        <div className={styles.header}>
            <img
                src={BackIcon}
                alt="back"
                className={styles.backIcon}
                onClick={() => navigate(-1)}
            />
            <div className={styles.title}>
                <span className={styles.courseName}>{courseFullName}</span>
                <div className={styles.lessonName}>
                    {data.num}. {data.title}
                </div>
            </div>
            <img src={DoneIcon} alt="completed" className={styles.doneIcon} />
        </div>
    );
};
