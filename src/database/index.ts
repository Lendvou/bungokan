import Dexie, { Table } from "dexie";
import { LESSONS_SCHEMA, ILessonItem } from "./lessons";
import { IWordsSchema, WORDS_SCHEMA } from "./words";
import { ASSETS_SCHEMA, IAsset } from "./assets";
import { GRAMMAR_COURSES_SCHEMA, IGrammarCourses } from "./grammarCourses";
import { IUserLesson, USER_LESSONS_SCHEMA } from "./userLessons";
import { IUserProgressItem, USER_PROGRESS_SCHEMA } from "./userProgress";

export enum TableNames {
    USER_PROGRESS = "userProgress",
    LESSONS = "lessons",
    USER_LESSONS = "userLessons",
    WORDS = "words",
    ASSETS = "assets",
    GRAMMAR_COURSES = "grammarCourses",
}

export class BungokanDB extends Dexie {
    userProgress!: Table<IUserProgressItem>;
    lessons!: Table<ILessonItem>;
    userLessons!: Table<IUserLesson>;
    grammarCourses!: Table<IGrammarCourses>;
    words!: Table<IWordsSchema>;
    assets!: Table<IAsset>;

    constructor() {
        super("BungokanDB");
        this.version(5).stores({
            [TableNames.USER_PROGRESS]: USER_PROGRESS_SCHEMA,
            [TableNames.LESSONS]: LESSONS_SCHEMA,
            [TableNames.USER_LESSONS]: USER_LESSONS_SCHEMA,
            [TableNames.GRAMMAR_COURSES]: GRAMMAR_COURSES_SCHEMA,
            [TableNames.WORDS]: WORDS_SCHEMA,
            [TableNames.ASSETS]: ASSETS_SCHEMA,
        });
    }
}

export const db = new BungokanDB();
// console.log("[database/index.ts] rerender", db);
