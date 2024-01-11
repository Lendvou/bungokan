export interface IAsset {
    id?: number;
    filename: string;
    blob: Blob;
}

export const ASSETS_SCHEMA = "++id, &filename";
