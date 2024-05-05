import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { createContext } from "react";

import App from "./App.jsx";
import Home from "./pages/Home.jsx";
import TeamsDetails from "./pages/TeamsDetails.jsx";
import PlayersDetails from "./pages/PlayersDetails.jsx";
import TeamsController from "./controllers/TeamsController.jsx";
import PlayersController from "./controllers/PlayerController.jsx";

// Creation de contexte
export const TeamsControllerContext = createContext();
export const PlayersControllerContext = createContext();

const Main = () => {
  //Creation d'une instance de TeamsController
  const teamsController = new TeamsController();
  const playersController = new PlayersController();

  const router = createBrowserRouter([
    {
      element: <App />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/teamsDetails/:id",
          element: <TeamsDetails />,
        },
        {
          path: "/playersDetails/:id",
          element: <PlayersDetails />,
        },
      ],
    },
  ]);

  return (
    //Passage de contexte
    <PlayersControllerContext.Provider value={{ playersController }}>
      <TeamsControllerContext.Provider value={{ teamsController }}>
        <RouterProvider router={router} />
      </TeamsControllerContext.Provider>
    </PlayersControllerContext.Provider>
  );
};

ReactDOM.createRoot(document.getElementById("root")).render(<Main />);
