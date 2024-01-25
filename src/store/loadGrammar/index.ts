import { GrammarLoadStatus } from "./types";
import Worker from "./worker?worker";
import { lens } from "@dhmk/zustand-lens";

export interface ILoadGrammarSlice {
    status: GrammarLoadStatus;
    downloadProgress: number;
    installProgress: number;
    loadGrammarContent: () => Promise<void>;
}

export const createLoadGrammarContentSlice = lens<ILoadGrammarSlice>(
    (set, get) => ({
        status: GrammarLoadStatus.notStarted,
        downloadProgress: 0,
        installProgress: 0,
        loadGrammarContent: async () => {
            if (get().status !== GrammarLoadStatus.notStarted) {
                return;
            }
            const worker = new Worker();

            worker.onmessage = (e: MessageEvent) => {
                switch (e.data.type) {
                    case GrammarLoadStatus.downloading: {
                        set({
                            status: GrammarLoadStatus.downloading,
                            downloadProgress: e.data.progress,
                        });
                        break;
                    }
                    case GrammarLoadStatus.installing: {
                        set({
                            status: GrammarLoadStatus.installing,
                            installProgress: e.data.progress,
                        });
                        break;
                    }
                    case GrammarLoadStatus.done: {
                        set({ status: GrammarLoadStatus.done });
                        worker.terminate();
                        break;
                    }
                }
            };

            worker.postMessage("");
        },
    })
);
