<script lang="ts">
    import { push } from 'svelte-spa-router';

    function goToGrammar() {
        push('/grammar');
    }
    function goToVocab() {
        push('/vocabulary');
    }
    function handleKeyDown(event: KeyboardEvent) {
        if (event.key === 'Enter' || event.key === ' ') {
            event.preventDefault(); // Prevent scrolling on Space
            goToGrammar();
        }
    }
</script>

<div class="">
    <h1><img src="../assets/letter-l.svg" alt="L" width="512" height="512"/> atein Verse</h1>
    <div class="item-list">
        <span role="button" tabindex="0" on:click={goToGrammar} on:keydown={handleKeyDown} class="grammar"> Grammatik </span>
        <span role="button" tabindex="0" on:click={goToVocab} on:keydown={handleKeyDown} class="vocabulary"> Vokabeln </span>
    </div>
</div>


<style>
    h1 {
        text-align: center;
        padding: 0.5rem;
        font-size: 7rem;
    }

    .item-list {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 1rem;

    }

    span {
        display: inline-block; /* Makes the span behave more like a button */
        padding: 10px 20px;

        color: #ffffff;
        font-size: 1.5rem;
        width: 10rem;
        font-weight: bold;
        text-align: center;
        border-radius: 8px;
        border: #fff solid 2px;
        cursor: pointer;
        transition: background-color 0.3s, transform 0.2s; /* Smooth hover effect */
        text-decoration: none; /* Removes underline if text is styled like a link */
    }

    span.grammar {
        background-color: #2d8f3e;
    }
    span.vocabulary {
        background-color: #414a8f;
    }
    span:hover {
        transform: scale(1.05); /* Slight zoom effect */
    }

    /* Focus effect for keyboard users */
    span:focus {
        outline: 2px solid #ffffff;
        outline-offset: 2px;
    }

    /* Active effect when the element is clicked */
    span:active {
        transform: scale(0.95); /* Shrink effect on click */
    }
</style>
