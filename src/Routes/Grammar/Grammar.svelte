<script lang="ts">
    import { push } from 'svelte-spa-router';

    function goToDeclensions() {
        push('/grammar/declensions');
    }
    function goToConjugations() {
        push('/grammar/conjugations');
    }
    function goToSentenceStructures() {
        push('/grammar/sentence-structures');
    }
    function goToParticipium() {
        push('/grammar/participium');
    }
    function goToPronouns() {
        push('/grammar/pronouns');
    }
    function goToWords() {
        push('/grammar/words');
    }

    function handleKeyDown(event: KeyboardEvent) {
        if (event.key === 'Enter' || event.key === ' ') {
            event.preventDefault(); // Prevent scrolling on Space
        }
    }
</script>

<div class="grammar">
    <h1>Grammatik</h1>
    <div class="item-list">
        <span role="button" tabindex="0" on:click={goToDeclensions} on:keydown={handleKeyDown} class="buttons"> Deklinationen </span>
        <span role="button" tabindex="0" on:click={goToConjugations} on:keydown={handleKeyDown} class="buttons"> Konjugationen </span>
        <span role="button" tabindex="0" on:click={goToSentenceStructures} on:keydown={handleKeyDown} class="buttons"> Satzkonstruktionen </span>
        <span role="button" tabindex="0" on:click={goToParticipium} on:keydown={handleKeyDown} class="buttons"> Partizip </span>
        <span role="button" tabindex="0" on:click={goToPronouns} on:keydown={handleKeyDown} class="buttons"> Pronomen </span>
        <!--<span role="button" tabindex="0" on:click={goToWords} on:keydown={handleKeyDown} class="buttons"> Wortarten </span>-->
    </div>
</div>

<style>
    h1 {
        text-align: center;
        padding: 0.5rem;
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

    span:hover {
        transform: scale(1.05);
    }

    span.buttons {
        background-color: #2d8f3e;
    }
</style>