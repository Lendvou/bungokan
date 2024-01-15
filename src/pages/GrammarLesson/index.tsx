import { useParams } from "react-router-dom";
import useAsyncLiveQuery from "../../database/_utils/useAsyncLiveQuery";
import { useGrammarLessonStyles } from "./styles";
import { BlobImage } from "../../components/BlobImage";
import { GrammarLessonHeader } from "./_components/Header";
import { PageLoader } from "../../components/PageLoader";
import { useTrackLessonsProgress } from "./_utils/useTrackLessonsProgress";
import { db } from "../../database";

export const GrammarLessonPage = () => {
    const params = useParams();

    const { data: lesson } = useAsyncLiveQuery((db) =>
        db.lessons.get({ num: params.num })
    );
    const { data: grammarMeta } = useAsyncLiveQuery(
        (db) => db.grammarCourses.get({ courseName: lesson?.courseName || "" }),
        [lesson]
    );
    const { data: userLesson } = useAsyncLiveQuery(
        (db) => db.userLessons.get({ num: lesson?.num || "" }),
        [lesson]
    );

    const handleClickDone = async () => {
        if (!lesson) {
            return;
        }
        if (!userLesson?.id) {
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
