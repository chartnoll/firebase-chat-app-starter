
function submitMessage() {

  //  var message;
   var message = document.getElementById("message").value;
   var name = document.getElementById('username').value;
   ChatApp.newMessage(name,message)
   // console.log(message);

   //alert(`${hello2345}`);
}

function newUser() {
 name = document.getElementById('username').value;
 // console.log(name);
 ChatApp.createOrUpdateUser(name,1);
 //console.log(name);
}

// document.getElementById("chatbox").addMessageListener();

ChatApp.addMessageListener(handleMessage)

function handleMessage(changeType, messageId, messageData) {
  document.getElementById("chatbox").innerText+= `${messageData.userName} @ ${getTime()} : ${messageData.text}\n`;
  //var newContent = document.createTextNode(messageData.text+","+messageData.userName) ;
  console.log(changeType, messageId, messageData);
  //newDiv.appendChild(newContent);
  //document.getElementById("chatbox").innerHTML= messageData.text+","+messageData.userName;
}

var newData = new Map();
var set1 = new Set();

function experiment() {
  console.log("Starting new function");
  console.log(newData);
  console.log(set1);
  set1.add(20);
  console.log(set1);
  newData.set("k3", "10");
  console.log(newData);
  console.log("Hello!");
}

experiment();

// create a new div element

function getTime() {
    var date = new Date();
    var timeInSecs = date.getSeconds();
    if(timeInSecs < 10) {timeInSecs = `0${timeInSecs}`};
    var timeInMinutes = date.getMinutes();
    var timeInHours = date.getHours();
    var time = `${timeInHours}:${timeInMinutes}:${timeInSecs}`;
    return time;
}

console.log(getTime());
