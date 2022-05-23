<aside>
    <h2>Hi!</h2>
    <p>Welcome to the hushtrade. Please sign in.</p>
    <form method="post">
        <label for="useremail">Email</label>
        <input type="text" id="useremail" name="useremail" placeholder="input your user email">
        <label for="password">Password</label>
        <input type="text" id="password" name="password" placeholder="input your password">
        <input type="submit" value="sign in">
    </form>
    <a href="/">forgot your password?</a>
    <hr>
    <a href="/">sign up</a>
</aside>

<style>
    aside{
        display: flex;
        flex-direction: column;
        background: lightgrey;
        border: dashed 1px black;
        height: fit-content;
        width: fit-content;
    }

    form{
        display: flex;
        flex-direction: column;
        align-items: start;
        justify-content: flex-end;
        padding: 1em;
        border-radius: 2px;
    }

    a{
        display: flex;
        height: 50px;
        font-size: 12px;
        color: rgba(0, 0, 0, 1);
        text-decoration: underline;
        margin: auto;
    }

    hr{
        height: 0px;
        width: 90%;
        background: black;
    }

    aside > a:nth-child(6){
        text-decoration: none;
        font-size: large;
        font-weight: bold;
    }

    /* @media and screen(max-width: 414px){

    } */
</style>