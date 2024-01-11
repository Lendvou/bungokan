export interface IUserProgressItem {
    id?: number;
    dayTimestamp: number;
    lessons: number;
    vocab: number;
    kanji: number;
}

export const USER_PROGRESS_SCHEMA = "++id, dayTimestamp, lessons, vocab, kanji";
