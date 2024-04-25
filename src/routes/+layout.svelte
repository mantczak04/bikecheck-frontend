<script lang="ts">
    //import app css
    import '../app.css';
    import logo from '$lib/icon.png';
</script>

<nav class="navbar">
    <div class="mid-navbar">
    <a href="/">
    <img src={logo} alt="" class='logo'>
    </a>

    <a href="/athletes">
        <strong>Athletes</strong>
    </a>

    <a href="/create">
        <strong>add</strong>
    </a>

    <a href="/manage">
        <strong>manage</strong>
    </a>

    </div>
</nav> 

<div class="main-container">
     
    <slot />
</div>


<style>



    .main-container{
        margin-top: 20px;
        margin-left: auto;
        margin-right: auto;
        width: 820px;
    }

    .mid-navbar{
        width: 800px;
        display: flex;
        align-items: center;
        padding: 0;
    }
    
    .navbar{
        background-color: white;
        border-radius: 0;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 0;
    }
    
    .logo{
        width: 54px;
    }

    a{
        text-decoration: none;
        color: black;
    }

</style>