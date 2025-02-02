<script lang="ts">
    import { push_to } from "../../../global";
</script>

<div class="main">
    <h1>Participium Coniunctum (PC)</h1>
    <div class="explanation">
        Das Participium Coniunctum ("verbundenes Partizip") ist eine Satzkonstruktion, in der ein Partizip mit einem Substantiv verbunden ist.
        <br/>
        <div class="Example" id="ex1">
            <div id="sentence">
                Discipuli <strong class="pc">| multum scripti |</strong> magistrum delectant.
            </div>
            Hier steht das Partizip (scripti) im <strong class="pc">Nominativ Plural Maskulinum</strong> und das Substantiv (discipuli) ebenso, da die Beiden Wörter KNG kongruent sind. <br/>
            Zudem liegt das Partizip hier als
            <a href=" " on:click={push_to("/grammar/participium/ppp")}>PPP</a>
            vor,  wodurch eine Vorzeitigkeit bewirkt wird (Der Satz passt sich dem Partizip an). <br/>
        </div>
        <div class="info">
            Um den PC korrekt übersetzen zu können, wird in den meisten Fällen (sonst angegeben) eine Trennung des Satzes hinter dem Substantiv und hinter dem Partizip vorgenommen. (Wie im Beispiel markiert)
            <br/>
            Somit können die Satzteile jeweils getrennt übersetzt werden: <br>
            <div id="indent1">
                a) Discipuli magistrum delectant -> Die Schüler erfreuen den Lehrer<br>
                b) multum scripti -> haben viel geschrieben
            </div>
            ﻿
        </div>

        <div class="types">
            Ein PC kann unterschiedlich übersetzt werden. Die Art und Weise der Übersetzung muss je nach Kontext entschieden werden. <br/><br/>
            Übersetzung als: <br/>
            <div class="types">
                <strong id="types">Attribut</strong>:
                <div id="indent1">
                    a) wörtlich: "Die Schüler erfreuen den Lehrer <strong class="pc"> mit viel Geschriebenem</strong>." <br/>
                    b) Relativsatz: "Die Schüler, <strong class="pc">die viel geschrieben haben</strong>, erfreuen den Lehrer." (Vorzeitigkeit!) <strong class="important">Kann fast immer genutz werden!</strong> <br/>
                </div>
                <br/>
                <strong id="types">Konjunktionaler Nebensatz</strong>:
                <div id="indent1">
                    a) temporal (Zeit): "Die Schüler erfreuen den Lehrer, <strong class="pc">nachdem sie viel geschrieben haben</strong>." [nachdem, während, als] <br/>
                    b) kausal (Grund): "Die Schüler erfreuen den Lehrer, <strong class="pc">weil sie viel geschrieben haben</strong>." [weil, da] <br/>
                    c) konzessiv (Widerspruch): "Die Schüler erfreuen den Lehrer, <strong class="pc">obwohl sie viel geschrieben haben</strong>." [obwohl] <br/>
                    d) modal (Art und Weise): "Die Schüler erfreuen den Lehrer, <strong class="pc">indem sie viel geschrieben haben</strong>." [indem] <br/>
                </div>
            </div>
        </div>
    </div>
    <br><br>
    *Die Beispiele beziehen sich hier lediglich auf das <a href=" " on:click={push_to("/grammar/participium/ppp")}>PPP</a>, können allerdings ebenso auf das <a href=" " on:click={push_to("/grammar/participium/ppa")}>PPA</a> angewandt werden.
</div>

<style>
    .main{
        font-size: 16px
    }

    strong.important{
        color:#ff0000;
    }

    #indent1{
        margin-left: 0.5cm;
    }

    .types strong#types{
        font-weight: bold;
        font-size: 18px
    }

    .Example{
        background-color: #1e1e1e;
        border: 1px solid #333;
        border-radius: 8px;
        padding: 20px;
        margin: 20px 0;
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);
        color: #ffffff;
    }

    #sentence {
        font-size: 1.2em;
        margin-bottom: 10px;
    }

    .pc {
        color: #bb86fc;
        font-weight: bold;
    }

    a {
        color: #4181ff;
        text-decoration: none;
        font-weight: bold;
    }

    a:hover {
        text-decoration: underline;
    }


    h1 {
        font-size: 4rem;
        text-align: center;
        color: #00788f;
        border-bottom: 2px solid #005f73;
        margin-bottom: 1rem;
        padding-bottom: 0.5rem;
    }
</style>