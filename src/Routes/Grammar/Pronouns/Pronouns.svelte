<script lang="ts">
    import { push } from 'svelte-spa-router';

    function goToPersonalPronouns() {
        push('/grammar/pronouns/personal');
    }

    function goToPossessivePronouns() {
        push('/grammar/pronouns/possessive');
    }

    function handleKeyDown(event: KeyboardEvent) {
        if (event.key === 'Enter' || event.key === ' ') {
            event.preventDefault(); // Prevent scrolling on Space
        }
    }
</script>

<div class="grammar">
    <h1>Pronomen</h1>
    <div class="item-list">
        <span role="button" tabindex="0" on:click={goToPersonalPronouns} on:keydown={handleKeyDown} class="buttons"> Personalpronomen </span>
        <span role="button" tabindex="0" on:click={goToPossessivePronouns} on:keydown={handleKeyDown} class="buttons"> Possessivpronomen </span>
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