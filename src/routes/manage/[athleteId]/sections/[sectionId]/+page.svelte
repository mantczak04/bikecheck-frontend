<script lang="ts">
    export let data;
    const {section} = data;


async function handleSubmit(event: Event, item: { id: string }) {
        event.preventDefault();

        const formData = new FormData(event.target as HTMLFormElement);
        const name = formData.get('name');
        const imageUrl = formData.get('imageUrl');
        const part = formData.get('part');

        const response = await fetch(`http://localhost:8080/api/v1/items/${item.id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ name, imageUrl, part })
        });

        const result = await response.json();
    }

</script>

<h1>Update '{section.name}' section. {section.id}</h1>
<div class="section">
{#each section.items as item}

    <div class="item-card">

        <form on:submit|preventDefault={event => handleSubmit(event, item)} class='item-form'>

            <label for="part">
                <span>Part</span>
            </label>
            <input type="text" name="part" value={item.part} required>

            <label for="name">
                <span>Name</span>
            </label>
            <input type="text" name="name" value={item.name} required>

            <label for="imageUrl">
                <span>Image</span>
            </label>
            <input type="text" name="imageUrl" value={item.imageUrl}>

            <button class="update" type="submit">UPDATE</button>
            
        </form>
        <button class="delete">DELETE</button>

    </div>


{/each}
</div>


<style>

    .item-form{
        display: flex;
        flex-direction: column;
    }

    .update{
        background-color: lightgreen;
        margin-top: 10px;
    }

    .delete{
        background-color: tomato;
        margin-top: 10px;
        width: 72%;
    }
    .section{
        margin-top: 20px;
        display: flex;
        gap: 10px;
    }

    .item-card{
        background-color: white;
        width: 244px;
        margin: 0px;
        display: flex;
        align-items: center;
        text-align: center;
        -webkit-box-shadow: 8px 8px 10px -10px rgba(66, 68, 90, 1);
        -moz-box-shadow: 8px 8px 10px -10px rgba(66, 68, 90, 1);
        box-shadow: 8px 8px 10px -10px rgba(66, 68, 90, 1);
        flex-direction: column;
    }

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
</style>