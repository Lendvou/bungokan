import { StoreApi, UseBoundStore, create } from "zustand";
import {
    ILoadDictionarySlice,
    createLoadDictionarySlice,
} from "./loadDictionary";
import { ILoadGrammarSlice } from "./loadGrammar";
import { createLoadGrammarContentSlice } from "./loadGrammar/index";
import { withLenses } from "@dhmk/zustand-lens";

export interface IStoreData {
    loadDictionary: ILoadDictionarySlice;
    loadGrammar: ILoadGrammarSlice;
}

export const useTypedStore: UseBoundStore<StoreApi<IStoreData>> =
    create<IStoreData>(
        withLenses({
            loadDictionary: createLoadDictionarySlice,
            loadGrammar: createLoadGrammarContentSlice,
        })
    );
