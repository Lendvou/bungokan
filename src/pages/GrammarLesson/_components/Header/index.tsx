import { ILessonItem } from "@/database/lessons";
import { useNavigate } from "react-router-dom";
import BackIcon from "@/assets/icons/back.svg?react";
import DoneIcon from "@/assets/icons/done.svg?react";
import { useGrammarLessonHeaderStyles } from "./styles";

interface IGrammarLessonHeaderProps {
    data: ILessonItem;
    courseFullName: string;
    isHidden?: boolean;
    learningProgress?: number;
    onClickDone: () => void;
}

export const GrammarLessonHeader: React.FC<IGrammarLessonHeaderProps> = ({
    data,
    courseFullName,
    isHidden = false,
    learningProgress,
    onClickDone,
}) => {
    const navigate = useNavigate();

    const styles = useGrammarLessonHeaderStyles({ isHidden, learningProgress });
    return (
        <div className={styles.header}>
            <BackIcon
                width={20}
                height={20}
                cursor="pointer"
                onClick={() => navigate(-1)}
            />
            <div className={styles.title}>
                <span className={styles.courseName}>{courseFullName}</span>
                <div className={styles.lessonName}>
                    {data.num}. {data.title}
                </div>
            </div>
            <DoneIcon
                width={25}
                height={25}
                color={learningProgress === 100 ? "#00B489" : "#ffffff"}
                className={styles.doneIcon}
                onClick={onClickDone}
            />
        </div>
    );
};
