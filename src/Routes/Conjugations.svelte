<script lang="ts">
    import { push } from 'svelte-spa-router';

    function goBack() {
        push('/grammar');
    }

    function handleKeyDown(event: KeyboardEvent) {
        if (event.key === 'Enter' || event.key === ' ') {
            event.preventDefault();
            goBack();
        }
    }
</script>

<div class="conjugations">
    <div class="back-button">
        <span role="button" tabindex="0" on:click={goBack} on:keydown={handleKeyDown} class="back">Back</span>
    </div>
    <h1>A - Konjugation</h1>
    <div class="category-list">
        <div class="category" id="table1-1">
            <h2>Futur II - Aktiv</h2>
            <table>
                <tbody>
                <tr>
                    <td>Infinitiv</td>
                    <td>am - <span class="con-verb">a</span> - <span class="con-perf">v</span> - <span class="con">visse</span></td>
                </tr>
                <tr>
                    <td>1. Ps. Sgl.</td>
                    <td>am - <span class="con-verb">a</span> - <span class="con-perf">v</span> - <span class="con">ero</span></td>
                </tr>
                <tr>
                    <td>2. Ps. Sgl.</td>
                    <td>am - <span class="con-verb">a</span> - <span class="con-perf">v</span> - <span class="con">eris</span></td>
                </tr>
                <tr>
                    <td>3. Ps. Sgl.</td>
                    <td>am - <span class="con-verb">a</span> - <span class="con-perf">v</span> - <span class="con">erit</span></td>
                </tr>
                <tr>
                    <td>1. Ps. Pl.</td>
                    <td>am - <span class="con-verb">a</span> - <span class="con-perf">v</span> - <span class="con">erimus</span></td>
                </tr>
                <tr>
                    <td>2. Ps. Pl.</td>
                    <td>am - <span class="con-verb">a</span> - <span class="con-perf">v</span> - <span class="con">eritis</span></td>
                </tr>
                <tr>
                    <td>3. Ps. Pl.</td>
                    <td>am - <span class="con-verb">a</span> - <span class="con-perf">v</span> - <span class="con">erint</span></td>
                </tr>
                </tbody>
            </table>
        </div>
        <div class="category" id="table1-2">
            <h2>Futur I - Aktiv</h2>
            <table>
                <tbody>
                <tr>
                    <td>Infinitiv</td>
                    <td>am - <span class="con-verb">a</span> - <span class="con">visse</span></td>
                </tr>
                <tr>
                    <td>1. Ps. Sgl.</td>
                    <td>am - <span class="con-verb">a</span> - <span class="con">bo</span></td>
                </tr>
                <tr>
                    <td>2. Ps. Sgl.</td>
                    <td>am - <span class="con-verb">a</span> - <span class="con">bis</span></td>
                </tr>
                <tr>
                    <td>3. Ps. Sgl.</td>
                    <td>am - <span class="con-verb">a</span> - <span class="con">bit</span></td>
                </tr>
                <tr>
                    <td>1. Ps. Pl.</td>
                    <td>am - <span class="con-verb">a</span> - <span class="con">bimus</span></td>
                </tr>
                <tr>
                    <td>2. Ps. Pl.</td>
                    <td>am - <span class="con-verb">a</span> - <span class="con">bitis</span></td>
                </tr>
                <tr>
                    <td>3. Ps. Pl.</td>
                    <td>am - <span class="con-verb">a</span> - <span class="con">bunt</span></td>
                </tr>
                </tbody>
            </table>
        </div>
        <div class="category" id="table1-3">
            <h2>Präsens - Aktiv</h2>
            <table>
                <tbody>
                <tr>
                    <td>Infinitiv</td>
                    <td>am - <span class="con-verb">a</span> - <span class="con">re</span></td>
                </tr>
                <tr>
                    <td>1. Ps. Sgl.</td>
                    <td>am - <span class="con">o</span></td>
                </tr>
                <tr>
                    <td>2. Ps. Sgl.</td>
                    <td>am - <span class="con-verb">a</span> - <span class="con">s</span></td>
                </tr>
                <tr>
                    <td>3. Ps. Sgl.</td>
                    <td>am - <span class="con-verb">a</span> - <span class="con">t</span></td>
                </tr>
                <tr>
                    <td>1. Ps. Pl.</td>
                    <td>am - <span class="con-verb">a</span> - <span class="con">mus</span></td>
                </tr>
                <tr>
                    <td>2. Ps. Pl.</td>
                    <td>am - <span class="con-verb">a</span> - <span class="con">tis</span></td>
                </tr>
                <tr>
                    <td>3. Ps. Pl.</td>
                    <td>am - <span class="con-verb">a</span> - <span class="con">nt</span></td>
                </tr>
                </tbody>
            </table>
        </div>
    </div>
</div>

<style>
    .category-list {
        display: grid;
        gap: 1.5rem;
        grid-template-areas:
        "table1-1-1 table1-1-2 table1-1-3"
        "table1-1-4 table1-1-5 table1-1-6"
        "table1-2-1 table1-2-2 table1-2-3"
        "table1-2-4 table1-2-5 table1-2-6";
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

    h1 {
        font-size: 4rem;
        text-align: center;
        color: #00788f;
        border-bottom: 2px solid #005f73;
        margin-bottom: 1rem;
        padding-bottom: 0.5rem;
    }

    h2 {
        text-align: center;
        color: #00788f;
        border-bottom: 2px solid #005f73;
        margin-bottom: 1rem;
        padding-bottom: 0.5rem;
    }

    table {
        width: 100%;
        font-size: 1rem;
    }

    td {
        padding: 12px;
        border: 1px solid #444444;
    }

    tbody tr:nth-child(1) {
        background: #005f73;
    }

    tbody tr:nth-child(2) {
        background: #9f6f1f;
    }

    tbody tr:nth-child(3) {
        background: #542e71;
    }

    tbody tr:nth-child(4) {
        background: #8b1e3f;
    }

    tbody tr:nth-child(5) {
        background: #3a5a40;
    }

    tbody tr:nth-child(6) {
        background: #2d4059;
    }

    tbody tr:nth-child(7) {
        background: #000;
    }

    td:nth-child(1) {
        width: 20%;
    }

    span.con {
        font-weight: bold;
        color: #80cbc4;
    }

    span.con-perf {
        font-weight: bold;
        color: chartreuse;
    }

    span.con-verb {
        font-weight: bold;
        color: #ffab40;
    }

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
            grid-template-areas:
            "table1 table2"
            "table3 table0"
            "table4 table0"
            "table5 table0";
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
    @media (max-width: 768px){
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

    span.back{
        background-color: darkred;
        width: 3.5rem;
        font-size: 1rem;
        display: inline-block;
        padding: 10px 20px;
        margin-bottom: 0.5rem;
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
        cursor: pointer;
    }
    .back-button{
        display: flex;
        justify-content: center;
        align-items: center;
        padding-top: 0.5rem;
        padding-bottom: -1cm;
    }
</style>