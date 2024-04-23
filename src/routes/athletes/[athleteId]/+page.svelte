<script lang="ts">
    export let data;

    let country: string = data.athlete.country;
    country = country.split('_').join(' ');

    console.log(data.athlete.imageUrl)
</script>


<div class="athlete-card">

    <div class="left-side">
        <img class='avatar' src={data.athlete.imageUrl} alt={data.athlete.fullName}>
    </div>

    <div class='right-side'>
        <h1 class='full-name'>{data.athlete.fullName}</h1>

        <div class="top-side">
            <p class='country'>Country : {country}</p>
            <p class='birthday'>Birthday : {data.athlete.birthDate}</p>
        </div>

        <div class="biography">
            <p>{data.athlete.biography}</p>
        </div>
    </div>

</div>

{#if data.athlete.sections[0] }
{#each data.athlete.sections as section}
<h1>{section.name}</h1>
<div class="section">
        {#if data.athlete.sections}
            {#each section.items as item}
            <div class="item-card">
                <strong>{item.part}</strong>
                
                <a href="{item.amazonUrl}" class="image-wrapper">
                    <img src="{item.imageUrl}" class='item-image'>
                </a>
                <p class="item-name">{item.name}</p>
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

    .image-wrapper{
        display: inline-block;
        overflow: hidden;
    }

    .item-image{
        height: 174px;
        width: 174px;
        transform: scale(1.2);
        object-fit: cover;
    }

    .item-image:hover{
        transform: scale(1.5);
        transition: transform .2s;
    }

    .item-name{
     padding-top: 0px;
     font-size: 18px;
    }

    .section{
        margin-top: 20px;
        display: flex;
        gap: 10px;
    }

    .item-card{
        background-color: white;
        width: 244px;
        height: 244px;
        margin: 0px;
        display: flex;
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