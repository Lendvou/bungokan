interface IWordsKana {
    common: boolean;
    text: string;
    tags: string[];
    appliesToKanji: string[];
}
interface IWordsKanji {
    common: boolean;
    text: string;
    tags: string[];
}

export interface IWordsSchema {
    idb?: number;
    id: string;
    kana: IWordsKana[];
    kanji: IWordsKanji[];
    sense: any[];
    kanaText: string[];
    kanjiText: string[];
    senesText: string[];
    senseInfo: string[];
}

export const WORDS_SCHEMA = "id, *kanaText, *kanjiText, *senseText, *senseInfo";
