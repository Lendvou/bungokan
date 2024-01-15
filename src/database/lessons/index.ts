import { GrammarCourses } from "../grammarCourses";

type ContentImage = {
    type: "image";
    content: string;
};
type ContentSubtitle = {
    type: "subtitle";
    content: string;
};
type ContentText = {
    type: "text";
    content: string;
};
type ContentNewLine = {
    type: "newline";
};

export type Content =
    | ContentImage
    | ContentSubtitle
    | ContentText
    | ContentNewLine;

export interface ILessonItem {
    id: number;
    courseName: GrammarCourses;
    title: string;
    num: string;
    subtitles: string[];
    content: Content[];
}

export const LESSONS_SCHEMA = "++id, courseName, title, num, *subtitles";
