<script lang="ts">
    import { supabase } from '../supabase.js'; // Stelle sicher, dass du die Supabase-Verbindung korrekt importierst
    import { onMount } from 'svelte'; // Importiere onMount für das Initialisieren beim Laden der Seite

    let name = ''; // Variable für den Benutzernamen
    let users: { id: number, name: string }[] = []; // Liste der Benutzer
    let error: string | null = null; // Fehlerbehandlung
    let success: string | null = null; // Erfolgsmeldung

    // Funktion zum Einfügen eines Benutzers
    async function insertUser() {
        if (!name) {
            error = 'Bitte einen Namen eingeben';
            return;
        }

        const { data, error: err } = await supabase
            .from('users') // Tabelle "users"
            .insert([{ name }]); // Einfügen des Namens

        if (err) {
            error = err.message; // Fehler anzeigen
            success = null; // Erfolgsmeldung zurücksetzen
        } else {
            success = `Benutzer "${name}" wurde erfolgreich hinzugefügt.`; // Erfolgsmeldung anzeigen
            name = ''; // Eingabefeld zurücksetzen
            error = null; // Fehler zurücksetzen
            await fetchUsers(); // Nach dem Hinzufügen den Benutzer neu laden
        }
    }

    // Funktion zum Auslesen der Benutzer
    async function fetchUsers() {
        const { data, error: err } = await supabase
            .from('users') // Tabelle "users"
            .select('id, name'); // Die Spalten id und name auswählen

        if (err) {
            error = err.message; // Fehler anzeigen
        } else {
            users = data; // Benutzer in der Liste speichern
            error = null; // Fehler zurücksetzen
        }
    }

    // Lädt die Benutzer beim ersten Laden der Seite
    onMount(() => {
        fetchUsers();
    });
</script>

<!-- HTML-Teil -->
<div>
    <h1>Benutzer hinzufügen</h1>
    <input type="text" bind:value={name} placeholder="Benutzernamen eingeben" />
    <button on:click={insertUser}>Benutzer hinzufügen</button>

    <!-- Fehler und Erfolg anzeigen -->
    {#if error}
        <p style="color: red;">Fehler: {error}</p>
    {/if}

    {#if success}
        <p style="color: green;">{success}</p>
    {/if}

    <h2>Aktuelle Benutzer</h2>
    <!-- Anzeige der Benutzer -->
    {#if users.length > 0}
        <ul>
            {#each users as user}
                <li>ID: {user.id} - Name: {user.name}</li>
            {/each}
        </ul>
    {:else}
        <p>Keine Benutzer gefunden.</p>
    {/if}
</div>

<!-- Optionales Styling -->
<style>
    input {
        padding: 8px;
        margin-right: 8px;
        border: 1px solid #ccc;
        border-radius: 4px;
    }

    button {
        padding: 8px 16px;
        background-color: #4CAF50;
        color: white;
        border: none;
        border-radius: 4px;
        cursor: pointer;
    }

    button:hover {
        background-color: #45a049;
    }

    h1, h2 {
        margin-bottom: 10px;
    }

    p {
        margin-top: 10px;
    }
</style>
