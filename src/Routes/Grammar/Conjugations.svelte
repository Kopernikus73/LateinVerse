<script lang="ts">
    import {x003} from "../../data.json"

    const names = [
        "Infinitiv","1. Ps. Sgl.", "2. Ps. Sgl.", "3. Ps. Sgl.","1. Ps. Pl.","2. Ps. Pl.","3. Ps. Pl."
    ]

    function scroll_to_object(name: string){
        return (event: any) => {
            event.preventDefault();
            for (let i=0;i < x003["conjugations"].length;i++){
                if (x003["conjugations"][i]["name"] === name) {
                    window.scrollTo({ top: 310 + (i*5)*475, behavior: 'smooth' });
                    break
                }
            }
        }
    }

    function handleKeyDown(event: any){
        event.preventDefault()
    }
</script>

<div class="conjugations">
    <h1 class="super_header">Konjugationen</h1>
    <div class="fast_scroll">
        <span role="button" tabindex="0" on:click={scroll_to_object("A - Konjugation")} on:keydown={handleKeyDown}>A-Konjugation</span>
        <span role="button" tabindex="0" on:click={scroll_to_object("E - Konjugation")} on:keydown={handleKeyDown}>E-Konjugation</span>
    </div>

    {#each x003["conjugations"] as conjugation}
        <h1>{conjugation.name}</h1>
        <h3 class="a">Aktiv</h3>
        <div class="category-list">
            {#each conjugation.active as active}
            <div class="category">
                <h2>{active.name} - <span class="v-a">Aktiv</span></h2>
                <table>
                    <tbody>

                    {#each active.list as list_member, id}
                        <tr>
                            <td>{names[id]}</td>
                            <td>
                                {conjugation.word_root}
                                {#if list_member.particle !== ""}
                                    - <span class="con-verb">{list_member.particle}</span>
                                {/if}
                                {#if list_member.tempus_particle !== ""}
                                    - <span class="con-perf">{list_member.tempus_particle}</span>
                                {/if}
                                 - <span class="con">{list_member.ending}</span></td>
                        </tr>
                    {/each}
                    </tbody>
                </table>
            </div>
            {/each}
        </div>
        <h3 class="p">Passiv</h3>
        <div class="category-list">
            {#each conjugation.passive as passive}
                <div class="category">
                    <h2>{passive.name} - <span class="v-p">Passiv</span></h2>
                    <table>
                        <tbody>
                        {#each passive.list as list_member, id}
                            <tr>
                                <td>{names[id]}</td>
                                <td>
                                    {conjugation.word_root}
                                    {#if list_member.particle !== ""}
                                        - <span class="con-verb">{list_member.particle}</span>
                                    {/if}
                                    {#if list_member.tempus_particle !== ""}
                                        - <span class="con-perf">{list_member.tempus_particle}</span>
                                    {/if}
                                    - <span class="con">{list_member.ending}</span></td>
                            </tr>
                        {/each}
                        </tbody>
                    </table>
                </div>
            {/each}
        </div>
    {/each}
</div>

<style>
    /* Verbesserungen für die Überschriften */
    h1 {
        font-size: 3.25rem;
        text-align: center;
        color: #00788f;
        border-bottom: 2px solid #005f73;
        margin-bottom: 1.5rem;
        padding-bottom: 1rem;
        letter-spacing: 1px;
    }

    h1.super_header {
        font-size: 4rem;
        text-align: center;
        color: #00788f;
        border-bottom: 2px solid #005f73;
        margin-bottom: 1.5rem;
        padding-bottom: 1rem;
        letter-spacing: 1px;
    }

    h2 {
        text-align: center;
        color: #00788f;
        border-bottom: 2px solid #005f73;
        margin-bottom: 1rem;
        padding-bottom: 0.5rem;
    }
    h3{
        text-align: center;
        font-size: 2rem;

        margin-bottom: 1rem;
        padding-bottom: 0.5rem;
    }

    h3.a{
        color: #41c04a;
        border-bottom: 2px solid #41c04a;
    }
    h3.p{
        color: #eebb1e;
        border-bottom: 2px solid #eebb1e;
    }

    /* Verbesserungen für die Scroll-Spans */
    span[role="button"] {
        display: inline-block;
        margin: 0.5rem;
        padding: 0.75rem 1.5rem;
        font-size: 1.25rem;
        font-weight: bold;
        color: #fff;
        background-color: #00788f;
        border-radius: 25px;
        cursor: pointer;
        transition: background-color 0.3s ease, transform 0.2s ease;
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.2);
    }

    span[role="button"]:hover {
        background-color: #005f73;
        transform: translateY(-2px);
    }

    span[role="button"]:active {
        transform: translateY(0);
    }

    span[role="button"]:focus {
        outline: none;
        box-shadow: 0 0 0 3px rgba(0, 120, 143, 0.5);
    }

    /* Responsive Anpassungen für die Scroll-Spans */
    @media (max-width: 768px) {
        span[role="button"] {
            padding: 0.5rem 1rem;
            font-size: 1rem;
        }
    }

    /* Allgemeine Stile für die Kategorien und Tabellen */
    .category-list {
        display: grid;
        gap: 1.5rem;
        grid-template-columns: repeat(3, 1fr);
        grid-template-rows: auto;
    }

    .category {
        flex: 1 1 100%;
        background: #1e1e1e;
        padding: 1.5rem;
        max-width: 100%;
        border-radius: 10px;
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.4);
        border: 1px solid #333;
    }

    table {
        width: 100%;
        font-size: 1rem;
        font-weight: 500;
    }

    td {
        padding: 12px;
        border: 1px solid #444444;
    }

    tbody tr:nth-child(2) {
        background: #005f73;
    }

    tbody tr:nth-child(3) {
        background: #9f6f1f;
    }

    tbody tr:nth-child(4) {
        background: #542e71;
    }

    tbody tr:nth-child(5) {
        background: #8b1e3f;
    }

    tbody tr:nth-child(6) {
        background: #3a5a40;
    }

    tbody tr:nth-child(7) {
        background: #2d4059;
    }

    tbody tr:nth-child(8) {
        background: #000;
    }

    td:nth-child(1) {
        width: 20%;
    }

    span.v-a {
        color: #41c04a;
    }

    span.v-p {
        color: #eebb1e;
    }

    span.con {
        font-weight: bold;
        color: #90dbd4;
    }

    span.con-perf {
        font-weight: bold;
        color: chartreuse;
    }

    span.con-verb {
        font-weight: bold;
        color: #ffab40;
    }

    /* Responsive Anpassungen */
    @media (max-width: 768px) {
        .category {
            flex: 1 1 100%;
        }

        .category-list {
            flex-direction: column;
        }
    }

    /* iPad-specific styles for portrait mode */
    @media (min-width: 768px) and (max-width: 1024px) and (orientation: portrait) {
        .category-list {
            grid-template-areas:
            "table1"
            "table2"
            "table3"
            "table4"
            "table5";
            grid-template-columns: 1fr;
        }

        .category {
            padding: 1rem;
        }

        h2 {
            font-size: 1.5rem;
        }

        td {
            padding: 10px;
        }
    }

    /* iPad-specific styles for landscape mode */
    @media (max-width: 1260px) and (orientation: landscape) {
        .category-list {
            grid-template-columns: repeat(2, 1fr);
        }

        .category {
            padding: 1rem;
        }

        h2 {
            font-size: 1.5rem;
        }

        td {
            padding: 10px;
        }
    }

    @media (max-width: 768px) {
        .category-list {
            grid-template-areas:
            "table1"
            "table2"
            "table3"
            "table4"
            "table5"
            "table6";
            grid-template-columns: 1fr;
        }

        .category {
            padding: 0.5rem;
        }

        h2 {
            font-size: 1.2rem;
        }

        td {
            padding: 5px;
        }
    }

    .fast_scroll{
        display: grid;
        justify-content: center;
        align-items: center;
        text-align: center;
        grid-template-columns: repeat(2, 0.125fr);
        gap: 1rem;
    }
</style>