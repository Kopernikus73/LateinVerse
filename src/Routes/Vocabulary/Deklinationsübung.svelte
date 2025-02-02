<script lang="ts">
    import {x001} from "../../data.json"

    interface WordInfo {
        index_name: string;
        name: string;
        genus: string;
        [key: string]: any;  // optionales Feld für das Wort
    }

    const state_names = ["Deklination", "Kasus","Numerus","Genus"];

    const casus_info = [
        {
            "index_name": "o-m",
            "name": "O-Deklination",
            "genus": "Maskulinum"
        },
        {
            "index_name": "o-e",
            "name": "O-Deklination (-er)",
            "genus": "Maskulinum"
        },
        {
            "index_name": "o-n",
            "name": "O-Deklination",
            "genus": "Neutrum"
        },
        {
            "index_name": "a-f",
            "name": "A-Deklination",
            "genus": "Femininum"
        },
        {
            "index_name": "3-m",
            "name": "3. Deklination",
            "genus": "Maskulinum"
        },
        {
            "index_name": "3-f",
            "name": "3. Deklination",
            "genus": "Femininum"
        },
        {
            "index_name": "3-n",
            "name": "3. Deklination",
            "genus": "Neutrum"
        }    ]

    let show_states: { [key:string]: boolean } = {
        decl_state: false,
        casus_state: false,
        numerus_state: false,
        genus_state: false,
    };

    function get_random_index(length: number) {
        return Math.floor(Math.random() * length);
    }

    function random_word() {
        const randomIndex = get_random_index(casus_info.length);
        return casus_info[randomIndex];
    }

    function switch_control(key: string) {
        show_states[key] = !show_states[key];
        updated_values = update_show_states();
    }


    let updated_values = update_show_states()
    function update_show_states() {
        let casus,numerus,genus,decl;
        if (show_states.casus_state) {
            casus = current_word_info["casus"];
        } else {
            casus = "?";
        }
        if (show_states.numerus_state) {
            numerus = current_word_info["numerus"];
        } else {
            numerus = "?";
        }
        if (show_states.genus_state) {
            genus = current_word_info["genus"];
        } else {
            genus = "?";
        }
        if (show_states.decl_state) {
            decl = current_word_info["name"];
        } else {
            decl = "?";
        }

        return {
            "decl" : decl,
            "casus" : casus,
            "numerus" : numerus,
            "genus" : genus,
        };
    }

    function get_random_word_attributes(index_name: keyof typeof x001["casus"][0]["words"]) {
            const randomCaseIndex = get_random_index(x001["casus"].length);
            const randomWordIndex = get_random_index(x001["casus"][randomCaseIndex].words[index_name].length);

            return {
                "word" : x001["casus"][randomCaseIndex].words[index_name][randomWordIndex],
                "case" : x001["casus"][randomCaseIndex]["case"],
                "numerus" : x001["casus"][randomCaseIndex]["numerus"],
                "word_index" : randomWordIndex,
            };
    }
    function get_set_word_attributes(word_index: number,dec_index: keyof typeof x001.casus[0]["words"]){
        let random_index = get_random_index(x001.casus.length);

        return {
            "word": x001.casus[random_index]["words"][dec_index][word_index],
            "casus": x001.casus[random_index]["case"],
            "numerus": x001.casus[random_index]["numerus"],
        }
    }


    // Word Logic
    let current_word_info: WordInfo = random_word(); // index-name, name, genus
    let to_guess_word_info: {[key:string]:string} = {};

    function new_word() {
        current_word_info = random_word();
        to_guess_word_info = {};
        {
            let info_buffer = get_random_word_attributes(current_word_info.index_name as keyof typeof x001.casus[0]["words"]);
            current_word_info["word"] = info_buffer["word"];
            current_word_info["casus"] = info_buffer["case"];
            current_word_info["numerus"] = info_buffer["numerus"];
            current_word_info["word_index"] = info_buffer["word_index"];
        }
        {
            let info_buffer = get_set_word_attributes(current_word_info["word_index"],current_word_info.index_name as keyof typeof x001.casus[0]["words"]);
            to_guess_word_info["word"] = info_buffer["word"];
            to_guess_word_info["casus"] = info_buffer["casus"];
            to_guess_word_info["numerus"] = info_buffer["numerus"];
            to_guess_word_info["genus"] = current_word_info["genus"];
        }
        updated_values = update_show_states();
        output = ""
        user_input = ""
    }

    {
        let info_buffer = get_random_word_attributes(current_word_info.index_name as keyof typeof x001.casus[0]["words"]);
        current_word_info["word"] = info_buffer["word"];
        current_word_info["casus"] = info_buffer["case"];
        current_word_info["numerus"] = info_buffer["numerus"];
        current_word_info["word_index"] = info_buffer["word_index"];
    }
    {
        let info_buffer = get_set_word_attributes(current_word_info["word_index"],current_word_info.index_name as keyof typeof x001.casus[0]["words"]);
        to_guess_word_info["word"] = info_buffer["word"];
        to_guess_word_info["casus"] = info_buffer["casus"];
        to_guess_word_info["numerus"] = info_buffer["numerus"];
    }

    // User Input Usage
    let user_input: string;

    let output = ""
    function test_user_input() {
        if (!user_input) {
            output = "Kein Wort eingegeben!";
        }
        else if (user_input.toLowerCase() == to_guess_word_info["word"]) {
            output = "Richtig!";
        } else {
            output = "Leider falsch";
        }
    }
    function show_answer(){
        output = to_guess_word_info["word"];
    }
