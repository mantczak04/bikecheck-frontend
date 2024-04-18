<script lang="ts">
    import type { FormEventHandler } from "svelte/elements";


    const countries: string[] = [
        'POLAND',
        'UNITED_STATES',
        'SWEDEN'
    ]

    let selected: string = '';
</script>

<h1>Create new Athlete</h1>

<form method="POST">
    <label for="fullName">
        <span>full name</span>
    </label>
    <input type="text" name="fullName">


    <label for="country">
        <span>Country</span>
    </label>
        <select bind:value={selected} name="country">
            {#each countries as country}
            <option value={country}>
                {country}
            </option>
            {/each}
        </select>

    <label for="birthDate">
        <span>Birth date</span>
    </label>
    <input type="date" name="birthDate">

    <label for="biography">
        <span>biography</span>
    </label>
    <input type="text" name="biography">

    <label for="imageUrl">
        <span>imageUrl</span>
    </label>
    <input type="text" name="imageUrl">

    <button type="submit">save</button>
</form>

<style>

</style>