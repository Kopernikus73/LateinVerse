import Home from './Routes/Home.svelte';
import Declinations from "./Routes/Declinations.svelte";
import Grammar from "./Routes/Grammar.svelte";

const routes = {
    '/': Home,
    "/grammar": Grammar,
    "/grammar/declinations": Declinations,
}

export default routes;