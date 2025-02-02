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
import Glossar from "./Routes/Glossar.svelte";
import UsefulVocab from "./Routes/Vocabulary/FrequentVocab.svelte";
import Pronouns from "./Routes/Grammar/Pronouns/Pronouns.svelte";
import PersonalPronouns from "./Routes/Grammar/Pronouns/PersonalPronomen.svelte";
import PossessivPronomen from "./Routes/Grammar/Pronouns/PossessivPronomen.svelte";
import DemonstrativPronomen from "./Routes/Grammar/Pronouns/DemonstrativPronomen.svelte";
import HistoryPage from "./Routes/History/HistoryPage.svelte";
import TimeBeam from "./Routes/History/Zeitstrahl.svelte";
import Personen from "./Routes/History/Personen.svelte";
import Wortarten from "./Routes/Grammar/Words/Words.svelte";
import Adjektiv from "./Routes/Grammar/Words/Adjektiv.svelte";
import Adverb from "./Routes/Grammar/Words/Adverb.svelte";
import API from "./Routes/API.svelte";
import DeclensionTest from "./Routes/Vocabulary/Deklinationsübung.svelte";

const routes = {
    '/': Home,

    "/api": API,


    "/glossar": Glossar,


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

    "/grammar/pronouns": Pronouns,
    "/grammar/pronouns/personal": PersonalPronouns,
    "/grammar/pronouns/possessive": PossessivPronomen,
    "/grammar/pronouns/demonstrative": DemonstrativPronomen,

    "/grammar/words": Wortarten,
    "/grammar/words/adjective": Adjektiv,
    "/grammar/words/adverb": Adverb,


    "/vocabulary": Vocabulary,
    "/vocabulary/test": VocabTest,
    "/vocabulary/frequent-vocab": UsefulVocab,
    "/vocabulary/declension-test": DeclensionTest,


    "/history": HistoryPage,
    "/history/time-beam": TimeBeam,
    "/history/people": Personen,
}

export default routes;