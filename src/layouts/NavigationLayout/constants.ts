import BookSVG from "../../assets/icons/book.svg";
import JiSVG from "../../assets/icons/ji.svg";
import IuSVG from "../../assets/icons/iu.svg";
import BunSVG from "../../assets/icons/bun.svg";
import SettingsSVG from "../../assets/icons/settings.svg";
import { RouteNames } from "../../router/constants";

type TouchBarItem = {
    name: string;
    icon: string;
    link: string;
};

export const touchbarItems: TouchBarItem[] = [
    {
        name: "Main",
        icon: BookSVG,
        link: RouteNames.MAIN,
    },
    {
        name: "Grammar",
        icon: BunSVG,
        link: RouteNames.GRAMMAR,
    },
    {
        name: "Vocab",
        icon: IuSVG,
        link: RouteNames.VOCAB,
    },
    {
        name: "Kanji",
        icon: JiSVG,
        link: RouteNames.KANJI,
    },
    {
        name: "Settings",
        icon: SettingsSVG,
        link: RouteNames.SETTINGS,
    },
];
