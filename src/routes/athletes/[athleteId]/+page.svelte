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
<div class="section">
    <h1>{section.name}</h1>
        {#if data.athlete.sections}
            {#each section.items as item}
            <div class="item-card">
                <p>{item.name}</p>
            </div>
            {/each}
        {:else}
        <p>no items</p>
        {/if}
    </div>
        {/each}
        
{:else}
<p>no sections</p>
{/if}

<style>

    .section{
        margin-top: 20px;
        display: flex;
    }

    .item-card{
        background-color: white;
        width: 244px;
        height: 244px;
        margin: 0px;
        display: flex;
        justify-content: center;
        align-items: center;
        text-align: center;
        -webkit-box-shadow: 8px 8px 10px -10px rgba(66, 68, 90, 1);
        -moz-box-shadow: 8px 8px 10px -10px rgba(66, 68, 90, 1);
        box-shadow: 8px 8px 10px -10px rgba(66, 68, 90, 1);
        flex-direction: column;
    }

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