
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


}

// document.getElementById("chatbox").addMessageListener();

ChatApp.addMessageListener(handleMessage)

function handleMessage(changeType, messageId, messageData) {
  //var newDiv = document.createElement("div");
  //newDiv.innerHTML=messageData.text+","+messageData.userName;
  document.getElementById("chatbox").innerText+= `${messageData.userName} , ${messageData.text}\n`;
  //var newContent = document.createTextNode(messageData.text+","+messageData.userName) ;
  console.log(changeType, messageId, messageData);
  //newDiv.appendChild(newContent);
  //document.getElementById("chatbox").innerHTML= messageData.text+","+messageData.userName;
}

// create a new div element
