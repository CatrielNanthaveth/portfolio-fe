import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { ErrorPage, Projects, Root } from "./routes";




const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/projects",
        element: <Projects />
      }
    ]
  }
])

function App() {
  return (
    <RouterProvider router={router} />
  );
}
export default App;
