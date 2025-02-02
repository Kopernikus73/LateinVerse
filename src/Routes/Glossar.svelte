<script lang="ts">
    import { push } from 'svelte-spa-router';

    let inputText = "";
    const glossar = [
        {
            name: "KNG Kongruenz",
            id: 0,
            description: "Die KNG Kongruenz beschreibt das Gleichseien des Kasus (K) Nummerus (N) und Genus (G) zweier Wörter.",
            example: '"Forum" steht im Nom. Sgl. n. Ein Wort, das KNG kongruent dazu steht müsste also ebenfalls im Nom. Sgl. n. stehen. Z.B. "magnum" (von magnus)',
            link: ""
        },
        {
            name: "Kasus",
            id: 1,
            description: "Der Kasus (Fall) ist eine der drei Deklinationskategorien. Jedes Substantiv, Adjektiv, Partizip, Pronomen, usw. hat einen zugewiesenen Kasus. Dieser ist am der Endung des Wortes abzulesen",
            example:  "Servus -> Nominativ (Die Endung '-us' deutet hier auf den Nominativ hin)\n"+
                      "Servo -> Dativ / Ablativ (Die Endung '-o' deutet hier auf den Dativ oder auf den Ablativ hin)",
            link: ""
        },
        {
            name: "PLATZHALTER",
            id: -1,
            description: "",
            example:  '',
            link: ""
        },
        {
            name: "PPP",
            id: 2,
            description: "-> Grammatik -> Partizip -> PPP",
            example:  '',
            link: "/grammar/participium/ppp"
        },
        {
            name: "PPA",
            id: 3,
            description: "-> Grammatik -> Partizip -> PPA",
            example:  '',
            link: "/grammar/participium/ppa"
        },
        {
            name: "PFA",
            id: 4,
            description: "-> Grammatik -> Partizip -> PFA",
            example:  '',
            link: "/grammar/participium/pfa"
        },
        {
            name: "PC (Participium Coniunctum)",
            id: 5,
            description: "-> Grammatik -> Satzkonstruktionen -> PC",
            example:  '',
            link: "/grammar/sentence-structures/pc"

        },
        {
            name: "ACI (Accusativus cum Infinitivo)",
            id: 6,
            description: "-> Grammatik -> Satzkonstruktionen -> ACI",
            example:  '',
            link: "/grammar/sentence-structures/aci"
        },
        {
            name: "PLATZHALTER",
            id: -2,
            description: "",
            example:  '',
            link: ""
        },
        {
            name: "Pronomen",
            id: 7,
            description: "Pronomen sind Wörter, die anstelle von Namen und Substantiven verwendet werden\n(lat. pro -> für / anstelle von | lat. nomen -> Name)",
            example:  "Arminus florem pulcheram videt.(Arminus sieht eine schöne Blume) \nArminus ad it ei florem. (Arminus geht zu dieser Blume) \nIt ad it ei florem. (Er geht zu dieser Blume)",
            link: ""
        },
        {
            name: "Reflexivpronomen",
            id: 8,
            description: "Ein Reflexivpronomen ist ein Pronomen, das sich auf das Subjekt des Satzes bezieht",
            example:  "Ego me laudo -> Ich lobe mich \nHierbei ist 'me' das Reflexivpronomen, da es sich auf 'Ego' bezieht\n\nEgo te laudo -> Ich lobe dich\nHierbei ist 'te' kein Reflexivpronomen, da es sich nicht auf 'Ego' bezieht",
            link: ""
        }
    ];

    function calcScrollHeight(id: number) {
        for (let i=0; i<(glossar.length + (3 - (glossar.length % 3)))/3;i++) {
            for(let k=0;k<=3; k++) {
                if (glossar[i*3 + k].id === id){
                    window.scrollTo({ top: 420 + (i)*440, behavior: 'smooth' });
                    break
                }
            }
        }
    }

    function search() {
        for (let i = 0; glossar; i++) {
            if (glossar[i].name.toLowerCase() === inputText.toLowerCase()) {
                if(inputText.toLowerCase() !== '') {
                    calcScrollHeight(glossar[i].id);
                    break;
                }
            }
            if (glossar[i].name.toLowerCase().includes(inputText.toLowerCase())) {
                if(inputText.toLowerCase() !== '') {
                    calcScrollHeight(glossar[i].id);
                    break;
                }
            }
        }
    }

    function goToDestination(link: string) {
        push(link+"?ret=/glossar");
    }

    function handleKeyDown(event: KeyboardEvent) {
        if (event.key === 'Enter' || event.key === ' ') {
            event.preventDefault();
            search();
        }
    }
</script>

<div class="main">
    <h1>Glossar</h1>
    <div class="input">
        <input
                type="text"
                bind:value={inputText}
                placeholder="Suchen"
        />
        <span role="button" tabindex="0" on:click={search} on:keydown={handleKeyDown}></span>
    </div>
    <div class="word-list">
        {#each glossar as item (item.id)}
        <span class="glossar-item">
            <strong class="name">{item.name}</strong><br>
            <div class="description"><em>{item.description}</em><br></div>
            {#if item.example !== ""}
                <div class="example"><u>Beispiel:</u><br>{item.example}</div>
            {/if}
            {#if item.link !== ""}
                <div class="example">
                    <a href=" " role="button" tabindex="0" on:click={(e) => { e.preventDefault(); goToDestination(item.link); }} on:keydown={handleKeyDown}>
                        [Direkter Link]
                    </a>
                </div>
            {/if}
        </span>
        {/each}
    </div>
</div>

<style>
    .input{
        display: flex;
        align-items: center;
        justify-content: center;
        input {
            align-content: center;
            font-size: 1rem;
        }
        span{
            display: block;
            color: #ffffff;
            font-size: 0.5rem;
            width: 0.25rem;
            height: 0.25rem;
            font-weight: bold;
            text-align: left;
            border-radius: 0;
            border: 2px solid #fff;
            cursor: pointer;
            text-decoration: none;
            background: #ffab40;
        }
        margin-bottom: 1rem;
    }

    h1 {
        font-size: 7rem;
        text-align: center;
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

    .word-list{
        width: 95%;
        display: grid;
        margin-left: 3%;
        justify-content: center;
        align-items: center;
        grid-template-columns: repeat(3, 1fr);
        gap: 1rem;
        margin-bottom: 530px;
    }
    .word-list span{
        display: block;
        text-align: left;
        width: 90%;
        background: #582d31;
        height: 25rem;
    }
    .word-list span:hover{
        cursor: default;
    }
    .description, .example{
        font-size: 1rem;
        font-style: italic;
    }
    .example{
        margin-top: 0.5rem;
    }
    .name{
        align-self: center;
        border-bottom: 3px solid #fff;
        width: 100%;
        font-size: 1.8rem;
    }

    .example a {
        color: #4181ff; /* Blau */
        text-decoration: none; /* Keine Unterstreichung */
        bottom: 10px; /* Abstand vom unteren Rand des Blocks */
        left: 0;
        width: 100%;
        text-align: left; /* Zentrieren des Links */
    }

    .description, .example {
        font-size: 1rem;
        font-style: italic;
        white-space: pre-wrap; /* Beachtet Zeilenumbrüche (\n) */
    }
</style>