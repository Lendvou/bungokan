type ContentImage = {
    type: "image";
    filename: string;
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

type Content = ContentImage | ContentSubtitle | ContentText | ContentNewLine;

export enum GrammarLessons {
    CURE_DOLLY = "cure_dolly",
}

export interface IGrammarItem {
    id: number;
    type: GrammarLessons;
    title: string;
    num: string;
    subtitles: string[];
    content: Content[];
}

export const GRAMMAR_SCHEMA = "++id, type, title, num, *subtitles";
