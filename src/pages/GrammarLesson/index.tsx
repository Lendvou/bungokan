import { useParams } from "react-router-dom";
import useAsyncLiveQuery from "../../database/_utils/useAsyncLiveQuery";
import { useGrammarLessonStyles } from "./styles";
import { BlobImage } from "../../components/BlobImage";
import { GrammarLessonHeader } from "./_components/Header";
import { PageLoader } from "../../components/PageLoader";
import { useTrackLessonsProgress } from "./_utils/useTrackLessonsProgress";
import { db } from "../../database";
import { getLessonByNum } from "../../database/lessons/getLessonByNum";
import { getGrammarMetaInfo } from "../../database/grammarCourses/getGrammarMetaInfo";
import { getUserLessonByNum } from "../../database/userLessons/getUserLessonByNum";

export const GrammarLessonPage = () => {
    const params = useParams();

    const { data: lesson } = useAsyncLiveQuery(
        (db) => getLessonByNum(db, { num: params!.num }),
        [params],
        { skip: !params }
    );
    const { data: grammarMeta } = useAsyncLiveQuery(
        (db) => getGrammarMetaInfo(db, { courseName: lesson!.courseName }),
        [lesson],
        { skip: !lesson }
    );
    const { data: userLesson } = useAsyncLiveQuery(
        (db) => getUserLessonByNum(db, { num: lesson!.num }),
        [lesson],
        { skip: !lesson }
    );

    const handleClickDone = async () => {
        if (!lesson || !userLesson?.id) {
            return;
        }
        db.userLessons.update(userLesson.id, {
            learningProgress: userLesson.learningProgress === 100 ? 0 : 100,
        });
    };

    useTrackLessonsProgress(lesson);

    const styles = useGrammarLessonStyles();
    if (!lesson || !grammarMeta) {
        return <PageLoader />;
    }

    return (
        <div className={styles.container}>
            <GrammarLessonHeader
                data={lesson}
                courseFullName={grammarMeta?.fullName}
                learningProgress={userLesson?.learningProgress}
                onClickDone={handleClickDone}
            />

            <div className={styles.title}>
                Lesson {lesson.num}: {lesson.title}
            </div>

            <div className={styles.body}>
                {lesson.content.map((content, i) =>
                    content.type === "image" ? (
                        <BlobImage
                            key={i}
                            filename={content.content}
                            className={styles.image}
                        />
                    ) : content.type === "newline" ? (
                        <div key={i} className={styles.newline} />
                    ) : content.type === "subtitle" ? (
                        <div key={i} className={styles.subtitle}>
                            {content.content}
                        </div>
                    ) : (
                        <span key={i} className={styles.text}>
                            {content.content}
                        </span>
                    )
                )}
            </div>
        </div>
    );
};
