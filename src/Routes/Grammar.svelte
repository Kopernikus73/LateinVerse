<script lang="ts">
    import { push } from 'svelte-spa-router';

    function goBack() {
        push('/');
    }
    function goToDeclinations() {
        push('/grammar/declensions');
    }
    function handleKeyDown(event: KeyboardEvent) {
        if (event.key === 'Enter' || event.key === ' ') {
            event.preventDefault(); // Prevent scrolling on Space
            goBack();
        }
    }
</script>

<div class="grammar">
    <div class="back-button">
        <span role="button" tabindex="0" on:click={goBack} on:keydown={handleKeyDown} class="back">Back</span>
    </div>
    <h1>Grammatik</h1>
    <div class="item-list">
        <span role="button" tabindex="0" on:click={goToDeclinations} on:keydown={handleKeyDown} class="declensions"> Deklinationen </span>
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

    /* Hover effect for mouse users */
    span:hover {
        transform: scale(1.05); /* Slight zoom effect */
    }

    span.declensions {
        background-color: #2d8f3e;
    }

    span.back{
        background-color: darkred;
        width: 3.5rem;
        font-size: 1rem;
    }
    span.back:hover {
        transform: scale(1.2); /* Slight zoom effect */
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