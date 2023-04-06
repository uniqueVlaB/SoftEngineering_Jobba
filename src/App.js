
import Home from "./pages/home/Home"
import SearchResult from "./pages/searchResult/SearchResult";

import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
       <Home/>
      ),
    },
    {
      path: "SearchResult",
      element: <SearchResult/>,
    },
  ]);
 
  return (
    <RouterProvider router={router} />
  );
}

export default App;
