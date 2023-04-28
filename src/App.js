
import Home from "./pages/home/Home"
import SearchResult from "./pages/searchResult/SearchResult";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import UserPage from "./pages/userPage/UserPage";
import Edit from "./pages/edit/Edit";
import Add from "./pages/add/Add";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
       <Home/>
      ),
    },
    {
      path: "searchResult",
      element: <SearchResult/>,
    },
    {
      path: "userPage",
      element: <UserPage/>,
    },
    {
      path: "edit",
      element: <Edit/>,
    },
    {
      path: "add",
      element: <Add/>,
    }
  ]);
  
  return (
    <RouterProvider router={router} />
  );
}

export default App;
