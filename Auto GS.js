export default () => {
  setInterval(function () {
    var hasClickBuff = (Game.hasBuff('Dragonflight') || Game.hasBuff('Click frenzy'));
    var userBakeryName = 'musuka';
    if (hasClickBuff) {
      // GSをOFF→ON
      if (!Game.Upgrades['Golden switch [off]'].bought) {
        Game.bakeryNameSet('orteil');
        Game.Upgrades['Golden switch [off]'].buy();
        console.log("The golden switch had toggled to ON.")
        Game.bakeryNameSet(userBakeryName);
      }
    } else if (!hasClickBuff) {
      // GSをON→OFF
      if (!Game.Upgrades['Golden switch [on]'].bought) {
        Game.bakeryNameSet('orteil');
        Game.Upgrades['Golden switch [on]'].buy();
        console.log("The golden switch had toggled to OFF.")
        Game.bakeryNameSet(userBakeryName);
      }
    } else { }
  }, 1000);
  var message = "The golden switch will be toggled during click frenzies.";
  console.log(message);
}