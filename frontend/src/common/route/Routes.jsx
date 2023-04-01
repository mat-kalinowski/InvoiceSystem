import Dashbaord from "../../pages/dashbaord/Dashbaord";
import Login from "../../pages/login/Login";
import UserList from "../../pages/user/UserList";
import TopBar from "../components/topBar/TopBar";

export const ROUTES = [
  {
    name: "Login",
    path: "/login",
    component: <Login />,
  },
  {
    name: "Dashbaord",
    path: "/dashboard",
    component: (
      <>
        <TopBar />
        <Dashbaord />
      </>
    ),
    access: ["any"],
  },
  {
    name: "Users list",
    path: "/dashboard/user-list",
    component: (
      <>
        <TopBar />
        <UserList />
      </>
    ),
    access: ["any"],
  },
];
