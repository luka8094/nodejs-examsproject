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
</aside>

<style>
    aside{
        display: flex;
        flex-direction: column;
        background: lightgrey;
        border: dashed 1px black;
        height: fit-content;
    }

    form{
        display: flex;
        flex-direction: column;
        align-items: start;
        justify-content: flex-end;
        padding: 1em;
        border-radius: 2px;
    }

    /* @media and screen(max-width: 414px){

    } */
</style>