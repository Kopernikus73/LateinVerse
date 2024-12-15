import Home from './Routes/Home.svelte';
import Declensions from "./Routes/Declensions.svelte";
import Grammar from "./Routes/Grammar.svelte";
import Conjugations from "./Routes/Conjugations.svelte";
import Vocabulary from "./Routes/Vocabulary.svelte";

const routes = {
    '/': Home,
    "/grammar": Grammar,
    "/grammar/declensions": Declensions,
    "/grammar/conjugations": Conjugations,
    "/vocabulary": Vocabulary,
}

export default routes;