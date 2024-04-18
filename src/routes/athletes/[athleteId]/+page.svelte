<script>
    export let data;

    console.log(data.athlete.imageUrl)
</script>


<div class="athlete-card">

    <div class="left-side">
        <img class='avatar' src={data.athlete.imageUrl} alt={data.athlete.fullName}>
    </div>

    <div class='right-side'>
        <h1 class='full-name'>{data.athlete.fullName}</h1>

        <div class="top-side">
            <p class='country'>Country : {data.athlete.country}</p>
            <p class='birthday'>Birthday : {data.athlete.birthDate}</p>
        </div>

        <div class="biography">
            <p>{data.athlete.biography}</p>
        </div>
    </div>

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

<style>

    .athlete-card{
        background-color: white;
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        height: 300px;
    }

    .top-side{
        display: grid;
        grid-template-columns: 1fr 1fr;
    }

    .left-side{
        grid-column: 1;
    }

    .biography{
        margin-top: 2px;
        grid-row: 3/6;
    }

    .right-side{
        grid-column: 2/4;
        display: grid;
        grid-template-rows: repeat(5, 60px);
    }

    .avatar{
        width: 290px;
        border-radius: 50%;
    }
</style>