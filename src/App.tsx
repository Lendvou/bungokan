import { RouterProvider } from "react-router-dom";
import { router } from "./router";
import { useEffect } from "react";
import { db } from "./database";

function App() {
    useEffect(() => {
        db.open();
        // if ("scrollRestoration" in history) {
        //     console.log("restoration", history);
        //     history.scrollRestoration = "manual";
        // }
    }, []);
    return <RouterProvider router={router} />;
}

export default App;
