<script lang="ts">
    import { push } from 'svelte-spa-router';

    function goToGrammar() {
        push('/grammar');
    }
    function goToVocab() {
        push('/vocabulary');
    }
    function goToGlossar() {
        push('/glossar');
    }
    function goToHistory() {
        push('/history');
    }
    function handleKeyDown(event: KeyboardEvent) {
        if (event.key === 'Enter' || event.key === ' ') {
            event.preventDefault();
            goToGrammar();
        }
    }
</script>

<div class="home">
    <h1><img src="letter-l.svg" alt="L" width="128" height="128"/>atein Verse</h1>
    <div class="item-list">
        <span role="button" tabindex="0" on:click={goToGrammar} on:keydown={handleKeyDown} class="grammar"> Grammatik </span>
        <span role="button" tabindex="0" on:click={goToVocab} on:keydown={handleKeyDown} class="vocabulary"> Vokabeln </span>
        <span role="button" tabindex="0" on:click={goToGlossar} on:keydown={handleKeyDown} class="glossar"> Glossar </span>
        <span role="button" tabindex="0" on:click={goToHistory} on:keydown={handleKeyDown} class="history"> Geschichte </span>

    </div>
</div>


<style>
    img{
        margin-bottom: -0.2rem;
    }

    h1{
        text-align: center;
        font-size: 7rem;
    }

    .item-list {
        display: grid;
        justify-content: center;
        align-items: center;
        grid-template-columns: repeat(2, 0.1fr);
        gap: 1rem;
    }

    span {
        display: inline-block;
        padding: 10px 20px;
        color: #ffffff;
        font-size: 1.5rem;
        width: 17rem;
        font-weight: bold;
        text-align: center;
        border-radius: 8px;
        border: #fff solid 2px;
        cursor: pointer;
        transition: background-color 0.3s, transform 0.2s;
        text-decoration: none;
    }

    /* Farben */
    span.grammar {
        background-color: #2d8f3e;
    }
    span.vocabulary {
        background-color: #414a8f;
    }
    span.glossar {
        background-color: #d51515;
    }
    span.history {
        background-color: #9b307f;
    }

    span:hover {
        transform: scale(1.05);
    }
</style>
