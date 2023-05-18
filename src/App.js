
import Home from "./pages/home/Home"
import SearchResult from "./pages/searchResult/SearchResult";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import UserPage from "./pages/userPage/UserPage";
import EditVacancy from "./pages/editVacancy/EditVacancy";
import AddVacancy from "./pages/addVacancy/AddVacancy";
import VacancyPage from "./pages/vacancyPage/VacancyPage";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
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
      element: <EditVacancy/>,
    },
    {
      path: "add",
      element: <AddVacancy/>,
    },
    {
      path: "vacancyPage",
      element: <VacancyPage/>,
    },
    {
      path: "login",
      element: <Login/>,
    },
    {
      path: "register",
      element: <Register/>,
    }
  ]);
  
  return (
    <RouterProvider router={router} />
  );
}

export default App;
