import { db } from "..";

export const getAssetByFilename = (filename: string) =>
    db.assets.get({ filename });
