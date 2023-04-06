
import Home from "./pages/home/Home"
import SearchResult from "./pages/searchResult/SearchResult";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import UserPage from "./pages/userPage/UserPage";

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
    {
      path: "UserPage",
      element: <UserPage/>,
    },
  ]);
 
  return (
    <RouterProvider router={router} />
  );
}

export default App;
