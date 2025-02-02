<script lang="ts">
    const meus_tuus_suus = [
        {
            "name":"Nominativ",
            "list" :[
                //meus, tuus
                [{"latin": "meus", "german": "mein"}, {"latin": "mea", "german": "meine"}, {"latin": "meum", "german": "mein"}],
                [{"latin": "tuus", "german": "dein"}, {"latin": "tua", "german": "deine"}, {"latin": "tuum", "german": "dein"}],
                [{"latin": "mei", "german": "meine"}, {"latin": "meae", "german": "meine"}, {"latin": "mea", "german": "meine"}],
                [{"latin": "tui", "german": "deine"}, {"latin": "tuae", "german": "deine"}, {"latin": "tua", "german": "deine"}],
                //suus
                [{"latin": "suus", "german": "sein"}, {"latin": "sua", "german": "seine"}, {"latin": "suum", "german": "sein"}],
                [{"latin": "sui", "german": "seine"}, {"latin": "suae", "german": "seine"}, {"latin": "sua", "german": "seine"}],
            ],
        },
        {
            "name":"Genitiv",
            "list" :[
                //meus, tuus
                [{"latin": "mei", "german": "meines"}, {"latin": "meae", "german": "meiner"}, {"latin": "mei", "german": "meines"}],
                [{"latin": "tui", "german": "deines"}, {"latin": "tuae", "german": "deines"}, {"latin": "tui", "german": "deines"}],
                [{"latin": "meorum", "german": "meiner"}, {"latin": "mearum", "german": "meiner"}, {"latin": "meorum", "german": "meiner"}],
                [{"latin": "tuorum", "german": "deiner"}, {"latin": "tuarum", "german": "deiner"}, {"latin": "tuorum", "german": "deiner"}],
                //suus
                [{"latin": "sui", "german": "seines"}, {"latin": "suae", "german": "seiner"}, {"latin": "sui", "german": "seines"}],
                [{"latin": "suorum", "german": "seiner"}, {"latin": "suarum", "german": "seiner"}, {"latin": "suorum", "german": "seiner"}],
            ],
        },
        {
            "name":"Dativ",
            "list" :[
                //meus, tuus
                [{"latin": "meo", "german": "meinem"}, {"latin": "meae", "german": "meiner"}, {"latin": "meo", "german": "meinem"}],
                [{"latin": "tuo", "german": "deinem"}, {"latin": "tuae", "german": "deinem"}, {"latin": "tuo", "german": "deinem"}],
                [{"latin": "meis", "german": "meinen"}, {"latin": "meis", "german": "meinen"}, {"latin": "meis", "german": "meinen"}],
                [{"latin": "tuis", "german": "deinen"}, {"latin": "tuis", "german": "deinen"}, {"latin": "tuis", "german": "deinen"}],

                //suus
                [{"latin": "suo", "german": "seinem"}, {"latin": "suae", "german": "seiner"}, {"latin": "suae", "german": "seinem"}],
                [{"latin": "suis", "german": "seinen"}, {"latin": "suis", "german": "seinen"}, {"latin": "suis", "german": "seinen"}],
            ],
        },
        {
            "name":"Akkusativ",
            "list" :[
                //meus, tuus
                [{"latin": "meum", "german": "meinen"}, {"latin": "meam", "german": "meine"}, {"latin": "meum", "german": "mein"}],
                [{"latin": "tuum", "german": "deinen"}, {"latin": "tuam", "german": "deine"}, {"latin": "tuum", "german": "dein"}],
                [{"latin": "meos", "german": "meine"}, {"latin": "meas", "german": "meine"}, {"latin": "mea", "german": "meine"}],
                [{"latin": "tuos", "german": "deine"}, {"latin": "tuas", "german": "deine"}, {"latin": "tua", "german": "deine"}],

                //suus
                [{"latin": "suum", "german": "seinen"}, {"latin": "suam", "german": "seine"}, {"latin": "suum", "german": "sein"}],
                [{"latin": "suos", "german": "seine"}, {"latin": "suas", "german": "seine"}, {"latin": "suos", "german": "seine"}],
            ],
        },
        {
            "name":"Ablativ",
            "list" :[
                //meus, tuus
                [{"latin": "meo", "german": "durch meinen"}, {"latin": "mea", "german": "durch meine"}, {"latin": "meo", "german": "durch mein"}],
                [{"latin": "tuo", "german": "durch deinen"}, {"latin": "tua", "german": "durch deine"}, {"latin": "tuo", "german": "durch dein"}],
                [{"latin": "meis", "german": "durch meine"}, {"latin": "meis", "german": "durch meine"}, {"latin": "meis", "german": "durch meine"}],
                [{"latin": "tuis", "german": "durch deine"}, {"latin": "tuis", "german": "durch deine"}, {"latin": "tuis", "german": "durch deine"}],

                //suus
                [{"latin": "suo", "german": "durch seinen"}, {"latin": "sua", "german": "durch seine"}, {"latin": "suo", "german": "durch sein"}],
                [{"latin": "suis", "german": "durch seine"}, {"latin": "suis", "german": "durch seine"}, {"latin": "suis", "german": "durch seine"}],
            ],
        },
        {
            "name":"Vokativ",
            "list" :[
                //meus, tuus
                [{"latin": "mi", "german": "mein"}, {"latin": "mea", "german": "meine"}, {"latin": "meum", "german": "mein"}],
                [{"latin": "tue", "german": "dein"}, {"latin": "tua", "german": "deine"}, {"latin": "tuum", "german": "dein"}],
                [{"latin": "mei", "german": "meine"}, {"latin": "meae", "german": "meine"}, {"latin": "mea", "german": "meine"}],
                [{"latin": "tui", "german": "deine"}, {"latin": "tuae", "german": "deine"}, {"latin": "tua", "german": "deine"}],

                //suus
                [{"latin": "sue", "german": "sein"}, {"latin": "sua", "german": "seine"}, {"latin": "suum", "german": "sein"}],
                [{"latin": "sui", "german": "seine"}, {"latin": "suae", "german": "seine"}, {"latin": "sua", "german": "seine"}],
            ],
        }
    ]

    const noster_vester_suus = [
        {
            "name":"Nominativ",
            "list" :[
                //noster, vester
                [{"latin": "noster", "german": "unser"}, {"latin": "nostra", "german": "unsere"}, {"latin": "nostrum", "german": "unser"}],
                [{"latin": "nostri", "german": ""}, {"latin": "", "german": ""}, {"latin": "", "german": ""}],
                [{"latin": "vester", "german": "euer"}, {"latin": "vestra", "german": "eure"}, {"latin": "vestrum", "german": "euer"}],
                [{"latin": "vestri", "german": ""}, {"latin": "", "german": ""}, {"latin": "", "german": ""}],
                //suus
                [{"latin": "suus", "german": "ihr"}, {"latin": "sua", "german": "ihre"}, {"latin": "suum", "german": "ihr"}],
                [{"latin": "sui", "german": ""}, {"latin": "", "german": ""}, {"latin": "", "german": ""}],
            ],
        },
        {
            "name":"Genitiv",
            "list" :[
                //noster, vester
                [{"latin": "nostri", "german": "unseres"}, {"latin": "nostrae", "german": "unserer"}, {"latin": "nostri", "german": "unseres"}],
                [{"latin": "", "german": ""}, {"latin": "", "german": ""}, {"latin": "", "german": ""}],
                [{"latin": "vestri", "german": "eures"}, {"latin": "vestrae", "german": "eurer"}, {"latin": "vestri", "german": "eures"}],
                [{"latin": "", "german": ""}, {"latin": "", "german": ""}, {"latin": "", "german": ""}],
                //suus
                [{"latin": "sui", "german": "ihres"}, {"latin": "suae", "german": "ihrer"}, {"latin": "sui", "german": "ihres"}],
                [{"latin": "", "german": ""}, {"latin": "", "german": ""}, {"latin": "", "german": ""}],
            ],
        },
        {
            "name":"Dativ",
            "list" :[
                //noster, vester
                [{"latin": "nostro", "german": "unserem"}, {"latin": "nostra", "german": "unserer"}, {"latin": "nostro", "german": "unserem"}],
                [{"latin": "", "german": ""}, {"latin": "", "german": ""}, {"latin": "", "german": ""}],
                [{"latin": "vestro", "german": "eurem"}, {"latin": "vestra", "german": "eurer"}, {"latin": "vestro", "german": "eurem"}],
                [{"latin": "", "german": ""}, {"latin": "", "german": ""}, {"latin": "", "german": ""}],
                //suus
                [{"latin": "suo", "german": "ihrem"}, {"latin": "sua", "german": "ihrer"}, {"latin": "suo", "german": "ihrem"}],
                [{"latin": "", "german": ""}, {"latin": "", "german": ""}, {"latin": "", "german": ""}],
            ],
        },
        {
            "name":"Akkusativ",
            "list" :[
                //noster, vester
                [{"latin": "nostrum", "german": "unseren"}, {"latin": "nostram", "german": "unsere"}, {"latin": "nostrum", "german": "unser"}],
                [{"latin": "", "german": ""}, {"latin": "", "german": ""}, {"latin": "", "german": ""}],
                [{"latin": "vestrum", "german": "euren"}, {"latin": "vestram", "german": "eure"}, {"latin": "vestrum", "german": "euer"}],
                [{"latin": "", "german": ""}, {"latin": "", "german": ""}, {"latin": "", "german": ""}],
                //suus
                [{"latin": "suum", "german": "ihren"}, {"latin": "suam", "german": "ihre"}, {"latin": "suum", "german": "ihr"}],
                [{"latin": "", "german": ""}, {"latin": "", "german": ""}, {"latin": "", "german": ""}],
            ],
        },
        {
            "name":"Ablativ",
            "list" :[
                //noster, vester
                [{"latin": "nostro", "german": "durch unseren"}, {"latin": "nostra", "german": "durch unsere"}, {"latin": "nostro", "german": "durch unser"}],
                [{"latin": "", "german": ""}, {"latin": "", "german": ""}, {"latin": "", "german": ""}],
                [{"latin": "vestro", "german": "durch euer"}, {"latin": "vestra", "german": "durch eure"}, {"latin": "vestro", "german": "durch euer"}],
                [{"latin": "", "german": ""}, {"latin": "", "german": ""}, {"latin": "", "german": ""}],
                //suus
                [{"latin": "suo", "german": "durch ihren"}, {"latin": "sua", "german": "durch ihre"}, {"latin": "suo", "german": "durch ihr"}],
                [{"latin": "", "german": ""}, {"latin": "", "german": ""}, {"latin": "", "german": ""}],
            ],
        },
        {
            "name":"Vokativ",
            "list" :[
                //noster, vester
                [{"latin": "", "german": ""}, {"latin": "", "german": ""}, {"latin": "", "german": ""}],
                [{"latin": "", "german": ""}, {"latin": "", "german": ""}, {"latin": "", "german": ""}],
                [{"latin": "", "german": ""}, {"latin": "", "german": ""}, {"latin": "", "german": ""}],
                [{"latin": "", "german": ""}, {"latin": "", "german": ""}, {"latin": "", "german": ""}],
                //suus
                [{"latin": "", "german": ""}, {"latin": "", "german": ""}, {"latin": "", "german": ""}],
                [{"latin": "", "german": ""}, {"latin": "", "german": ""}, {"latin": "", "german": ""}],
            ],
        },
    ]
