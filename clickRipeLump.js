export default () => {
    var age = Date.now() - Game.LumpT;
    var isLumpRipe = (age > Game.lumpRipeAge);
    if (isLumpRipe) {
        Game.clickLump();
        console.log("The sugerlump has been clicked.");
    }
    console.log("The sugerlump will be clicked when ripe.");
}