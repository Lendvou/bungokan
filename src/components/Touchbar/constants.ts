import BookSVG from "@/assets/icons/book.svg?react";
import JiSVG from "@/assets/icons/ji.svg?react";
import IuSVG from "@/assets/icons/iu.svg?react";
import BunSVG from "@/assets/icons/bun.svg?react";
import SettingsSVG from "@/assets/icons/settings.svg?react";
import { RouteNames } from "@/router/routeNames";

type TouchBarItem = {
    name: string;
    Icon: React.FunctionComponent<
        React.SVGProps<SVGSVGElement> & {
            title?: string | undefined;
        }
    >;
    link: string;
};

export const TOUCHBAR_ITEMS: TouchBarItem[] = [
    {
        name: "Main",
        Icon: BookSVG,
        link: RouteNames.MAIN,
    },
    {
        name: "Grammar",
        Icon: BunSVG,
        link: RouteNames.GRAMMAR,
    },
    {
        name: "Vocab",
        Icon: IuSVG,
        link: RouteNames.VOCAB,
    },
    {
        name: "Kanji",
        Icon: JiSVG,
        link: RouteNames.KANJI,
    },
    {
        name: "Settings",
        Icon: SettingsSVG,
        link: RouteNames.SETTINGS,
    },
];
