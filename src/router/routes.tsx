import { RouteObject } from "react-router-dom";
import { RouteNames } from "./routeNames";
import { GrammarPage } from "../pages/Grammar";
import { MainPage } from "../pages/Main";
import { NotFound } from "../pages/NotFound";
import { VocabPage } from "../pages/Vocab";
import { KanjiPage } from "../pages/Kanji";
import { SettingsPage } from "../pages/Settings";
import { GrammarLessonPage } from "../pages/GrammarLesson";
import { RouteWrapper } from "./RouteWrapper";

interface IRouteListItem {
    path: RouteNames;
    component: React.FC;
}

const routesList: IRouteListItem[] = [
    {
        path: RouteNames.MAIN,
        component: MainPage,
    },
    {
        path: RouteNames.GRAMMAR,
        component: GrammarPage,
    },
    {
        path: RouteNames.GRAMMAR_LESSON,
        component: GrammarLessonPage,
    },
    {
        path: RouteNames.VOCAB,
        component: VocabPage,
    },
    {
        path: RouteNames.KANJI,
        component: KanjiPage,
    },
    {
        path: RouteNames.SETTINGS,
        component: SettingsPage,
    },
    {
        path: RouteNames.NOT_FOUND,
        component: NotFound,
    },
];

export const routes: RouteObject[] = routesList.map((route) => ({
    path: route.path,
    element: <RouteWrapper Component={route.component} />,
}));
