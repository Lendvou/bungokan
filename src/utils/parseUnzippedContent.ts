import { BlobWriter, Entry, TextWriter } from "@zip.js/zip.js";

export const parseUnzippedContent = async (
    entry: Entry,
    writer: "text" | "blob",
    blobMimeType?: string
) => {
    if (!entry.getData) {
        throw Error("No contentEntry.getData");
    }

    if (writer === "text") {
        const content = await entry.getData?.(new TextWriter());
        return JSON.parse(content);
    }
    if (writer === "blob") {
        return entry.getData?.(new BlobWriter(blobMimeType));
    }
};

export const bulkParseUnzippedContent = async (
    entries: Entry[],
    writer: "text" | "blob",
    blobMimeType?: string
) => {
    const result: Blob[] = await Promise.all(
        entries.map((entry) =>
            parseUnzippedContent(entry, writer, blobMimeType)
        )
    );
    return result;
};
