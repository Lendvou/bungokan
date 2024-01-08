import { BlobReader, BlobWriter, TextWriter, ZipReader } from "@zip.js/zip.js";
import { GrammarLessons, IGrammarItem } from "../../../database/grammar";
import { db } from "../../../database";

type ParsedGrammarLesson = Omit<IGrammarItem, "id">;

export const loadGrammarContent = async () => {
    const path = new URL(
        "../../../assets/archives/cure-dolly.zip",
        import.meta.url
    ).href;
    const result = await fetch(path);
    const blob = await result.blob();
    const zipReader = new ZipReader(new BlobReader(blob));
    const entries = await zipReader.getEntries();
    const contentEntry = entries[0];
    const imageEntries = entries.slice(2);
    if (!contentEntry.getData) {
        throw Error("No contentEntry.getData");
    }
    const content = await contentEntry.getData(new TextWriter());
    const parsedContent = JSON.parse(content).map(
        (item: ParsedGrammarLesson) => ({
            ...item,
            type: GrammarLessons.CURE_DOLLY,
        })
    );

    const images = await Promise.all(
        imageEntries.map((entry) =>
            entry.getData?.(new BlobWriter("image/jpg"))
        )
    );
    const assets = images.map((image, i) => ({
        filename: imageEntries[i].filename.split("/")[1],
        blob: image!,
    }));

    await db.transaction("rw", [db.grammar, db.assets], async () => {
        await db.grammar.bulkPut(parsedContent);
        await db.assets.bulkPut(assets);
    });

    console.log("parsed contentEntry", parsedContent, assets);
};
