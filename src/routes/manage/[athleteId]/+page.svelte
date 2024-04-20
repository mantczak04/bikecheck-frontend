<script lang="ts">
    export let data;
    const {athlete} = data;

    let itemsQuantity = 0;


    function incrementItemsQuantity(){
        itemsQuantity++;
    }

    async function deleteSection(id: number){
        try{
            const response = await fetch(`http://localhost:8080/api/v1/sections/${id}`, {
                method: 'DELETE',
            });
            
            if(!response.ok) {
                throw new Error('Response not ok');
            }
        } catch (error) {
            console.error('Error', error);
        }
    }
</script>

<h1>Update {athlete.fullName} profile.</h1>
<h2>Sections : </h2>

<div class="sections-container">
    {#each athlete.sections as section}
        <div class="section-card">
            <h3>{section.name}</h3>
            <button class='update-button'>Update</button>
            <button class='delete-button' on:click={() => deleteSection(section.id)}>Delete</button>
        </div>
    {/each}
</div>



<form method="POST">

    <label for="sectionName">
        <span>Section name</span>
    </label>
    <input type="text" name="sectionName">

    <div class="add-items">
    {#each {length: itemsQuantity} as _, i}
    <div class="item-label">
        <label for="itemName">
            <span>Item {i+1} name</span>
        </label>
        <input type="text" name="items[]">

        <label for="part">
            <span>Part name (e.g frame)</span>
        </label>
        <input type="text" name="parts[]">

        <label for="imageUrl">
            <span>Image URL</span>
        </label>
        <input type="text" name="images[]">
    </div>
    {/each}
</div>

    <button type="button" on:click={incrementItemsQuantity}>Add item</button>
    <button type="submit">save</button>
</form>

<style>
    .delete-button{
        background-color: tomato;
    }

    .update-button{
        background-color: lightgreen;
    }

    .section-card{
        background-color: white;
    }

    .sections-container{
        display: flex;
        flex-wrap: wrap;
        gap: 8px;
    }

    .add-items{
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        column-gap: 10px;
        row-gap: 20px;
    }

    input, label{
        display: block;
    }

</style>