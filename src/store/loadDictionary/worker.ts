import { loadAndUnzip } from "@/utils/loadAndUnzip";
import { DictionaryLoadStatus } from "./types";

const DICTIONARY_CONTENT_SIZE = 20000000;

export type PostMessage = {
    type: DictionaryLoadStatus;
    progress: number;
};

const pingProgressUpdate = (type: DictionaryLoadStatus, progress?: number) =>
    postMessage({
        type,
        progress,
    } as PostMessage);

self.onmessage = async () => {
    const entries = await loadAndUnzip(
        new URL("@/assets/archives/cure-dolly.zip", import.meta.url),
        (loaded: number, total: number = DICTIONARY_CONTENT_SIZE) => {
            const progress = total ? Math.floor((loaded / total) * 100) : 0;
            pingProgressUpdate(DictionaryLoadStatus.downloading, progress);
        }
    );

    console.log("entries", entries);
};
