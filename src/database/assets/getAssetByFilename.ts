import { BungokanDB } from "..";

interface IGetAssetByFilenameParams {
    filename: string;
}

export const getAssetByFilename = (
    db: BungokanDB,
    { filename }: IGetAssetByFilenameParams
) => db.assets.get({ filename });
