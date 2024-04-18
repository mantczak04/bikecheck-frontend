<script>
    export let data;

    console.log(data.athlete.imageUrl)
</script>


<div class="athlete-card">
    <img class='avatar' src={data.athlete.imageUrl} alt={data.athlete.fullName}>
    <div class='header'>
        <h1>{data.athlete.fullName}</h1>
        <h3>Birthday : {data.athlete.birthDate}</h3>
        <h3>Country : {data.athlete.country}</h3>
    </div>
    
    <div class="biography">
        <p>{data.athlete.biography}</p>
    </div>
    
    {#if data.athlete.sections[0] }
    {#each data.athlete.sections as section}
        <p>{section.name}</p>
            {#if data.athlete.sections[0].items}
                {#each section.items as item}
                <p>{item.name}</p>
                {/each}
            {:else}
            <p>no items</p>
            {/if}
            {/each}
    {:else}
    <p>no sections</p>
    {/if}

</div>

<style>

    .athlete-card{
        padding: 10px;
        background-color: white;
        height: 300px;
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
    }

    .header{
        grid-column: 2/4;
        display: flex;
    }
    
    .avatar{
        width: 300px;
        border-radius: 50%;
    }
</style>