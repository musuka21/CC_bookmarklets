export default () => {
    setInterval(function () {
        var age = Date.now() - Game.lumpT;
        var isLumpRipe = (age > Game.lumpRipeAge);
        if (isLumpRipe) {
            Game.clickLump();
            console.log("The sugerlump has been clicked.");
        }
    }, 1000);
    console.log("The sugerlump will be clicked when ripe.");
}