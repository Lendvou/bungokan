import { Header } from "@/components/Header";
import { useDictionaryPageStyles } from "./styles";
import { Input } from "@/components/Input";
import ClipboardIcon from "@/assets/icons/clipboard.svg?react";
import DeleteIcon from "@/assets/icons/delete.svg?react";
import { useState } from "react";
import { Button } from "../../components/Button/index";
import { DictionaryLoadStatus } from "@/store/loadDictionary/types";
import { useTypedStore } from "@/store";

export const DictionaryPage = () => {
    const [searchValue, setSearchValue] = useState<string>("");

    const { status, downloadProgress, installProgress, loadDictionaryContent } =
        useTypedStore((state) => state.loadDictionary);

    console.log("dict", status);

    const handleSearchValueChange = (
        e: React.ChangeEvent<HTMLInputElement>
    ) => {
        setSearchValue(e.target.value);
    };

    const handleClipboardClick = async () => {
        if ("clipboard" in navigator) {
            const copiedText = await navigator.clipboard.readText();
            setSearchValue(copiedText);
        }
    };

    const isDictInstalled = true;

    const styles = useDictionaryPageStyles();

    const renderButtonText = () => {
        if (status === DictionaryLoadStatus.notStarted) {
            return "Download (20.61Mb)";
        }
        if (status === DictionaryLoadStatus.downloading) {
            return `Downloading... ${downloadProgress}`;
        }
        if (status === DictionaryLoadStatus.installing) {
            return `Installing... ${installProgress}`;
        }
        return "Installed";
    };

    return (
        <div className={styles.container}>
            <Header withBackButton>
                <Input
                    type="text"
                    placeholder="Search..."
                    className={styles.searchInput}
                    value={searchValue}
                    onChange={handleSearchValueChange}
                />
                <ClipboardIcon
                    className={styles.clipboardIcon}
                    onClick={handleClipboardClick}
                />
                <DeleteIcon
                    className={styles.deleteIcon}
                    onClick={handleClipboardClick}
                />
            </Header>

            {isDictInstalled ? (
                <div className={styles.noDictionary}>
                    <span className={styles.noDictionaryText}>
                        To use dictionary, you must first download and install
                        it
                    </span>
                    <Button
                        disabled={status !== DictionaryLoadStatus.notStarted}
                        onClick={loadDictionaryContent}
                    >
                        {renderButtonText()}
                    </Button>
                </div>
            ) : (
                <div className={styles.body}>Dictionary page</div>
            )}
        </div>
    );
};
