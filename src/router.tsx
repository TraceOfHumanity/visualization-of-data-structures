import { createBrowserRouter, RouterProvider } from "react-router";
import { RootTemplate } from "./templates/RootTemplate";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootTemplate />,
    children: [
      {
        path: "/linked-list",
        element: <div>Linked List</div>,
      },
    ],
  },
]);

export const Routing = () => {
  return <RouterProvider router={router} />;
};
