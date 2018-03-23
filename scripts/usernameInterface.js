
function newUser() {

    var name = document.getElementById('username').value;
    var userLog = document.getElementById('listOfUsers');
    var logConfirmation = document.createTextNode(name);
    userLog.appendChild(logConfirmation);


};

document.getElementById('toRemove').addEventListener('onsubmit', function cleanUpForm () {
  var remove = document.getElementById('toRemove');
  remove.remove('toRemove')});
