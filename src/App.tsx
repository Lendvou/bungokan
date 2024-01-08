import { RouterProvider } from "react-router-dom";
import { router } from "./router";
import { useEffect } from "react";
import { db } from "./database";

function App() {
    useEffect(() => {
        db.open();
    }, []);
    return <RouterProvider router={router} />;
}

export default App;
