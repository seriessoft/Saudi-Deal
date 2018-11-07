var firebase = require('firebase');


var evaluatePromotion = function(userId){
  var player = Firebase.database().ref().child('users').child(userId);
  player.once('value').then(function(snap){
    var playerRank = snap.val().child('rank');
    var rankData = Firebase.database().ref().child('rank').child(rankData.myRank);
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
