import { RouteObject } from "react-router-dom";
import { RouteNames } from "./constants";
import { NavigationLayout } from "../layouts/NavigationLayout";
import { DefaultLayout } from "../layouts/DefaultLayout";
import { GrammarPage } from "../pages/Grammar";
import { MainPage } from "../pages/Main";
import { NotFound } from "../pages/NotFound";
import { VocabPage } from "../pages/Vocab";
import { KanjiPage } from "../pages/Kanji";
import { SettingsPage } from "../pages/Settings";
import { GrammarLessonPage } from "../pages/GrammarLesson";

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
        path: RouteNames.GRAMMAR_LESSON,
        element: (
            <DefaultLayout>
                <GrammarLessonPage />
            </DefaultLayout>
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
