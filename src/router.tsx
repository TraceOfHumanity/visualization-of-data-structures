import { createBrowserRouter, RouterProvider } from "react-router";
import { RootTemplate } from "./templates/RootTemplate";
import {
  Graph,
  HashTable,
  Heap,
  LinkedList,
  Queue,
  Stack,
  Tree,
} from "./pages";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootTemplate />,
    children: [
      {
        path: "/linked-list",
        element: <LinkedList />,
      },
      {
        path: "/stack",
        element: <Stack />,
      },
      {
        path: "/queue",
        element: <Queue />,
      },
      {
        path: "/tree",
        element: <Tree />,
      },
      {
        path: "/graph",
        element: <Graph />,
      },
      {
        path: "/hash-table",
        element: <HashTable />,
      },
      {
        path: "/heap",
        element: <Heap />,
      },
    ],
  },
]);

export const Routing = () => {
  return <RouterProvider router={router} />;
};
