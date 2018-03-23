var name;
function submitMessage() {

  //  var message;
   var message = document.getElementById("message").value;
   name = document.getElementById('username').value;
   ChatApp.newMessage(name,message)
   // console.log(message);

   //alert(`${hello2345}`);
}

function newUser() {

 name = document.getElementById('username').value;
 // console.log(name);
 ChatApp.createOrUpdateUser(name,1);

}

// document.getElementById("chatbox").addMessageListener();

ChatApp.addMessageListener(handleMessage)

function handleMessage(changeType, messageId, messageData) {
  console.log(changeType, messageId, messageData);
  document.getElementById("chatbox").innerHTML= messageData.text;
}
