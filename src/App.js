import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { AboutMe, ErrorPage, Projects, Root } from "./routes";




const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/projects",
        element: <Projects />
      },
      {
        path: "/aboutme",
        element: <AboutMe />
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
