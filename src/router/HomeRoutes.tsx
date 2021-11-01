import { Skill } from "../components/pages/Skill";
import { Page404 } from "../components/pages/Page404";
import { Works } from "../components/pages/Works";

export const HomeRoutes = [
  {
    path: "/skill",
    exact: false,
    children: <Skill />,
  },
  {
    path: "/works",
    exact: false,
    children: <Works />,
  },

  {
    path: "*",
    exact: false,
    children: <Page404 />,
  },
];
