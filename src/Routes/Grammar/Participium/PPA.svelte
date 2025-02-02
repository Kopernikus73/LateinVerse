<script lang="ts">
    import { push_to } from "../../../global";
    
    const a_e = [
        {
            case: "Nominativ",
            words: [
                {main: "voca", particle: "ns", ending:""},
                {main: "voca", particle: "ns", ending:""},
                {main: "voca", particle: "ns", ending:""},
                {main: "voca", particle: "nt", ending:"es"},
                {main: "voca", particle: "nt", ending:"es"},
                {main: "voca", particle: "nt", ending:"ia"},
            ]
        },
        {
            case: "Genitiv",
            words: [
                {main: "voca", particle: "nt", ending:"is"},
                {main: "voca", particle: "nt", ending:"is"},
                {main: "voca", particle: "nt", ending:"is"},
                {main: "voca", particle: "nt", ending:"ium"},
                {main: "voca", particle: "nt", ending:"ium"},
                {main: "voca", particle: "nt", ending:"ium"},
            ]
        },
        {
            case: "Dativ",
            words: [
                {main: "voca", particle: "nt", ending:"i"},
                {main: "voca", particle: "nt", ending:"i"},
                {main: "voca", particle: "nt", ending:"i"},
                {main: "voca", particle: "nt", ending:"ibus"},
                {main: "voca", particle: "nt", ending:"ibus"},
                {main: "voca", particle: "nt", ending:"ibus"},
            ]
        },
        {
            case: "Akkusativ",
            words: [
                {main: "voca", particle: "nt", ending:"em"},
                {main: "voca", particle: "nt", ending:"em"},
                {main: "voca", particle: "ns", ending:""},
                {main: "voca", particle: "nt", ending:"es"},
                {main: "voca", particle: "nt", ending:"es"},
                {main: "voca", particle: "nt", ending:"ia"},
            ]
        },
        {
            case: "Ablativ",
            words: [
                {main: "voca", particle: "nt", ending:"e"},
                {main: "voca", particle: "nt", ending:"e"},
                {main: "voca", particle: "nt", ending:"e"},
                {main: "voca", particle: "nt", ending:"ibus"},
                {main: "voca", particle: "nt", ending:"ibus"},
                {main: "voca", particle: "nt", ending:"ibus"},
            ]
        },
    ]

    const i_kons = [
        {
            case: "Nominativ",
            words: [
                {main: "cred", add: "e", particle: "ns", ending:""},
                {main: "cred", add: "e", particle: "ns", ending:""},
                {main: "cred", add: "e", particle: "ns", ending:""},
                {main: "cred", add: "e", particle: "nt", ending:"es"},
                {main: "cred", add: "e", particle: "nt", ending:"es"},
                {main: "cred", add: "e", particle: "nt", ending:"ia"},
            ]
        },
        {
            case: "Genitiv",
            words: [
                {main: "cred", add: "e", particle: "nt", ending:"is"},
                {main: "cred", add: "e", particle: "nt", ending:"is"},
                {main: "cred", add: "e", particle: "nt", ending:"is"},
                {main: "cred", add: "e", particle: "nt", ending:"ium"},
                {main: "cred", add: "e", particle: "nt", ending:"ium"},
                {main: "cred", add: "e", particle: "nt", ending:"ium"},
            ]
        },
        {
            case: "Dativ",
            words: [
                {main: "cred", add: "e", particle: "nt", ending:"i"},
                {main: "cred", add: "e", particle: "nt", ending:"i"},
                {main: "cred", add: "e", particle: "nt", ending:"i"},
                {main: "cred", add: "e", particle: "nt", ending:"ibus"},
                {main: "cred", add: "e", particle: "nt", ending:"ibus"},
                {main: "cred", add: "e", particle: "nt", ending:"ibus"},
            ]
        },
        {
            case: "Akkusativ",
            words: [
                {main: "cred", add: "e", particle: "nt", ending:"em"},
                {main: "cred", add: "e", particle: "nt", ending:"em"},
                {main: "cred", add: "e", particle: "ns", ending:""},
                {main: "cred", add: "e", particle: "nt", ending:"es"},
                {main: "cred", add: "e", particle: "nt", ending:"es"},
                {main: "cred", add: "e", particle: "nt", ending:"ia"},
            ]
        },
        {
            case: "Ablativ",
            words: [
                {main: "cred", add: "e", particle: "nt", ending:"e"},
                {main: "cred", add: "e", particle: "nt", ending:"e"},
                {main: "cred", add: "e", particle: "nt", ending:"e"},
                {main: "cred", add: "e", particle: "nt", ending:"ibus"},
                {main: "cred", add: "e", particle: "nt", ending:"ibus"},
                {main: "cred", add: "e", particle: "nt", ending:"ibus"},
            ]
        },
    ]
