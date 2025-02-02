<script lang="ts">
    const hash = window.location.hash;
    const queryString = hash.includes('?') ? hash.split('?')[1] : '';
    const params = new URLSearchParams(queryString);

    const ret = params.get('ret');

    const pronoun_list = [
        {
            casus: "Nominativ",
            forms: [
                {latin:"ego",german:"ich"},
                {latin:"tu",german:"du"},

                {latin:"is",german:"er / dieser"},
                {latin:"ea",german:"sie / diese"},
                {latin:"id",german:"es / dieses"},

                {latin:"",german:""},

                {latin:"nos",german:"wir"},
                {latin:"vos",german:"ihr"},

                {latin:"ei / ii ",german:"sie / diese"},
                {latin:"eae",german:"sie / diese"},
                {latin:"ea",german:"sie / diese"},

                {latin:"",german:""}
            ]
        },
        {
            casus: "Genitiv",
            forms: [
                {latin:"mei",german:"meiner"},
                {latin:"tui",german:"deiner"},

                {latin:"eius",german:"sein / dessen"},
                {latin:"eius",german:"ihr / deren"},
                {latin:"eius",german:"sein / dessen"},

                {latin:"sui",german:"seiner / ihrer"},

                {latin:"nostri / nostrum",german:"unser"},
                {latin:"vestri / vestrum",german:"euer"},

                {latin:"eorum",german:"ihr / deren"},
                {latin:"earum",german:"ihr / deren"},
                {latin:"eorum",german:"ihr / deren"},

                {latin:"sui",german:"seiner / ihrer"}
            ]
        },
        {
            casus: "Dativ",
            forms: [
                {latin:"mihi",german:"mir"},
                {latin:"tibi",german:"dir"},

                {latin:"ei",german:"ihm / diesem"},
                {latin:"ei",german:"ihr / dieser"},
                {latin:"ei",german:"ihm / diesem"},

                {latin:"sibi",german:"sich"},

                {latin:"nobis",german:"uns"},
                {latin:"vobis",german:"euch"},

                {latin:"eis / iis",german:"ihnen / diesen"},
                {latin:"eis / iis",german:"ihnen / diesen"},
                {latin:"eis / iis",german:"ihnen / diesen"},

                {latin:"sibi",german:"sich"}
            ]
        },
        {
            casus: "Akkusativ",
            forms: [
                {latin:"me",german:"mich"},
                {latin:"te",german:"dich"},

                {latin:"eum",german:"ihn / diesen"},
                {latin:"eam",german:"sie / diese"},
                {latin:"id",german:"es / dieses"},

                {latin:"se",german:"sich"},

                {latin:"nos",german:"uns"},
                {latin:"vos",german:"euch"},

                {latin:"eos",german:"die / diese"},
                {latin:"eas",german:"die / diese"},
                {latin:"ea",german:"die / diese"},

                {latin:"se",german:"sich"}


            ]
        },
        {
            casus: "Ablativ",
            forms: [
                {latin:"a me / mecum",german:"von / mit mir"},
                {latin:"a te / tecum",german:"von / mit dir"},

                {latin:"eo",german:"ihm / diesem"},
                {latin:"ea",german:"ihr / dieser"},
                {latin:"eo",german:"ihm / diesem"},

                {latin:"a se / secum",german:"von / mit sich"},

                {latin:"a nobis / nobiscum",german:"von / mit uns"},
                {latin:"a vobis / vobiscum",german:"von / mit euch"},

                {latin:"eis / iis",german:"ihnen / diesen"},
                {latin:"eis / iis",german:"ihnen / diesen"},
                {latin:"eis / iis",german:"ihnen / diesen"},

                {latin:"a se / secum",german:"von / mit sich"}
            ]
        }
    ]
</script>