</script>

<div>
    <h1>Possessivpronomen</h1>
    <div class="info">
        <div class="function">
            <strong class="heading">Funktion:</strong> <br/>
            <div id="indent1">
                <strong class="important">Possessivpronomen</strong> werden verwendet um ein Besitztum auszudrücken. <br/>
                Ein Beispiel dafür könnte so aussehen: <br/><br/>

                Ego librum <mark>tuus</mark> lego. (Ich lese <mark>dein</mark> Buch)
            </div>
            <br>
            <hr>
        </div>
        <div class="reflexiveness">
            <strong class="heading">Reflexiv und nicht-reflexiv:</strong> <br/>
            <div id="indent1">
                Possessivpronomen können reflexiv und nicht-reflexiv auftreten. <br/>
                Die Formen der zweiten Person können sowohl reflexiv(a) als auch nicht-reflexiv(b) sein: <br/> <br/>

                a) Ego <mark>meum</mark> canem video. (Ich sehe <mark>meinen</mark> Hund)<br/>
                b) Tu <mark>meum</mark> canem  etiam vides. (Du siehst <mark>meinen</mark> Hund auch) <br/><br/>

                Die Formen der dritten Person sind in reflexiv(a) und nicht-reflexiv(b) geteilt: <br/><br/>

                Livuius auctor libri est. (Livius ist der Autor eines Buches) <br/>
                a) Livius librum <mark>suum</mark> scribsit. (Livius hat <mark>sein</mark> Buch geschrieben) [sein -> Livius (selbst)] <br/>
                b) Claudius librum <mark>eius</mark> legivit. (Claudius hat <mark>sein</mark> Buch gelesen) [sein -> Livius] <br/>
            </div>
            <br>
            <hr>
        </div>
    </div>



    <div class="middle">
        <div></div>
        <h2 class="form_heading">MEUS, TUUS, SUUS</h2>
        <div></div>
    </div>
    <div class="general" id="singular">
        <table>
            <tbody>
            <tr>
                <th></th>
                <th></th>
                <th>1. Person Singular</th>
                <th></th>
            </tr>
            <tr>
                <th></th>
                <th>maskulinum</th>
                <th>femininum</th>
                <th>neutrum</th>
            </tr>
            {#each meus_tuus_suus as casus}
                <tr>
                    <td><strong class="case">{casus.name}</strong></td>
                    <td>{casus.list[0][0].latin} <br/> ({casus.list[0][0].german})</td>
                    <td>{casus.list[0][1].latin} <br/> ({casus.list[0][1].german})</td>
                    <td>{casus.list[0][2].latin} <br/> ({casus.list[0][2].german})</td>
                </tr>
            {/each}
            </tbody>
        </table>
        <table>
            <tbody>
            <tr>
                <th></th>
                <th></th>
                <th>2. Person Singular</th>
                <th></th>
            </tr>
            <tr>
                <th></th>
                <th>maskulinum</th>
                <th>femininum</th>
                <th>neutrum</th>
            </tr>
            {#each meus_tuus_suus as casus}
                <tr>
                    <td><strong class="case">{casus.name}</strong></td>
                    <td>{casus.list[1][0].latin} <br/> ({casus.list[1][0].german})</td>
                    <td>{casus.list[1][1].latin} <br/> ({casus.list[1][1].german})</td>
                    <td>{casus.list[1][2].latin} <br/> ({casus.list[1][2].german})</td>
                </tr>
            {/each}
            </tbody>
        </table>
    </div>
    <div class="general" id="plural">
        <table>
            <tbody>
            <tr>
                <th></th>
                <th></th>
                <th>1. Person Plural</th>
                <th></th>
            </tr>
            <tr>
                <th></th>
                <th>maskulinum</th>
                <th>femininum</th>
                <th>neutrum</th>
            </tr>
            {#each meus_tuus_suus as casus}
                <tr>
                    <td><strong class="case">{casus.name}</strong></td>
                    <td>{casus.list[2][0].latin} <br/> ({casus.list[2][0].german})</td>
                    <td>{casus.list[2][1].latin} <br/> ({casus.list[2][1].german})</td>
                    <td>{casus.list[2][2].latin} <br/> ({casus.list[2][2].german})</td>
                </tr>
            {/each}
            </tbody>
        </table>
        <table>
            <tbody>
            <tr>
                <th></th>
                <th></th>
                <th>2. Person Plural</th>
                <th></th>
            </tr>
            <tr>
                <th></th>
                <th>maskulinum</th>
                <th>femininum</th>
                <th>neutrum</th>
            </tr>
            {#each meus_tuus_suus as casus}
                <tr>
                    <td><strong class="case">{casus.name}</strong></td>
                    <td>{casus.list[3][0].latin} <br/> ({casus.list[3][0].german})</td>
                    <td>{casus.list[3][1].latin} <br/> ({casus.list[3][1].german})</td>
                    <td>{casus.list[3][2].latin} <br/> ({casus.list[3][2].german})</td>
                </tr>
            {/each}
            </tbody>
        </table>
    </div>

    <div class="two_headings">
        <div></div>
        <h2>Reflexiv</h2>
        <div></div>
    </div>
    <div class="general" id="singular/plural">
        <table>
            <tbody>
            <tr>
                <th></th>
                <th></th>
                <th>3. Person Singular</th>
                <th></th>
            </tr>
            <tr>
                <th></th>
                <th>maskulinum</th>
                <th>femininum</th>
                <th>neutrum</th>
            </tr>
            {#each meus_tuus_suus as casus}
                <tr>
                    <td><strong class="case">{casus.name}</strong></td>
                    <td>{casus.list[4][0].latin} <br/> ({casus.list[4][0].german})</td>
                    <td>{casus.list[4][1].latin} <br/> ({casus.list[4][1].german})</td>
                    <td>{casus.list[4][2].latin} <br/> ({casus.list[4][2].german})</td>
                </tr>
            {/each}
            </tbody>
        </table>
        <table>
            <tbody>
            <tr>
                <th></th>
                <th></th>
                <th>3. Person Plural</th>
                <th></th>
            </tr>
            <tr>
                <th></th>
                <th>maskulinum</th>
                <th>femininum</th>
                <th>neutrum</th>
            </tr>
            {#each meus_tuus_suus as casus}
                <tr>
                    <td><strong class="case">{casus.name}</strong></td>
                    <td>{casus.list[5][0].latin} <br/> ({casus.list[5][0].german})</td>
                    <td>{casus.list[5][1].latin} <br/> ({casus.list[5][1].german})</td>
                    <td>{casus.list[5][2].latin} <br/> ({casus.list[5][2].german})</td>
                </tr>
            {/each}
            </tbody>
        </table>
    </div>

    <div class="info">
        *<strong class="important">sein/seine</strong> gilt hier als representative Form. Sie muss dem Fall spezifisch für <strong class="important">er/sie/es</strong> angepasst werden
    </div>

    <div class="middle">
        <div></div>
        <h2 class="form_heading">NOSTER, VESTER, SUUS</h2>
        <div></div>
    </div>
    <div class="general" id="singular">
        <table>
            <tbody>
            <tr>
                <th></th>
                <th></th>
                <th>1. Person Singular</th>
                <th></th>
            </tr>
            <tr>
                <th></th>
                <th>maskulinum</th>
                <th>femininum</th>
                <th>neutrum</th>
            </tr>
            {#each noster_vester_suus as casus}
                <tr>
                    <td><strong class="case">{casus.name}</strong></td>
                    <td>{casus.list[0][0].latin} <br/> ({casus.list[0][0].german})</td>
                    <td>{casus.list[0][1].latin} <br/> ({casus.list[0][1].german})</td>
                    <td>{casus.list[0][2].latin} <br/> ({casus.list[0][2].german})</td>
                </tr>
            {/each}
            </tbody>
        </table>
        <table>
            <tbody>
            <tr>
                <th></th>
                <th></th>
                <th>2. Person Singular</th>
                <th></th>
            </tr>
            <tr>
                <th></th>
                <th>maskulinum</th>
                <th>femininum</th>
                <th>neutrum</th>
            </tr>
            {#each noster_vester_suus as casus}
                <tr>
                    <td><strong class="case">{casus.name}</strong></td>
                    <td>{casus.list[1][0].latin} <br/> ({casus.list[1][0].german})</td>
                    <td>{casus.list[1][1].latin} <br/> ({casus.list[1][1].german})</td>
                    <td>{casus.list[1][2].latin} <br/> ({casus.list[1][2].german})</td>
                </tr>
            {/each}
            </tbody>
        </table>
    </div>
    <div class="general" id="plural">
        <table>
            <tbody>
            <tr>
                <th></th>
                <th></th>
                <th>1. Person Plural</th>
                <th></th>
            </tr>
            <tr>
                <th></th>
                <th>maskulinum</th>
                <th>femininum</th>
                <th>neutrum</th>
            </tr>
            {#each noster_vester_suus as casus}
                <tr>
                    <td><strong class="case">{casus.name}</strong></td>
                    <td>{casus.list[2][0].latin} <br/> ({casus.list[2][0].german})</td>
                    <td>{casus.list[2][1].latin} <br/> ({casus.list[2][1].german})</td>
                    <td>{casus.list[2][2].latin} <br/> ({casus.list[2][2].german})</td>
                </tr>
            {/each}
            </tbody>
        </table>
        <table>
            <tbody>
            <tr>
                <th></th>
                <th></th>
                <th>2. Person Plural</th>
                <th></th>
            </tr>
            <tr>
                <th></th>
                <th>maskulinum</th>
                <th>femininum</th>
                <th>neutrum</th>
            </tr>
            {#each noster_vester_suus as casus}
                <tr>
                    <td><strong class="case">{casus.name}</strong></td>
                    <td>{casus.list[3][0].latin} <br/> ({casus.list[3][0].german})</td>
                    <td>{casus.list[3][1].latin} <br/> ({casus.list[3][1].german})</td>
                    <td>{casus.list[3][2].latin} <br/> ({casus.list[3][2].german})</td>
                </tr>
            {/each}
            </tbody>
        </table>
    </div>

    <div class="two_headings">
        <div></div>
        <h2>Reflexiv</h2>
        <div></div>
    </div>
    <div class="general" id="singular/plural">
        <table>
            <tbody>
            <tr>
                <th></th>
                <th></th>
                <th>3. Person Singular</th>
                <th></th>
            </tr>
            <tr>
                <th></th>
                <th>maskulinum</th>
                <th>femininum</th>
                <th>neutrum</th>
            </tr>
            {#each noster_vester_suus as casus}
                <tr>
                    <td><strong class="case">{casus.name}</strong></td>
                    <td>{casus.list[4][0].latin} <br/> ({casus.list[4][0].german})</td>
                    <td>{casus.list[4][1].latin} <br/> ({casus.list[4][1].german})</td>
                    <td>{casus.list[4][2].latin} <br/> ({casus.list[4][2].german})</td>
                </tr>
            {/each}
            </tbody>
        </table>
        <table>
            <tbody>
            <tr>
                <th></th>
                <th></th>
                <th>3. Person Plural</th>
                <th></th>
            </tr>
            <tr>
                <th></th>
                <th>maskulinum</th>
                <th>femininum</th>
                <th>neutrum</th>
            </tr>
            {#each noster_vester_suus as casus}
                <tr>
                    <td><strong class="case">{casus.name}</strong></td>
                    <td>{casus.list[5][0].latin} <br/> ({casus.list[5][0].german})</td>
                    <td>{casus.list[5][1].latin} <br/> ({casus.list[5][1].german})</td>
                    <td>{casus.list[5][2].latin} <br/> ({casus.list[5][2].german})</td>
                </tr>
            {/each}
            </tbody>
        </table>
    </div>
</div>

<style>
    h1 {
        font-size: 4rem;
        text-align: center;
        color: #00788f;
        border-bottom: 2px solid #005f73;
        margin-bottom: 1rem;
        padding-bottom: 0.5rem;
    }
    mark{
        background: rgba(0, 120, 143, 0.5);
        border-radius: 5px;
        color: #ffffff;
    }
    #indent1{
        margin-left: 0.5cm;
    }
    strong.heading {
        font-weight: bold;
        font-size: 18px
    }
    hr{
        color: #005f73;
    }


    table {
        width: 100%;
        border-collapse: collapse;
        margin: 20px 0;
        border-radius: 8px;
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.3);

        td:first-child {
            width: 10%;
            background-color: #1E1E1E;
            font-weight: bold;
        }

        td:nth-child(2) {
            background-color: #46494c;
            width: 30%;
        }
        td:nth-child(3) {
            background-color: #343a40;
            width: 30%;
        }
        td:nth-child(4) {
            background-color: #262626;
            width: 30%;
        }
    }
    td {
        color: #EEE;
        text-align: center;
        padding: 10px;
    }
    th {
        background-color: #1E1E1E;
        color: #FFFFFF;
        font-size: 16px;
        text-align: center;
        padding: 12px;
    }
    .general {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-template-rows: auto;
        gap: 5%;
    }
    strong.case{
        color: #FFFFFF;
        font-size: 16px;
        text-align: left;
        padding: 12px;
    }

    .middle{
        display: grid;
        gap: 7.5%;
        grid-template-columns: repeat(3, 1fr);
        grid-template-rows: auto;
    }
    .two_headings{
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        grid-template-rows: auto;
    }
    h2 {
        text-align: center;
        font-size: 2rem;
        border-bottom: #fff solid 1px;
    }
    h2.form_heading{
        font-size: 2.25rem;
        border: #fff solid 2px;
    }
</style>