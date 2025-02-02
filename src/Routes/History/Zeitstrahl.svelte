<script>
    import { x002 } from "../../data.json";
</script>

<div class="main">
    <h1>Zeitstrahl</h1>
    <div class="timeline">
        {#each x002.events as event, id}
            <div class="event {id % 2 === 0 ? 'left' : 'right'}">
                <div class="content">
                    <h3>
                        {#if event.date >= 0}
                            {event.date}
                        {/if}
                        {#if event.date < 0}
                            {event.date*(-1)}
                        {/if}
                        {#if event.date >= 0}
                            n
                        {/if}
                        {#if event.date < 0}
                            v
                        {/if}
                        .Chr.
                            </h3>
                    <p>{event.title}</p>
                    <p class="description">{event.description}</p>
                </div>
            </div>
        {/each}
    </div>
</div>

<style>
    :global(body) {
        color: #e0e0e0;
    }

    h1 {
        font-size: 4rem;
        text-align: center;
        color: #00788f;
        border-bottom: 2px solid #005f73;
        margin-bottom: 1rem;
        padding-bottom: 0.5rem;
    }

    .timeline {
        position: relative;
        max-width: 800px;
        margin: 0 auto;
        padding: 20px 0;
    }

    .timeline::before {
        content: '';
        position: absolute;
        top: 0;
        bottom: 0;
        width: 4px;
        background: #444;
        left: 50%;
        margin-left: -2px;
    }

    .event {
        padding: 10px 40px;
        position: relative;
        width: 50%;
        box-sizing: border-box;
    }

    .event.left {
        left: 0;
    }

    .event.right {
        left: 50%;
    }

    .event::after {
        content: '';
        position: absolute;
        width: 20px;
        height: 20px;
        background: #121212;
        border: 4px solid #9b307f; /* Magenta für die runden Markierungen */
        top: 20px;
        border-radius: 50%;
        z-index: 1;
    }

    .event.left::after {
        right: -14px;
    }

    .event.right::after {
        left: -14px;
    }

    .content {
        padding: 20px;
        background: #1e1e1e;
        border-radius: 8px;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
        transition: box-shadow 0.1s ease 0s, outline 0s ease 0s; /* Keine Verzögerung */
    }

    .content:hover {
        box-shadow: 0 0 15px 5px rgba(155, 48, 127, 0.6);
        outline: 2px solid rgba(155, 48, 127, 0.8); /* Scharfer Rand mit Glow */
        cursor: default;
    }

    h3 {
        margin: 0;
        font-size: 1.4em;
        color: #9b307f; /* Magenta für die Jahreszahlen */
    }

    p {
        margin: 10px 0 0;
        color: #b0b0b0;
    }

    .description {
        color: #9e9e9e;
        font-size: 0.9em;
        line-height: 1.4;
    }
</style>