</script>

<div class="main">
    <h1>Deklinationsübung</h1>

    <div class="guess_container">
        <strong class="word">{current_word_info.word}</strong> <strong class="attributes">({updated_values.decl} | {updated_values.casus} | {updated_values.numerus} | {updated_values.genus})</strong>

        <br><br>

        <strong class="attributes">-> {to_guess_word_info["casus"]} | {to_guess_word_info["numerus"]}</strong>

        <br><br>

        {#each Object.keys(show_states) as key,id}
            <div>
                <input
                        type="checkbox"
                        checked={show_states[key]}
                        on:change={() => switch_control(key)}
                />
                {state_names[id]}
            </div>
        {/each}
        <input type="text" bind:value={user_input} placeholder="Eingabe"/>

        <button on:click={test_user_input}>Prüfen</button> <button on:click={new_word}>Neues Wort</button> <button on:click={show_answer}>Lösung anzeigen</button>

        <br>
        <strong class="output">{output}</strong>
    </div>
</div>


<style>
    :global(body) {
        color: #e0e0e0;
        margin: 0;
        padding: 0;
    }

    .main {
        margin: 0 auto;
        padding: 20px;
    }


    @media only screen and (min-width: 1024px) {
        .guess_container{
            max-width: 40%;
            margin: 0 auto;
            padding: 20px;
        }
    }

    h1 {
        font-size: 4rem;
        text-align: center;
        color: #00788f;
        border-bottom: 2px solid #005f73;
        margin-bottom: 1rem;
        padding-bottom: 0.5rem;
    }

    .word {
        font-size: 2em;
        color: #4fc3f7;
    }

    .attributes {
        font-size: 1.2em;
        color: #81c784;
    }

    input[type="text"] {
        background-color: #333;
        color: #e0e0e0;
        border: 1px solid #555;
        padding: 10px;
        margin: 10px 0;
        width: calc(100% - 22px);
    }

    input[type="checkbox"] {
        margin-right: 10px;
    }

    button {
        background-color: #4fc3f7;
        color: #1e1e1e;
        border: none;
        padding: 10px 20px;
        margin-top: 15px;
        cursor: pointer;
        font-size: 1em;
    }

    button:hover {
        background-color: #81c784;
    }

    .output {
        color: #fcb164;
        font-size: 1.2em;
        display: block;
        margin-top: 20px;
    }

    div {
        margin-bottom: 10px;
    }
</style>