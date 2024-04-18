<script lang="ts">
    export let data;
    const {athletes} = data;

</script>


<div class="athletes-section">
    {#each athletes as athlete }
    <a href="/athletes/{athlete.id}">
        <div class="athlete-card">


            
                <img src={athlete.imageUrl} alt="" class='avatar'>
                <strong>{athlete.fullName}</strong>
            
        </div>
    </a>
    {/each}

</div>


<style>
    .athletes-section{
        display: flex;
        flex-wrap: wrap;
        gap: 15px;
        align-items: center;
        justify-content: center;
    }

    .athlete-card{
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

    a{
    text-decoration: none;
    color: black;
    }

    .athlete-card:hover{
        background-color: rgb(245, 245, 245);
    }

    .avatar{
        width: 80%;
        border-radius: 50%;
    }
</style>
