<script lang="ts">
    export let data;
    const {athletes} = data;

    async function deleteAthlete(id: number){
        try{
            const response = await fetch(`http://localhost:8080/api/v1/athlete/${id}`, {
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

<div class='athlete-list'>

    {#each athletes as athlete }
    
        <div class="athlete">
            <a href="/athletes/{athlete.id}">
                <strong>{athlete.fullName}</strong>
            </a>
            <div class="buttons">
                <button class="update">update</button>
                <button class="delete" on:click={() => deleteAthlete(athlete.id)}>delete</button>
            </div>
        </div>
    
    {/each}


</div>

<style>
    .athlete{
        background-color: white;
        padding: 12px;
        display: flex;
    }

    .athlete-list{
        display: flex;
        flex-direction: column;
        gap: 12px;
    }

    .buttons{
        justify-content: flex-end;
    }

    .update{
        background-color: lightgreen;
    }
    
    .delete{
        background-color: tomato;
    }

    button:hover{
        filter: brightness(85%);
        cursor: pointer;
    }
</style>