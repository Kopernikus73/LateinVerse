<script lang="ts">
    import { push } from 'svelte-spa-router';

    function goToDeclinations() {
        push('/grammar/declensions');
    }
    function handleKeyDown(event: KeyboardEvent) {
        if (event.key === 'Enter' || event.key === ' ') {
            event.preventDefault(); // Prevent scrolling on Space
            goToDeclinations();
        }
    }
</script>


<span role="button" tabindex="0" on:click={goToDeclinations} on:keydown={handleKeyDown}> Deklinationen </span>

<style>
    span {
        display: inline-block; /* Makes the span behave more like a button */
        padding: 10px 20px;
        background-color: #2d4059;
        color: #ffffff;
        font-size: 1rem;
        font-weight: bold;
        text-align: center;
        border-radius: 8px;
        cursor: pointer;
        transition: background-color 0.3s, transform 0.2s; /* Smooth hover effect */
        text-decoration: none; /* Removes underline if text is styled like a link */
    }

    /* Hover effect for mouse users */
    span:hover {
        background-color: #435f7a;
        transform: scale(1.05); /* Slight zoom effect */
    }

    /* Focus effect for keyboard users */
    span:focus {
        outline: 2px solid #ffffff;
        outline-offset: 2px;
        background-color: #55697a;
    }

    /* Active effect when the element is clicked */
    span:active {
        transform: scale(0.95); /* Shrink effect on click */
    }
</style>