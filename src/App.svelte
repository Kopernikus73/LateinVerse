<script lang="ts">
    import Router, { location } from "svelte-spa-router"; // Importiere `location` aus svelte-spa-router
    import routes from "./routes";

    function goBack() {
        window.history.back();
    }

    function handleKeyDown(event: KeyboardEvent) {
        if (event.key === 'Enter' || event.key === ' ') {
            event.preventDefault(); // Verhindert das Scrollen bei Leertaste
            goBack();
        }
    }
</script>

<main>
    {#if $location !== '/'} <!-- Verwende $location direkt in der Bedingung -->
        <div class="back-button">
            <span role="button" tabindex="0" on:click={goBack} on:keydown={handleKeyDown} class="back">Zurück</span>
        </div>
    {/if}

    <Router {routes} />
    <div class="disclaimer">
        © 2024-2025 LateinVerse v0.0.2.17 | Alle Inhalte auf dieser Seite werden ohne Gewähr zur Verfügung gestellt. Es wird keine Verantwortung für die Richtigkeit oder Vollständigkeit übernommen
    </div>
</main>

<style>
    span.back {
        display: inline-block;
        padding: 10px 20px;
        color: #ffffff;
        font-size: 1.5rem;
        width: 15rem;
        font-weight: bold;
        text-align: center;
        border-radius: 8px;
        border: #fff solid 2px;
        cursor: pointer;
        transition: background-color 0.3s, transform 0.2s;
        text-decoration: none;
    }

    span.back {
        background-color: darkred;
        width: 3.5rem;
        font-size: 1rem;
        margin-bottom: -1rem;
    }

    span.back:hover {
        transform: scale(1.2);
        background-color: red;
    }

    .back-button {
        display: flex;
        justify-content: center;
        align-items: center;
        padding-top: 0.5rem;
    }

    main {
        padding-bottom: 3rem; /* Genügend Abstand für den Disclaimer */
    }

    /* Disclaimer */
    .disclaimer {
        position: fixed; /* Fixiere den Disclaimer am Bildschirmrand */
        bottom: 0; /* Setze den Disclaimer am unteren Rand */
        left: 0; /* Setze den Disclaimer an den linken Rand */
        width: 100%; /* Stelle sicher, dass der Disclaimer die gesamte Breite des Bildschirms einnimmt */
        background-color: #333; /* Dunkler Hintergrund */
        color: #d1d1d1; /* Helle Schrift */
        text-align: center;
        padding: 1rem;
        font-size: 0.7rem;
        border-top: 2px solid #444; /* Optional: Trennlinie zwischen Inhalt und Disclaimer */
    }
</style>