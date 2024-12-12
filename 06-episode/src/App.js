import ReactDOM from "react-dom/client";
import Body from "./components/Body";
import Header from "./components/Header";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import About from "./components/About";

import Services from "./components/Services";

const App = () => {
  return (
    <div className="app">
      <Header />
      <Outlet />
    </div>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,

    children: [
      {
        path: "/",
        element: <Body />,
      },

      {
        path: "/about",
        element: <About />,
      },
      
      {
        path: "/services",
        element: <Services />,
      },
      {
        path: "/projects",
        element: <Projects />,
      },
      {
        path:"/skills",
        element:<Skills/>
      }
    ],
  },
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
