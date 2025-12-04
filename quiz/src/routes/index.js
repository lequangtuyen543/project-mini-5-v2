import { PrivateRoute } from "../components/PrivateRoute";
import { LayoutDefault } from "../layout/LayoutDefault";
// import { Answers } from "../pages/Answers";
import { Home } from "../pages/Home";
import { Login } from "../pages/Login";
import { Logout } from "../pages/Logout";
import { Quiz } from "../pages/Quiz";
import { Register } from "../pages/Register";
import { Topic } from "../pages/Topic";
// import { Quiz } from "../pages/Quiz";
// import Result from "../pages/Result";

export const routes = [
  {
    path: "/",
    element: <LayoutDefault />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/login",
        element: <Login />
      },
      {
        path: "/logout",
        element: <Logout />
      },
      {
        path: "/register",
        element: <Register />
      },
      {
        element: <PrivateRoute />,
        children: [
          {
            path: "/topic",
            element: <Topic />
          },
          {
            path: "/quiz/:id",
            element: <Quiz />
          },
          //       {
          //         path: "/answers",
          //         element: <Answers />
          //       },

          //       {
          //         path: "/result/:id",
          //         element: <Result />
          //       },
        ]
      }
    ]
  }
]