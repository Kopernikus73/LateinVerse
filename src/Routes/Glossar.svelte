<script lang="ts">
    import { push } from 'svelte-spa-router';

    let inputText = "";
    let glossar = [
        {
            name: "KNG Kongruenz",
            id: 0,
            description: "Die KNG Kongruenz beschreibt das Gleichseien des Kasus (K) Nummerus (N) und Genus (G) zweier Wörter.",
            example: '"Forum" steht im Nom. Sgl. n. Ein Wort, das KNG kongruent dazu steht müsste also ebenfalls im Nom. Sgl. n. stehen. Z.B. "magnum" (von magnus)',
            height: 200
        },
        {
            name: "Kasus",
            id: 1,
            description: "Der Kasus (Fall) ist eine der drei Deklinationskategorien. Jedes Substantiv, Adjektiv, Partizip, Pronomen, usw. hat einen zugewiesenen Kasus. Dieser ist am der Endung des Wortes abzulesen",
            example:  "Servus -> Nominativ (Die Endung '-us' deutet hier auf den Nominativ hin)",
            height: 200
        }
    ];

    function search() {
        for(let i=0;glossar;i++) {
            if (glossar[i].name.toLowerCase().includes(inputText.toLowerCase())) {
                scrollToPosition(glossar[i].height)
                break
            }
        }
    }


    function goBack() {
        push('/');
    }

    function scrollToPosition(height: number) {
        window.scrollTo(100, height);
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
    <h1>Glossar</h1>
    <div class="input">
        <input
                type="text"
                bind:value={inputText}
                placeholder="Suchen"
        />
        <span role="button" tabindex="0" on:click={search()} on:keydown={handleKeyDown}></span>
    </div>
    <div class="word-list">
        {#each glossar as item (item.id)}
        <span class="glossar-item">
            <strong id="name">{item.name}</strong><br>
            <div class="description"><em>{item.description}</em><br></div>
            <div class="example"><u>Beispiel:</u>  <br> {item.example}</div>
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

    .word-list{
        width: 95%;
        display: grid;
        margin-left: 3%;
        justify-content: center;
        align-items: center;
        grid-template-columns: repeat(3, 1fr);
        gap: 1rem;
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
    #name{
        align-self: center;
        border-bottom: 3px solid #fff;
        width: 100%;
        font-size: 1.8rem;
    }
    u {
        font-size: 1.5rem;
        font-style: normal;
    }

</style>