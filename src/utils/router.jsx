import App from "../App.jsx";
import { Seuss } from "../routes/Suess.jsx";
import { Books } from "../routes/Books.jsx";
import { Quotes } from "../routes/Quotes.jsx";

import { createBrowserRouter } from "react-router-dom";
import { SingleBook } from "../routes/SingleBook.jsx";

const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            {
                path: '/',
                element: <Seuss />
            },
            {
                path: '/books',
                element: <Books />
            },
            {
                path: '/quotes',
                element: <Quotes />
            },
            {
                path: '/book/:id',
                element: <SingleBook />
            }
        ]
    }
]);

export default router;