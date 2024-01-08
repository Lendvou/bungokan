import Dexie, { Table } from "dexie";
import { GRAMMAR_SCHEMA, IGrammarItem } from "./grammar";
import { IWordsSchema, WORDS_SCHEMA } from "./words";
import { ASSETS_SCHEMA, IAsset } from "./assets";

export enum TableNames {
    GRAMMAR = "grammar",
    WORDS = "words",
    ASSETS = "assets",
}

export class TestDb extends Dexie {
    [TableNames.WORDS]!: Table<IWordsSchema>;
    [TableNames.ASSETS]!: Table<IAsset>;
    [TableNames.GRAMMAR]!: Table<IGrammarItem>;

    constructor() {
        super("testDb");
        this.version(5).stores({
            [TableNames.WORDS]: WORDS_SCHEMA,
            [TableNames.ASSETS]: ASSETS_SCHEMA,
            [TableNames.GRAMMAR]: GRAMMAR_SCHEMA,
        });
    }
}

export const db = new TestDb();
// console.log("[database/index.ts] rerender", db);
