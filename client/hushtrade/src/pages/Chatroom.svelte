<script>
    import io from "socket.io-client"

    const socket = io()

    socket.on("enterText", ({data, username}) =>{

    })

    function emitText(event){
        socket.emit("enterText", ({data: event.target.value}))
    }
</script>

<div class="chatbox">
</div>

<form name="chatmessage" action="">
    <input name="messagetextbox" type="text" id="messagetextbox">
    <button name="submittext" type="submit" id="submittext" value="enter" on:click|preventDefault={emitText}></button>
</form>

<style>
    
</style>