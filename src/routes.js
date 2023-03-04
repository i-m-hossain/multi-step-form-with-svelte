import Home from "./pages/Home.svelte";
import NotFound from "./pages/NotFound.svelte";
import SetupFactory from "./pages/SetupFactory.svelte";
import Floor from "./pages/Floor.svelte";
import Camera from "./pages/Camera.svelte";
import Employee from "./pages/Employee.svelte";
import Machine from "./pages/Machine.svelte";
import Schedule from "./pages/Schedule.svelte";
import Setting from "./pages/Setting.svelte";
import Login from "./pages/Login.svelte";
export const routes= {
    // Exact path
    "/": Home,
    "/setup-factory": SetupFactory,
    "/floor": Floor,
    "/camera":Camera,
    "/employee": Employee,
    "/machine": Machine,
    "/schedule":Schedule,
    "/setting": Setting,
    "/login": Login,
    // Catch-all
    // This is optional, but if present it must be the last
    "*": NotFound,
};
