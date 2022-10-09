javascript: (function () {
  setInterval(function () {
    var hasClickBuff = (Game.hasBuff('Dragonflight') || Game.hasBuff('Click frenzy'));
    var userBakeryName = 'musuka';
    if (hasClickBuff) {
      if (!Game.Upgrades['Golden switch [off]'].bought) {
        Game.bakeryNameSet('orteil');
        Game.Upgrades['Golden switch [off]'].buy();
        Game.bakeryNameSet(userBakeryName);
      }
    } else if (!hasClickBuff) {
      if (!Game.Upgrades['Golden switch [on]'].bought) {
        Game.bakeryNameSet('orteil');
        Game.Upgrades['Golden switch [on]'].buy();
        Game.bakeryNameSet(userBakeryName);
      }
    } else { }
  }, 1000);
  var message = "The golden switch will be toggled during click frenzies.";
  console.log(message);
}());