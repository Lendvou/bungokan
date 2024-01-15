import React, { useMemo } from "react";
import useAsyncLiveQuery from "../../database/_utils/useAsyncLiveQuery";
import { getAssetByFilename } from "../../database/assets/getAssetByFilename";

interface IBlobImageProps {
    filename: string;
    className?: string;
}

export const BlobImage: React.FC<IBlobImageProps> = ({
    filename,
    className,
}) => {
    const { data } = useAsyncLiveQuery(
        (db) => getAssetByFilename(db, { filename }),
        [filename]
    );

    const imageUrl = useMemo(() => {
        return data ? URL.createObjectURL(data.blob) : "";
    }, [data]);

    return (
        <img
            src={imageUrl}
            alt={data?.filename || "image"}
            className={className}
        />
    );
};
