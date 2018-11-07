var firebase = require('firebase');


var evaluatePromotion = function(userId){
  var player = Firebase.database().ref().child('users').child(userId);
  player.once('value').then(function(snap){
    if (winStreak => winPromo){
      if(wallet => promoFees){
       //updateSubRank
       //updateRank
      }
    }
  };
};

var evaluateDemotion = function(userId){
  var player = Firebase.database().ref().child('users').child(userId);
  player.once('value').then(function(snap){
    if(rank => 1)
      if(lossStreak => lossDemo){
        //updateSubRank
        //updateRank
      }
    }
  };
};

module.exports = {
  evaluatePromotion : evaluatePromotion,
  evaluateDemotion : evaluateDemotion
};