<div class="grammar">
    <h1>Personalpronomen</h1>
    <div class="info">
        <div class="function">
            <strong class="heading">Funktion:</strong> <br/>
            <div id="indent1">
                <strong class="important">Personalpronomen</strong> funktionieren in Latein wie im Deutschen. Sie können anstelle von <strong class="important">Namen</strong> und <strong class="important">Substantiven</strong> verwenden, wenn es der Kontext zulässt.
                <br/>
                Im folgenden Beispiel lässt sich der zweite Satz sowohl mit dem <strong class="important">Namen</strong>[a], als auch mit dem <strong class="important">Personalpronomen</strong>[b] bilden:
                <br/><br/>
                Quintus florem videt. (Quintus sieht eine Blume)
                <br/>
                a) <mark>Quintus</mark> ad it florem. (<mark>Quintus</mark> geht zu der Blume)
                <br/>
                b) <mark>Is</mark> ad it florem. (<mark>Er</mark> geht zu der Blume)
            </div>
            <br/>
        </div>
        <hr>
        <div class="reflexiveness">
            <strong class="heading">Reflexiv und nicht-reflexiv:</strong> <br/>
            <div id="indent1">
                Personalpronomen können reflexiv(a) und nicht-reflexiv(b) auftreten. <br/>
                a) Gaius <mark>se</mark> laudat. (Gaius lobt <mark>sich</mark>)<br/>
                b) Gaius <mark>eam</mark> laudat. (Gaius lobt <mark>ihn</mark>)<br/>
                Ein reflexives Pronomen (a) bezieht sich auf das Subjekt des Satzes. Ein nicht-reflexives Pronomen (b) bezieht sich nicht auf das Subjekt.
                <br/> <br/>
                Die Formen der zweiten Person können sowohl reflexiv als auch nicht-reflexiv sein. <br/>
                a) Ego <mark>me</mark> amo (Ich liebe <mark>mich</mark>)<br/>
                b) Ego <mark>te</mark> amo (Ich liebe <mark>dich</mark>)<br/>
                c) Tu <mark>te</mark> amas (Du liebst <mark>dich</mark>)<br>
                d) Tu <mark>me</mark> amas (Du liebst <mark>mich</mark>)<br/>
                Hier treten <strong class="word-italic">me</strong> und <strong class="word-italic">te</strong>  sowohl reflexiv (a,c) als auch nicht-reflexiv (b,d) auf.

                <br/><br/>
                Die Formen der dritten Person sind in reflexiv und nicht-reflexiv aufgeteilt. <strong class="word-italic">Se</strong> tritt nur reflexiv und <strong class="word-italic">is, ea, id</strong> nur nicht-reflexiv auf.<br/>

                Im Lateinischen werden also <strong class="word-italic">se</strong> als reflexives Pronomen(a) und <strong class="word-italic">is, ea, id</strong> als nicht-reflexive Pronomen(b) verwendet. <br/>
                a) Gaius <mark>se</mark> laudat. (Gaius lobt <mark>sich</mark>)<br/>
                b) Gaius <mark>eam</mark> laudat. (Gaius lobt <mark>ihn</mark>)
            </div>
            <br/>
        </div>
        <hr/>
        <div class="exception">
            <strong class="heading">Anmerkungen:</strong> <br/>
            <div id="indent1">
                Die Form in <strong class="PDP">Orange</strong> ist kein Personalpronomen. Allerdings wird es trotzdem hier aufgeführt,
                da <strong class="word-italic">is, ea, id</strong> sowohl als Personalpronomen als auch als
                {#if ret}
                    <a href="#/grammar/pronouns/demonstrative?ret=/grammar/pronouns/personal&xret={ret}">Demonstrativpronomen</a>
                {/if}
                {#if !ret}
                    <a href="#/grammar/pronouns/demonstrative?ret=/grammar/pronouns/personal">Demonstrativpronomen</a>
                {/if}
                übersetzt werden kann.
                <br/>
                <strong class="note">(Die Form in <strong class="P">Grün</strong> ist die Übersetzung des Personalpronomen)</strong>
            </div>
        </div>


    </div>

    <div class="table1_2">
        <table class="general">
            <tbody>
            <tr>
                <th></th>
                <th>1. Person Singular</th>
                <th>2. Person Singular</th>
            </tr>
            {#each pronoun_list as casus}
                <tr>
                    <td><strong class="case">{casus.casus}</strong></td>
                    <td>{casus.forms[0].latin} <br/> ({casus.forms[0].german})</td>
                    <td>{casus.forms[1].latin} <br/> ({casus.forms[1].german})</td>
                </tr>
            {/each}
            </tbody>
        </table>

        <table class="general">
            <tbody>
            <tr>
                <th></th>
                <th>1. Person Plural</th>
                <th>2. Person Plural</th>
            </tr>
            {#each pronoun_list as casus}
                <tr>
                    <td><strong class="case">{casus.casus}</strong></td>
                    <td>{casus.forms[6].latin} <br/> ({casus.forms[6].german})</td>
                    <td>{casus.forms[7].latin} <br/> ({casus.forms[7].german})</td>
                </tr>
            {/each}
            </tbody>
        </table>
    </div>

    <div class="middle">
        <div></div>
        <h2>Reflexiv</h2>
        <div></div>
    </div>

    <div class="reflexiveness-tables-1">
        <div></div>
        <div class="reflexive">
            <table class="reflexive">
                <tbody>
                <tr>
                    <th></th>
                    <th>3. Person Singular</th>
                    <th>3. Person Plural</th>
                </tr>
                {#each pronoun_list as casus}
                    <tr>
                        <td><strong class="case">{casus.casus}</strong></td>
                        {#if casus.forms[5].german !== ""}
                            <td>{casus.forms[5].latin} <br/> ({casus.forms[5].german})</td>
                            <td>{casus.forms[11].latin} <br/> ({casus.forms[11].german})</td>
                        {/if}
                        {#if casus.forms[5].german === ""}
                            <td> <br> ﻿</td>
                            <td> <br> ﻿</td>
                        {/if}
                    </tr>
                {/each}
                </tbody>
            </table>
        </div>
        <div></div>
    </div>

    <div class="middle">
        <div></div>
        <h2>Nicht-Reflexiv</h2>
        <div></div>
    </div>

    <div class="reflexiveness-tables">
        <table class="non-reflexive">
            <tbody>
            <tr>
                <th></th>
                <th></th>
                <th>3. Person Singular</th>
                <th></th>
            </tr>
            <tr>
                <th></th>
                <th>Maskulinum</th>
                <th>Femininum</th>
                <th>Neutrum</th>
            </tr>
            {#each pronoun_list as casus}
                <tr>
                    <td><strong class="case">{casus.casus}</strong></td>
                    <td>{casus.forms[2].latin} <br/> (<strong class="P">{casus.forms[2].german.split("/")[0]}</strong> / <strong class="PDP">{casus.forms[2].german.split("/")[1]}</strong>)</td>
                    <td>{casus.forms[3].latin} <br/> (<strong class="P">{casus.forms[3].german.split("/")[0]}</strong> / <strong class="PDP">{casus.forms[3].german.split("/")[1]}</strong>)</td>
                    <td>{casus.forms[4].latin} <br/> (<strong class="P">{casus.forms[4].german.split("/")[0]}</strong> / <strong class="PDP">{casus.forms[4].german.split("/")[1]}</strong>)</td>
                </tr>
            {/each}
            </tbody>
        </table>
        <table class="non-reflexive">
            <tbody>
            <tr>
                <th></th>
                <th></th>
                <th>3. Person Plural</th>
                <th></th>
            </tr>
            <tr>
                <th></th>
                <th>Maskulinum</th>
                <th>Femininum</th>
                <th>Neutrum</th>
            </tr>
            {#each pronoun_list as casus}
                <tr>
                    <td><strong class="case">{casus.casus}</strong></td>
                    <td>{casus.forms[8].latin} <br/> (<strong class="P">{casus.forms[8].german.split("/")[0]}</strong> / <strong class="PDP">{casus.forms[8].german.split("/")[1]}</strong>)</td>
                    <td>{casus.forms[9].latin} <br/> (<strong class="P">{casus.forms[9].german.split("/")[0]}</strong> / <strong class="PDP">{casus.forms[9].german.split("/")[1]}</strong>)</td>
                    <td>{casus.forms[10].latin} <br/> (<strong class="P">{casus.forms[10].german.split("/")[0]}</strong> / <strong class="PDP">{casus.forms[10].german.split("/")[1]}</strong>)</td>
                </tr>
            {/each}
            </tbody>
        </table>
    </div>

    <div class="info">
        *der Ablativ steht mit einer Präposition, wie z.B. <strong class="important">ab</strong>(von) oder <strong class="important">cum</strong>(mit)
    </div>
</div>

<style>
    strong.heading {
        font-weight: bold;
        font-size: 18px
    }

    h1 {
        font-size: 4rem;
        text-align: center;
        color: #00788f;
        border-bottom: 2px solid #005f73;
        margin-bottom: 1rem;
        padding-bottom: 0.5rem;
    }

    table {
        width: 100%;
        border-collapse: collapse;
        margin: 20px 0;
        border-radius: 8px;
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.3);
    }

    th {
        background-color: #1E1E1E;
        color: #FFFFFF;
        font-size: 16px;
        text-align: center;
        padding: 12px;
    }



    /* Allgemeine td-Konfiguration */
    td {
        color: #EEE;
        text-align: center;
        padding: 10px;
    }
    table.general{
        td:first-child {
            width: 6%;
            background-color: #1E1E1E;
            font-weight: bold;
        }

        td:nth-child(2) {
            width: 47%;
            background-color: #46494c;
        }
        td:nth-child(3) {
            width: 47%;
            background-color: #343a40;
        }
    }


    table.reflexive,table.non-reflexive {
        td:first-child {
            width: 8%;
            background-color: #1E1E1E;
            font-weight: bold;
        }

        td:nth-child(2) {
            width: 29%;
            background-color: #46494c;
        }
        td:nth-child(3) {
            width: 29%;
            background-color: #343a40;
        }
        td:nth-child(4) {
            width: 29%;
            background-color: #262626;
        }
    }

    /* #343a40   #46494c   #595959 */

    strong.case{
        color: #FFFFFF;
        font-size: 16px;
        text-align: left;
        padding: 12px;
    }
    strong.PDP{
        font-weight: normal;
        color: orangered;
    }
    strong.important{
        font-weight: bold;
    }
    strong.P{
        font-weight: normal;
        color: #33FF33;
    }
    strong.note{
        color: #888;
        font-weight: normal;
    }
    strong.word-italic{
        font-style: italic;
        font-weight: 600;
    }

    #indent1{
        margin-left: 0.5cm;
    }

    .table1_2,.reflexiveness-tables{
        display: grid;
        gap: 5%;
        grid-template-columns: repeat(2, 1fr);
        grid-template-rows: auto;
    }
    .reflexiveness-tables-1{
        display: grid;
        gap: 5%;
        grid-template-columns: 1fr 2.4fr 1fr;
        grid-template-rows: auto;
    }

    h2 {
        text-align: center;
        font-size: 2rem;
        border-bottom: #fff solid 1px;
    }

    mark{
        background: rgba(0, 120, 143, 0.5);
        border-radius: 5px;
        color: #ffffff;
    }

    hr{
        color: #005f73;
    }

    .middle{
        display: grid;
        gap: 7.5%;
        grid-template-columns: repeat(3, 1fr);
        grid-template-rows: auto;
    }

    a {
        color: #4181ff;
        text-decoration: none;
        font-weight: bold;
    }

    a:hover {
        text-decoration: underline;
    }
</style>