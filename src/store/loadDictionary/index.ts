import Worker from "./worker?worker";
import { PostMessage } from "./worker";
import { DictionaryLoadStatus } from "./types";
import { lens } from "@dhmk/zustand-lens";

export interface ILoadDictionarySlice {
    status: DictionaryLoadStatus;
    downloadProgress: number;
    installProgress: number;
    loadDictionaryContent: () => void;
}

export const createLoadDictionarySlice = lens<ILoadDictionarySlice>(
    (set, get) => ({
        status: DictionaryLoadStatus.notStarted,
        downloadProgress: 0,
        installProgress: 0,
        loadDictionaryContent: () => {
            if (get().status !== DictionaryLoadStatus.notStarted) {
                return;
            }
            const worker = new Worker();
            worker.postMessage("");

            worker.onmessage = (e: MessageEvent<PostMessage>) => {
                switch (e.data.type) {
                    case DictionaryLoadStatus.downloading: {
                        set({
                            status: DictionaryLoadStatus.downloading,
                            downloadProgress: e.data.progress,
                        });
                        break;
                    }
                    case DictionaryLoadStatus.installing: {
                        set({
                            status: DictionaryLoadStatus.installing,
                            installProgress: e.data.progress,
                        });
                        break;
                    }
                    case DictionaryLoadStatus.done: {
                        set({ status: DictionaryLoadStatus.done });
                        worker.terminate();
                        break;
                    }
                }
            };
        },
    })
);
