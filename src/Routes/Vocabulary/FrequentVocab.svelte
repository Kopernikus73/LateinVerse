<script lang="ts">
    import { push } from 'svelte-spa-router';

    function goBack() {
        const hash = window.location.hash;
        const queryString = hash.includes('?') ? hash.split('?')[1] : '';
        const params = new URLSearchParams(queryString);

        const ret = params.get('ret');

        if (ret) {
            push(`${ret}`);
        } else {
            push('/vocabulary');
        }
    }

    function handleKeyDown(event: KeyboardEvent) {
        if (event.key === 'Enter' || event.key === ' ') {
            event.preventDefault();
            goBack();
        }
    }

    /*
    id: ?,
    area: "?",
                words: [
                    {
                        frequency: 1-9,
                        latin: "?",
                        german: "?",
                        form: "? | ?",
                        example: {
                            latin: "?",
                            german: "?"
                        },
                    },
                ]
     */

    const word_list = [
        {
            id: 1,
          area: "Grundwort",
            words: [
                {
                    frequency: 9,
                    latin: "et",
                    german: "und",
                    form: "Konjunktion",
                    example: {
                        latin: "Senatores et Consules viri erant.",
                        german: "Senatoren und Consule waren Männer"
                    },
                },
                {
                    frequency: 5,
                    latin: "aut",
                    german: "oder",
                    form: "Konjunktion",
                    example: {
                        latin: "Eo ad Aulo aut Livio.",
                        german: "Ich gehe zu Aulus oder Livius"
                    },
                },
                {
                    frequency: 8,
                    latin: "esse",
                    german: "sein/sich befinden",
                    form: "Verb | Sonderform",
                    example: {
                        latin: "Puer Patris filius est.",
                        german: "Der Junge ist der Sohn der Vaters"
                    },
                },
            ]
        },
        {
            id: 2,
            area: "Redewendung",
            words: [
                {
                    frequency: 6,
                    latin: "aut... aut",
                    german: "entweder... oder",
                    form: "Konjunktion (-en)",
                    example: {
                        latin: "Livius Aulo aut florem aut donum dat.",
                        german: "Livius gibt Aulus entweder eine Blume oder ein Geschenk"
                    },
                },
            ]
        },
        {
            id: 4,
            area: "Liebeselegie",
            words: [
                {
                    frequency: 7,
                    latin: "amare",
                    german: "lieben/mögen",
                    form: "Verb | a-Konjugation",
                    example: {
                        latin: "Puellae amant flores.",
                        german: "Die Mädchen lieben Blumen"
                    },
                },
                {
                    frequency: 5,
                    latin: "puella",
                    german: "Mädchen",
                    form: "Substantiv | a-Deklination",
                    example: {
                        latin: "Puellae et Pueri homines sunt.",
                        german: "Mädchen und Jungen sind Menschen"
                    },
                },
            ]
        },
        {
            id: 5,
            area: "Politik",
            words: [
                {
                    frequency: 2,
                    latin: "properare",
                    german: "eilen/sich beeilen",
                    form: "Verb | a-Konjugation",
                    example: {
                        latin: "Senator in forum properat.",
                        german: "Der Senator eilt auf das Forum"
                    },
                },
            ]
        }
        ]
</script>

<div class="vocab-test">
    <h1>Häufige Vokabeln</h1>

    <table class="vocab-table">
        <tbody>
        <tr>
            <th>Häufigkeit</th>
            <th>Latein</th>
            <th>Deutsch</th>
            <th>Wortart</th>
            <th>Beispiel</th>
            <th>Vorkommen / Typ</th>
        </tr>
        {#each word_list as category}
            {#each category.words as word}
            <tr>
                <td><div class="frequency-bar" data-frequency="{word.frequency}"></div></td>
                <td>{word.latin}</td>
                <td>{word.german}</td>
                <td>{word.form}</td>
                <td>{word.example.latin} ({word.example.german})</td>
                <td>{category.area}</td>
            </tr>
            {/each}
            {#if category.id !== word_list.length +1}
                <tr class="fill">
                    <td></td><td></td><td></td><td></td><td></td><td></td>
                </tr>
            {/if}
        {/each}
        </tbody>
    </table>

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

    table {
        width: 100%;
        border-collapse: collapse;
        margin: 20px 0;
        background-color: #1E1E1E;
        border-radius: 8px;
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.3);
    }

    th,td {
        padding: 12px;
        text-align: left;
    }
    th {
        background-color: #333333;
        color: #FFFFFF;
        font-size: 16px;
    }



    /* td config */
    td {
        background-color: #2C2C2C;
        color: #CCCCCC;
    }
    td:first-child {
        width: 5%;
    }
    td:nth-child(2) {
        width: 8%;
    }
    td:nth-child(3) {
        width: 10%;
    }
    td:nth-child(4) {
        width: 15%;
    }
    td:last-child {
        width: 11%;
    }
    td:nth-child(odd) {
        background-color: #252525;
    }

    tr.fill {
        td{
            background-color: #1E1E1E;
            padding: 4px;
            border-bottom: #CCCCCC 0px solid;
        }
    }


    /* Frequenz-Balken */
    .frequency-bar {
        width: 100%;
        height: 10px;
        background-color: #444;
        border-radius: 5px;
        position: relative;
    }

    .frequency-bar::after {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        height: 100%;
        border-radius: 5px;
        transition: width 0.3s, background-color 0.3s;
    }

    /* Farben je nach Häufigkeit */
    .frequency-bar[data-frequency="1"]::after {
        width: 11%;
        background-color: #FF0000; /* Rote Farbe für niedrige Häufigkeit */
    }

    .frequency-bar[data-frequency="2"]::after {
        width: 22%;
        background-color: #FF3300; /* Gelbe Farbe für mittlere Häufigkeit */
    }

    .frequency-bar[data-frequency="3"]::after {
        width: 33%;
        background-color: #FF6600; /* Grüne Farbe für hohe Häufigkeit */
    }

    .frequency-bar[data-frequency="4"]::after {
        width: 44%;
        background-color: #FF9900; /* Blaugrün für sehr hohe Häufigkeit */
    }

    .frequency-bar[data-frequency="5"]::after {
        width: 55%;
        background-color: #FFCC00; /* Helle Blau für extrem hohe Häufigkeit */
    }

    .frequency-bar[data-frequency="6"]::after {
        width: 66%;
        background-color: #99CC00; /* Rote Farbe für niedrige Häufigkeit */
    }

    .frequency-bar[data-frequency="7"]::after {
        width: 77%;
        background-color: #33CC33; /* Gelbe Farbe für mittlere Häufigkeit */
    }

    .frequency-bar[data-frequency="8"]::after {
        width: 88%;
        background-color: #17cff8; /* Grüne Farbe für hohe Häufigkeit */
    }

    .frequency-bar[data-frequency="9"]::after {
        width: 100%;
        background-color: #0882ff; /* Blaugrün für sehr hohe Häufigkeit */
    }
</style>