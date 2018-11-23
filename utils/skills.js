var firebase = requires('firebase');

var activateSkillForUser() = function(uid,skill){
    var userRef = firebase.database().ref().child('users').child(uid).once('val').then(
    
    
    );
};

var useSkill() = function(uid,skill){
    var userRef = firebase.database().ref().child('users').child(uid).once('val').then(
    
    
    );
};
