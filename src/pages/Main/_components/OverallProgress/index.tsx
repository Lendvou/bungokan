import React, { useEffect, useMemo, useState } from "react";
import { IUserProgressItem } from "@/database/userProgress";
import { Card } from "@/components/Card";
import { useOverallProgressStyles } from "./styles";
import moment from "moment";
import clsx from "clsx";
import DoneIcon from "@/assets/icons/done.svg?react";

interface IOverallProgressProps {
    progressData?: IUserProgressItem[];
}

interface IDayProgressItem {
    date: Date;
    timeSpent: number; // seconds
}

const PROGRESS_DAYS = 28;
const DAILY_LEARNING_GOAL = 900; // seconds

function getDailyProgressListData(
    progressData?: IUserProgressItem[]
): IDayProgressItem[] {
    return Array.from({ length: PROGRESS_DAYS }, (_, i) =>
        Math.abs(i + 1 - PROGRESS_DAYS)
    ).map((day) => {
        const date = moment().subtract(day, "days").startOf("day").toDate();
        const progressItem = progressData?.find(
            (item) => item.dayTimestamp.getTime() === date.getTime()
        );
        return {
            date,
            timeSpent: progressItem
                ? progressItem.kanjiLearningTime +
                  progressItem.vocabLearningTime +
                  progressItem.lessonsLearningTime
                : 0,
        };
    });
}

export const OverallProgress: React.FC<IOverallProgressProps> = ({
    progressData,
}) => {
    const dailyProgressList = useMemo(
        () => getDailyProgressListData(progressData),
        [progressData]
    );
    const [selectedDay, setSelectedDay] = useState<IDayProgressItem>(
        dailyProgressList[dailyProgressList.length - 1]
    );

    useEffect(() => {
        setSelectedDay(dailyProgressList[dailyProgressList.length - 1]);
    }, [dailyProgressList]);

    const styles = useOverallProgressStyles();
    return (
        <Card className={styles.container}>
            <div className={styles.header}>
                <span>Today</span>
                <span className={styles.currentDate}>
                    {moment().startOf("day").format("DD日MM月")}
                </span>
            </div>

            <div className={styles.days}>
                {dailyProgressList.map((item, i) => (
                    <div
                        key={i}
                        className={clsx(styles.day, {
                            [styles.day__active]:
                                selectedDay.date === item.date,
                        })}
                        onClick={() => setSelectedDay(item)}
                    >
                        <div
                            className={styles.dayProgressBar}
                            style={{
                                height: `${Math.min(
                                    100,
                                    (item.timeSpent / DAILY_LEARNING_GOAL) * 100
                                )}%`,
                            }}
                        />
                        <div className={styles.doneIconWrapper}>
                            <DoneIcon
                                className={styles.doneIcon}
                                width="50%"
                                color={
                                    item.timeSpent >= DAILY_LEARNING_GOAL
                                        ? "#ffffff"
                                        : "transparent"
                                }
                            />
                        </div>
                    </div>
                ))}
            </div>

            <div className={styles.selectedDayInfo}>
                <span>{moment(selectedDay.date).format("MMM DD, YYYY")}</span>
                <div>
                    <span>
                        {moment()
                            .startOf("day")
                            .add(selectedDay.timeSpent, "seconds")
                            .format("m分 s秒")}
                    </span>
                    <span>
                        (
                        {Math.floor(
                            (selectedDay.timeSpent / DAILY_LEARNING_GOAL) * 100
                        )}
                        %)
                    </span>
                </div>
            </div>
        </Card>
    );
};
