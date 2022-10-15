export default () => {
    setInterval(function () {
        for (var i in Game.shimmers) {
            Game.shimmers[i].pop();
            console.log("The golden cookie has been clicked.")
        }
    }, 500);
    var message = "The golden cookie will be clicked when appeared.";
    console.log(message)
}