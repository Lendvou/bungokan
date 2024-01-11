import { useParams } from "react-router-dom";
import useAsyncLiveQuery from "../../database/_utils/useAsyncLiveQuery";
import { useGrammarLessonStyles } from "./styles";
import { Content } from "../../database/lessons";
import { BlobImage } from "../../components/BlobImage";
import { GrammarLessonHeader } from "./_components/Header";
import { PageLoader } from "../../components/PageLoader";
import { Button } from "../../components/Button";

export const GrammarLessonPage = () => {
    const params = useParams();

    const { data } = useAsyncLiveQuery((db) =>
        db.lessons.get({ num: params.num })
    );

    const { data: grammarMeta } = useAsyncLiveQuery(
        (db) => db.grammarCourses.get({ courseName: data?.courseName || "" }),
        [data]
    );

    const styles = useGrammarLessonStyles();
    if (!data || !grammarMeta) {
        return <PageLoader />;
    }

    const renderContent = (item: Content, i: number) => {
        if (item.type === "image") {
            return (
                <BlobImage
                    key={i}
                    filename={item.content}
                    className={styles.image}
                />
            );
        }
        if (item.type === "newline") {
            return <div key={i} className={styles.newline} />;
        }
        if (item.type === "subtitle") {
            return (
                <div key={i} className={styles.subtitle}>
                    {item.content}
                </div>
            );
        }
        return (
            <span key={i} className={styles.text}>
                {item.content}
            </span>
        );
    };

    return (
        <div className={styles.container}>
            <GrammarLessonHeader
                data={data}
                courseFullName={grammarMeta?.fullName}
            />

            <div className={styles.title}>
                Lesson {data.num}: {data.title}
            </div>

            <div className={styles.body}>
                {data.content.map((content, i) =>
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
                {/* {data.content.map((content, i) => renderContent(content, i))} */}
            </div>
        </div>
    );
};
