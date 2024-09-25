import React from "react";
import { useDownloadGrammarContentStyles } from "./styles";
import { GrammarLoadStatus } from "@/store/loadGrammar/types";
import { useTypedStore } from "@/store";
import { useNavigate } from "react-router-dom";
import { Button } from "../Button";
import { RouteNames } from "@/router/routeNames";

export const CURE_DOLLY_DESCRIPTION = `Hi, Here are a couple of points regarding this "textbook".\nIf you don't know, Cure Dolly's youtube playlist is highly praised in the Japanese learning community. The two most popular textbooks Genki and Tae Kim usually try to find parallels between Japanese and english. Cure Dolly's approach is to teach Japanese from a Japanese point of view, which makes things more logical. Generally, the experience is to have some practical or basic knowledge of japanese and when reading Cure Dolly, things start to "click". I'm not sure how easy it is to start with Cure Dolly from scratch though since after the first 20 lessons or so, things are less organized, and the approach is more like "video of the week”.\nOne of the main issues that people have with Cure Dolly is the presentation. The robot voice can be pretty difficult to understand or downright unbearable for some. Given the value of the content, I decided to make a textbook version using the transcripts as a solution to this problem. I still included screenshots from the video when visual cues were helpful. It also makes the whole thing more appealing. There’s still the youtube link for each version. If you watch the video, changing the speed, and using the subs can make the experience more enjoyable.\nAll credit to Cure Dolly and fans who made the transcript available on the channel. The only edit I did to the text was to correct some typos and to cut the last part that is often dedicated to thanking patreons and the usual "like and subscribe" speech. However I encourage you to check the video since more often than not you'll find valuable content in the comment section.\nEvery lesson is available in this textbook. However the text formatting and screenshot inclusion is still in progress. Some extra videos from the channel are not included. You can still find the video list with links to the channel below.\nTo make things easier to read, I'm changing the romaji from the transcript to japanese. However, even though I'll go lesson by lesson, I'll change all the same words at once. So you will see sentences mixing up romaji and japanese until I'm finished with all the videos. Apologies for that.`;

interface IDownloadGrammarContentProps {
    withLongDescription?: boolean;
}

export const DownloadGrammarContent: React.FC<IDownloadGrammarContentProps> = ({
    withLongDescription = false,
}) => {
    const navigate = useNavigate();

    const { status, downloadProgress, installProgress, loadGrammarContent } =
        useTypedStore((state) => state.loadGrammar);

    const handleLoadContentClick = () => {
        if (status === GrammarLoadStatus.done) {
            navigate(RouteNames.GRAMMAR);
        } else {
            loadGrammarContent();
        }
    };

    const styles = useDownloadGrammarContentStyles();

    const renderButtonText = () => {
        if (status === GrammarLoadStatus.notStarted) {
            return "Download (14.20Mb)";
        }
        if (status === GrammarLoadStatus.downloading) {
            return `Downloading... ${downloadProgress}`;
        }
        if (status === GrammarLoadStatus.installing) {
            return `Installing... ${installProgress}`;
        }
        return "Go to contents";
    };

    return (
        <div>
            <div className={styles.header}>
                <h1 className={styles.title}>Cure dolly organic japanese</h1>
            </div>

            <div className={styles.body}>
                <Button
                    disabled={status !== GrammarLoadStatus.notStarted}
                    onClick={handleLoadContentClick}
                >
                    {renderButtonText()}
                </Button>

                <div className={styles.description}>
                    {withLongDescription ? (
                        CURE_DOLLY_DESCRIPTION.split("\n").map((text, i) => (
                            <div key={i} className={styles.descriptionText}>
                                {text}
                            </div>
                        ))
                    ) : (
                        <div>Cure dolly organic japanese description</div>
                    )}
                </div>
            </div>
        </div>
    );
};
