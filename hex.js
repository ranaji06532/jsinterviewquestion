function f(){
    console.log( '#'+Math.random().toString(16).substring(2,8))
}
setInterval(f, 1000);
