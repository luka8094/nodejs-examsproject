<script>
    //src="socket.io/socket.io.js"
    import io, { Socket } from "socket.io-client";
    //import {useLocation} from "svelte-navigator"

    //export let location;

    let mesg;

    //$: console.log($location)

    console.log(io);
    const socket = io();
    console.log(socket);

    //export const location
    let chatMessages = [];

    socket.on("showMessage", (data) =>{
    //io().on('show-text', ({data}) =>{
        console.log(data);
        chatMessages.push(data);
        chatMessages = chatMessages;
    });

    socket.on("showMessage", ({data}) =>{
    //io().on('show-text', ({data}) =>{
        console.log(data);
        chatMessages.push(data);
        chatMessages = chatMessages;
    });

    function sendMessage(event){
        //let message = document.getElementById("msg").value
        console.log(mesg.value, event);
        socket.emit("messageSent",{data: mesg.value});
        //io().emit('enter-text', {data: mesg.value})
    }
</script>

<!--
<div class="chat-history-display">

</div>
<form>
    <input type="text" id="chat-message">
    <input type="submit" id="send-message">
</form>
-->

<div>
    {#if chatMessages.length < 2}
        <p>There is only one message in the array</p>
    {:else}    
        {#each chatMessages as m}
        <p>{m}</p>
        {/each}
    {/if}
</div>
<input bind:this={mesg} type="text" id="msg" placeholder="type what you want to say here!">
<button type="submit" on:click="{sendMessage}">Send</button>

<style>
    div{
        display: flex;
        flex-direction: column;
        height: fit-content;
        min-height: 100px;
        background: lightgrey;
    } 
</style>