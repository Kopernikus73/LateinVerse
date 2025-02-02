<script lang="ts">
</script>

<div class="main">
    <h1>Accusativus cum Infinitivo (ACI)</h1>
    <div class="explanation">
        Der Accusativus cum Infinitivo (ACI) ist eine Satzkonstruktion, in der ein Akkusativ mit einem Infinitiv verbunden ist, um indirekte Rede oder Wahrnehmungssätze auszudrücken.
        <br/>
        <div class="Example" id="ex1">
            <div id="sentence">
                Magister <strong class="aci">puerum librum legere</strong> dixit.
            </div>
            Hier steht der Akkusativ (puerum) als Subjekt des Infinitivs (legere). Das finite Verb (dixit) steuert die Konstruktion. <br/>
            In der Übersetzung ins Deutsche wird der ACI oft in einen Nebensatz umgewandelt: <br/>
            "Der Lehrer sagte, <strong class="aci">dass der Junge ein Buch liest</strong>."
        </div>
        <div class="types">
            Bei der Übersetzung eines ACIs müssen folgende Punkte beachtet werden: <br/><br/>
            <strong id="types">1. Kasus des Subjektes</strong>
            <div id="indent1">
                Im Lateinischen steht das Subjekt (des Nebensatzes) im Akkusativ. Im Deutschen wird es normalerweise in den Nominativ gesetzt. <br/>
                <strong>Beispiel:</strong> <br/>
                "Pater <strong class="aci"><mark>filium</mark> venire</strong> videt." → "Der Vater sieht, <strong class="aci">dass der <mark>Sohn</mark> kommt</strong>."
            </div>
            <br/>
            <strong id="types">2. Das Tempus des Infinitivs</strong>
            <div id="indent1">
                Der Infinitiv zeigt die Handlung des Subjekts an. Die Zeitstufe des Infinitivs wird durch die Vorzeitigkeit oder Gleichzeitigkeit bestimmt. <br/>
                <strong>Beispiele:</strong> <br/>
                a) Gleichzeitigkeit: "Magister <strong class="aci">puerum <mark>scribere</mark></strong> videt." → "Der Lehrer sieht, <strong class="aci">dass der Junge <mark>schreibt</mark></strong>." <br/>
                b) Vorzeitigkeit: "Magister <strong class="aci">puerum <mark>scripsisse</mark></strong> videt." → "Der Lehrer sieht, <strong class="aci">dass der Junge <mark>geschrieben hat</mark></strong>."
            </div>
            <br/>
            <strong id="types">3. Prädikat des Hauptsatzes</strong>
            <div id="indent1">
                Der ACI hängt von einem "Kopfverb" (Verb des Sagens, der Wahrnehmung, des Denkens/Fühlens) oder einem unpersönlichen Ausdruck ab.<br/>
                <strong>Beispiele:</strong> <br/>
                "Marcus <strong class="aci">amicum venire</strong> <mark class="none">sperat</mark>." → "Marcus <mark class="none">hofft</mark>, <strong class="aci">dass der Freund kommt</strong>." (Denken/Fühlen)
                <br/>
                "Aulus <strong class="aci">mercatorem emere</strong> <mark class="none">videt</mark>." → "Aulus <mark class="none">sieht</mark>, <strong class="aci">dass der Händler verkauft</strong>." (Wahrnehmung)
            </div>
        </div>
    </div>
</div>

<style>
    .main{
        font-size: 16px
    }

    strong.aci {
        color: #bb86fc;
        font-weight: bold;
    }

    mark{
        color: #bb86fc;
        background: rgba(0, 120, 143, 0.5);
        font-weight: bold;
        border-radius: 5px;
    }
    mark.none{
        color: #d1d1d1;
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

    h1 {
        font-size: 4rem;
        text-align: center;
        color: #00788f;
        border-bottom: 2px solid #005f73;
        margin-bottom: 1rem;
        padding-bottom: 0.5rem;
    }
</style>