</script>

<div class="main">
    <h1>Partizip Präsens Aktiv (PPA)</h1>
    <div class="info">
        Das PPA drückt in eine aktive <strong class="ppa">Gleichzeitigkeit</strong> zu der Handlung des Prädikats des Satzes aus.
        Es wird  aus einem Verb gebildet, aber wie ein Adjektiv dekliniert. <br/>
        Ein Partizip (auch <a href=" " on:click={push_to("/grammar/participium/ppp")}>PPP</a> und <a href=" " on:click={push_to("/grammar/participium/pfa")}>PFA</a>) kommt, so gut wie immer, in einem
        <a href=" " on:click={push_to("/grammar/sentence-structures/pc")}>PC</a>
        vor. Dazu lässt dich folgendes Beispiel anführen:

    </div>
    <div class="Example" id="ex1">
        <div id="sentence">
            <strong class="ppab">Vir</strong> | populum <strong class="ppa">laudans</strong> | domum redit
        </div>
        Hier steht das Partizip (laudans) im <strong class="ppa">Nominativ Singular Maskulinum</strong>. <br/>
        Das Bezugswort (vir) steht aufgrund der bestehenden KNG Kongruenz also ebenfalls im <strong class="ppab">Nominativ Singular Maskulinum</strong>.
    </div>
    *das "|" ist nur symbolisch aufgeführt
    <br><br>
    Um eine Übersicht zur Übersetzung zu bekommen kann die Seite zum <a href=" " on:click={push_to("/grammar/sentence-structures/pc")}>PC</a> gelesen werden. <br>
    Der oben stehende Satz könnte folglich beispielsweise etwa so übersetzt werden:<br>
    <div id="indent1">
        -> <strong class="ppab">Der Mann</strong>, <strong class="ppa">der</strong> das Volk <strong class="ppa">lobt</strong>, kehrt nach hause zurück.
    </div>
    <br><br>
    Folgende Deklinationstabellen sind anzuführen:
    <h2>a-/e-Deklination</h2>
    <div class="tables">
        <table>
            <tbody>
            <tr>
                <th class="temp">Singular</th>
                <th>Maskulinum</th>
                <th>Femininum</th>
                <th>Neutrum</th>
            </tr>
            {#each a_e as casus}
                <tr>
                    <th>{casus.case}</th>
                    <td>
                        {casus.words[0].main} - <strong class="particle">{casus.words[0].particle}</strong>
                        {#if casus.words[0].ending}
                            - <strong class="ending">{casus.words[0].ending}</strong>
                        {/if}
                    </td>
                    <td>
                        {casus.words[1].main} - <strong class="particle">{casus.words[1].particle}</strong>
                        {#if casus.words[1].ending}
                            - <strong class="ending">{casus.words[1].ending}</strong>
                        {/if}
                    </td>
                    <td>
                        {casus.words[2].main} - <strong class="particle">{casus.words[2].particle}</strong>
                        {#if casus.words[2].ending}
                            - <strong class="ending">{casus.words[2].ending}</strong>
                        {/if}
                    </td>
                </tr>
            {/each}
            </tbody>
        </table>
        <table>
            <tbody>
            <tr>
                <th class="temp">Plural</th>
                <th>Maskulinum</th>
                <th>Femininum</th>
                <th>Neutrum</th>
            </tr>
            {#each a_e as casus}
                <tr>
                    <th>{casus.case}</th>
                    <td>
                        {casus.words[3].main} - <strong class="particle">{casus.words[3].particle}</strong>
                        {#if casus.words[3].ending}
                            - <strong class="ending">{casus.words[3].ending}</strong>
                        {/if}
                    </td>
                    <td>
                        {casus.words[4].main} - <strong class="particle">{casus.words[4].particle}</strong>
                        {#if casus.words[4].ending}
                            - <strong class="ending">{casus.words[4].ending}</strong>
                        {/if}
                    </td>
                    <td>
                        {casus.words[5].main} - <strong class="particle">{casus.words[5].particle}</strong>
                        {#if casus.words[5].ending}
                            - <strong class="ending">{casus.words[5].ending}</strong>
                        {/if}
                    </td>
                </tr>
            {/each}
            </tbody>
        </table>
    </div>
    <h2>i-/kons.-Deklination</h2>
    <div class="tables">
        <table>
            <tbody>
            <tr>
                <th class="temp">Singular</th>
                <th>Maskulinum</th>
                <th>Femininum</th>
                <th>Neutrum</th>
            </tr>
            {#each i_kons as casus}
                <tr>
                    <th>{casus.case}</th>
                    <td>
                        {casus.words[0].main} - <strong class="add">{casus.words[0].add}</strong> - <strong class="particle">{casus.words[0].particle}</strong>
                        {#if casus.words[0].ending}
                            - <strong class="ending">{casus.words[0].ending}</strong>
                        {/if}
                    </td>
                    <td>
                        {casus.words[1].main} - <strong class="add">{casus.words[1].add}</strong> - <strong class="particle">{casus.words[1].particle}</strong>
                        {#if casus.words[1].ending}
                            - <strong class="ending">{casus.words[1].ending}</strong>
                        {/if}
                    </td>
                    <td>
                        {casus.words[2].main} - <strong class="add">{casus.words[2].add}</strong> - <strong class="particle">{casus.words[2].particle}</strong>
                        {#if casus.words[2].ending}
                            - <strong class="ending">{casus.words[2].ending}</strong>
                        {/if}
                    </td>
                </tr>
            {/each}
            </tbody>
        </table>
        <table>
            <tbody>
            <tr>
                <th class="temp">Plural</th>
                <th>Maskulinum</th>
                <th>Femininum</th>
                <th>Neutrum</th>
            </tr>
            {#each i_kons as casus}
                <tr>
                    <th>{casus.case}</th>
                    <td>
                        {casus.words[3].main} - <strong class="add">{casus.words[3].add}</strong> - <strong class="particle">{casus.words[3].particle}</strong>
                        {#if casus.words[3].ending}
                            - <strong class="ending">{casus.words[3].ending}</strong>
                        {/if}
                    </td>
                    <td>
                        {casus.words[4].main} - <strong class="add">{casus.words[4].add}</strong> - <strong class="particle">{casus.words[4].particle}</strong>
                        {#if casus.words[4].ending}
                            - <strong class="ending">{casus.words[4].ending}</strong>
                        {/if}
                    </td>
                    <td>
                        {casus.words[5].main} - <strong class="add">{casus.words[5].add}</strong> - <strong class="particle">{casus.words[5].particle}</strong>
                        {#if casus.words[5].ending}
                            - <strong class="ending">{casus.words[5].ending}</strong>
                        {/if}
                    </td>
                </tr>
            {/each}
            </tbody>
        </table>
    </div>

</div>

<style>
    h1 {
        font-size: 4rem;
        text-align: center;
        color: #00788f;
        border-bottom: 2px solid #005f73;
        margin-bottom: 1rem;
        padding-bottom: 0.5rem;
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

    .ppa{
        color: #bb86fc;
        font-weight: bold;
    }
    .ppab{
        color: #7faefc;
        font-weight: bold;
    }
    #sentence {
        font-size: 1.2em;
        margin-bottom: 10px;
    }

    a {
        color: #4181ff;
        text-decoration: none;
        font-weight: bold;
    }
    a:hover {
        text-decoration: underline;
    }

    #indent1{
        margin-left: 0.5cm;
    }

    table {
        width: 100%;
        border-collapse: collapse;
        margin: 20px 0;
        border-radius: 8px;
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.3);

        td:first-child {
            width: 10%;
            background-color: #1E1E1E;
            font-weight: bold;
        }

        td:nth-child(2) {
            background-color: #46494c;
            width: 30%;
        }
        td:nth-child(3) {
            background-color: #343a40;
            width: 30%;
        }
        td:nth-child(4) {
            background-color: #262626;
            width: 30%;
        }
    }
    td {
        color: #EEE;
        text-align: left;
        padding: 10px;
    }
    th {
        background-color: #1E1E1E;
        color: #FFFFFF;
        font-size: 16px;
        text-align: center;
        padding: 12px;
    }

    .tables{
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-template-rows: auto;
        gap: 5%;
    }

    strong.particle{
        color: #ff4645;
    }
    strong.ending{
        color: #41c04a;
    }
    strong.add{
        color: #ad78ff;
    }
    h2 {
        text-align: center;
        font-size: 2rem;
        border-bottom: #fff solid 1px;
    }
    .temp{
        color: #17cff8;
    }
</style>