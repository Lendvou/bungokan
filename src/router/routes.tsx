import { RouteObject } from "react-router-dom";
import { GrammarPage } from "../pages/GrammarPage";
import { MainPage } from "../pages/Main";
import { NotFound } from "../pages/NotFound";
import { NavigationLayout } from "./layouts/NavigationLayout";
import { RouteNames } from "./types";
import { VocabPage } from "../pages/VocabPage";
import { KanjiPage } from "../pages/KanjiPage";
import { SettingsPage } from "../pages/SettingsPage";

export const routes: RouteObject[] = [
    {
        path: RouteNames.MAIN,
        element: (
            <NavigationLayout>
                <MainPage />
            </NavigationLayout>
        ),
    },
    {
        path: RouteNames.GRAMMAR,
        element: (
            <NavigationLayout>
                <GrammarPage />
            </NavigationLayout>
        ),
    },
    {
        path: RouteNames.VOCAB,
        element: (
            <NavigationLayout>
                <VocabPage />
            </NavigationLayout>
        ),
    },
    {
        path: RouteNames.KANJI,
        element: (
            <NavigationLayout>
                <KanjiPage />
            </NavigationLayout>
        ),
    },
    {
        path: RouteNames.SETTINGS,
        element: (
            <NavigationLayout>
                <SettingsPage />
            </NavigationLayout>
        ),
    },
    {
        path: "*",
        element: <NotFound />,
    },
];
