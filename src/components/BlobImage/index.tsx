import React from "react";
import useAsyncLiveQuery from "../../database/_utils/useAsyncLiveQuery";

interface IBlobImageProps {
    filename: string;
    className?: string;
}

export const BlobImage: React.FC<IBlobImageProps> = ({
    filename,
    className,
}) => {
    const { data } = useAsyncLiveQuery((db) => db.assets.get({ filename }));

    const imageUrl = data ? URL.createObjectURL(data.blob) : "";

    return (
        <img
            src={imageUrl}
            alt={data?.filename || "image"}
            className={className}
        />
    );
};
