
import Home from "./pages/home/Home"
import SearchResult from "./pages/searchResult/SearchResult";
import {
  createBrowserRouter,
  RouterProvider} from "react-router-dom";
import UserPage from "./pages/userPage/UserPage";
import Edit from "./pages/edit/Edit";
import Add from "./pages/add/Add";
import VacancyPage from "./pages/vacancyPage/VacancyPage";
<<<<<<< Updated upstream
=======
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
>>>>>>> Stashed changes

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
    },
    {
      path: "vacancyPage",
      element: <VacancyPage/>,
    }
  ]);
  
  return (
    <RouterProvider router={router} />
  );
}

export default App;
