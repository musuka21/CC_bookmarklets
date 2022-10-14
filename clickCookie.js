export default () => {
    var val = prompt('クリック間隔(ミリ秒、1000で1秒)を入力してください。', 1000);
    if (val == null) {
        clearInterval(timerC);
        return;
    }
    val -= 0;
    timerC = setInterval(function () {
        Game.ClickCookie();
        Game.lastClick = 0;
    }, val);
    var message = "";
    console.log(message);
}