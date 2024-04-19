<script lang="ts">
    export let data;
    const {athlete} = data;

    let itemsQuantity = 0;

    function incrementItemsQuantity(){
        itemsQuantity++;
    }
</script>

<h1>Update {athlete.fullName} profile.</h1>
<h2>Sections : </h2>

<form method="POST">

    <label for="sectionName">
        <span>Section name</span>
    </label>
    <input type="text" name="sectionName">

    {#each {length: itemsQuantity} as _, i}
        <label for="itemName">
            <span>Item name</span>
        </label>
        <input type="text" name="items[]">
    {/each}

    <button type="button" on:click={incrementItemsQuantity}>Add item</button>
    <button type="submit">save</button>
</form>

<style>

</style>