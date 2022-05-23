<script>
    import {Router, Route, Link, link} from "svelte-navigator"
    import Main from "../../pages/Main.svelte"
    import Market from "../../pages/Market.svelte"
    import Account from "../../pages/Account.svelte"
    import Chatroom from "../../pages/Chatroom.svelte"

    export let clickConfirmation = false

    function toggleConfirmation(){
        if(clickConfirmation) return clickConfirmation = false
        clickConfirmation = true
    }
</script>

<Router>
    <nav>
        <picture>
            <div class="hushtrade-logo">

            </div>
        </picture>
        <ul>
            <li>
                <a use:link href="/">home</a>
            </li>
            <li>
                <a use:link href="market">market</a>
            </li>
            <li>
                <a use:link href="account">account</a>
            </li>
            <li>
                <a use:link href="chatroom">chat</a>
            </li>
        </ul>
    </nav>
    <Route let:location let:navigate path="/"><Main/></Route>
    <Route let:location let:navigate path="market"><Market/></Route>
    <Route let:location let:navigate path="account"><Account/></Route>
    <Route let:location let:navigate path="chatroom"><Chatroom/></Route>
</Router>
<!--{#if clickConfirmation}
		<Userformdisplay/>
{/if}-->
<style>
    nav{
        display: flex;
        width: calc(100% - 10px);
        background: whitesmoke;
        border: dashed 1px black;
        align-items: center;
    }

    picture{
        display: flex;
        height: 50px;
        width: 50px;
        background: rgba(0,0,0,.5);
        justify-self: baseline;
        margin-left: 10px;
    }

    ul{
        display: flex;
        list-style: none;
        margin-left: auto;
    }

    a{
        margin: 0 10px;
    }
</style>