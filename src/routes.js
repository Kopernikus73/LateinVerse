import Home from './Routes/Home.svelte';
import Declensions from "./Routes/Grammar/Declensions.svelte";
import Grammar from "./Routes/Grammar/Grammar.svelte";
import Conjugations from "./Routes/Grammar/Conjugations.svelte";
import Vocabulary from "./Routes/Vocabulary/Vocabulary.svelte";
import VocabTest from "./Routes/Vocabulary/VocabTest.svelte";
import SentenceStructures from "./Routes/Grammar/SentenceStructures/Satzkonstruktionen.svelte";
import PC from "./Routes/Grammar/SentenceStructures/PC.svelte";
import Particiupium from "./Routes/Grammar/Participium/Particiupium.svelte";
import PPP from "./Routes/Grammar/Participium/PPP.svelte";
import PPA from "./Routes/Grammar/Participium/PPA.svelte";
import PFA from "./Routes/Grammar/Participium/PFA.svelte";
import ACI from "./Routes/Grammar/SentenceStructures/ACI.svelte";

const routes = {
    '/': Home,
    "/grammar": Grammar,
    "/grammar/declensions": Declensions,
    "/grammar/conjugations": Conjugations,
    "/grammar/sentence-structures": SentenceStructures,
    "/grammar/sentence-structures/pc": PC,
    "/grammar/sentence-structures/aci": ACI,
    "/grammar/participium": Particiupium,
    "/grammar/participium/ppp": PPP,
    "/grammar/participium/ppa": PPA,
    "/grammar/participium/pfa": PFA,

    "/vocabulary": Vocabulary,
    "/vocabulary/test": VocabTest,
}

export default routes;