<script lang="ts">
    import { push, link } from 'svelte-spa-router';

    function goBack() {
        push('/grammar/sentence-structures');
    }

    function handleKeyDown(event: KeyboardEvent) {
        if (event.key === 'Enter' || event.key === ' ') {
            event.preventDefault();
            goBack();
        }
    }
</script>

<div class="main">
    <div class="back-button">
        <span role="button" tabindex="0" on:click={goBack} on:keydown={handleKeyDown} class="back">Back</span>
    </div>
    <h1>Participium Coniunctum (PC)</h1>
    <div class="explanation">
        Das Participium Coniunctum ("verbundenes Partizip") ist eine Satzkonstruktion, in der ein Partizip mit einem Substantiv verbunden ist.
        <br/>
        <div class="Example" id="ex1">
            <div id="sentence">
                Ipsa dabas capiti <strong class="pc">mixta venena</strong> tuo.
            </div>
            Hier steht das Partizip (mixta) im <strong class="pc">Akkusativ Plural Neutrum</strong> und das Substantiv (venena) ebenso, da die Beiden Wörter KNG (Kasus Numerus Genus) kongruent sind. <br/>
            Zudem liegt das Partizip hier als <a href=" " use:link={"/grammar/participium/ppp"}>PPP</a> vor,  wodurch eine Vorzeitigkeit bewirkt wird (Der Satz passt sich dem Partizip an).
        </div>
        <div class="types">
            Ein PC kann unterschiedlich übersetzt werden. Die Art und Weise der Übersetzung muss je nach Kontext entschieden werden. <br/><br/>
            Übersetzung als: <br/>
            <div class="types">
                <strong id="types">Attribut</strong>:
                <div id="indent1">
                    a) wörtlich: "Du selbst gabst deinem Kopf <strong class="pc">gemischte Gifte</strong>." <br/>
                    b) Relativsatz: "Du selbst gabst deinem Kopf <strong class="pc">Gifte, die gemischt worden waren</strong>." (Vorzeitigkeit!) <strong class="important">Kann fast immer genutz werden!</strong> <br/>
                </div>
                <br/>
                <strong id="types">Konjunktionaler Nebensatz</strong>:
                <div id="indent1">
                    a) temporal (Zeit): "Du selbst gabst deinem Kopf <strong class="pc">Gifte, nachdem sie gemischt worden waren</strong>." [nachdem, während, als] <br/>
                    b) kausal (Grund): "Du selbst gabst deinem Kopf <strong class="pc">Gifte, weil sie gemischt worden waren</strong>." [weil, da] <br/>
                    c) konzessiv (Wiederspruch?): "Du selbst gabst deinem Kopf <strong class="pc">Gifte, obwohl sie gemischt worden waren</strong>." [obwohl] <br/>
                    d) modal (Folge?): "Du selbst gabst deinem Kopf <strong class="pc">Gifte, indem sie gemischt worden waren</strong>." [indem, (wodurch?)] <br/>
                </div>
            </div>
        </div>
    </div>
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

    .Example a {
        color: #00788f;
        text-decoration: none;
        font-weight: bold;
    }

    .Example a:hover {
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

    span {
        display: inline-block;
        padding: 10px 20px;
        color: #ffffff;
        font-size: 1.5rem;
        width: 10rem;
        font-weight: bold;
        text-align: center;
        border-radius: 8px;
        border: #fff solid 2px;
        cursor: pointer;
        transition: background-color 0.3s, transform 0.2s;
        text-decoration: none;
    }

    span.back{
        background-color: darkred;
        width: 3.5rem;
        font-size: 1rem;
        display: inline-block;
        padding: 10px 20px;
        color: #ffffff;
        font-weight: bold;
        text-align: center;
        border-radius: 8px;
        border: #fff solid 2px;
        cursor: pointer;
        transition: background-color 0.3s, transform 0.2s;
        text-decoration: none;
    }
    span.back:hover {
        transform: scale(1.2);
        background-color: red;
    }
    .back-button{
        display: flex;
        justify-content: center;
        align-items: center;
        padding-top: 0.5rem;
        padding-bottom: -1cm;
    }
</style>