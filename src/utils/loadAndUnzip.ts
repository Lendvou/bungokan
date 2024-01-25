import { BlobReader, Entry, ZipReader } from "@zip.js/zip.js";
import axios from "axios";

export const loadAndUnzip = async (
    path: string,
    onDownloadProgress?: (loaded: number, total?: number) => void
): Promise<Entry[]> => {
    const dictPath = new URL(path, import.meta.url).href;
    const { data: archiveBlob } = await axios(dictPath, {
        responseType: "blob",
        onDownloadProgress(progressEvent) {
            onDownloadProgress?.(progressEvent.loaded, progressEvent.total);
        },
    });

    const entries = await new ZipReader(
        new BlobReader(archiveBlob)
    ).getEntries();

    return entries;
};
