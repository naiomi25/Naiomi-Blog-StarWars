
import {
    createBrowserRouter,
    createRoutesFromElements,
    Route,
} from "react-router-dom";
import { Layout } from "./pages/Layout";
import { DetailPlanets } from "./pages/Detail.Planets";
import { People } from "./pages/People";
//import { Single } from "./pages/Single";
//import { Demo } from "./pages/Demo";
import { Home } from "./pages/Home";
import { Planets } from "./pages/Planets";
import { Starships } from "./pages/ StarShips";
import { DetailPerson } from "./pages/DetailPerson";
import { DetailStarShip } from "./pages/DetailStarShips";
import { Favoritos } from "./pages/Favoritos";

export const router = createBrowserRouter(
    createRoutesFromElements(

    <Route path="/" element={<Layout />}>
      <Route path="/" element={<Home />} />
      <Route path="/people" element={<People />} />
      <Route path="/planets" element={<Planets />} />
      <Route path="/starships" element={<Starships />} />
      <Route path="/planet/:id" element={<DetailPlanets/>}/>
      <Route path="/person/:id" element={<DetailPerson/>}/>
      <Route path="/starship/:id" element={<DetailStarShip/>}/>
      <Route path="/favoritos" element={<Favoritos />} />
    </Route>
    )
);