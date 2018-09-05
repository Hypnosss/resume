var APP_ID = 'YoFYXsL0YpyNoqbAakgKn2YO-gzGzoHsz';
var APP_KEY = '58ryMz0SYeXQrV9Ga8SNVBfm';

AV.init({
    appId: APP_ID,
    appKey: APP_KEY
});

var query = new AV.Query("Message");
query.find().then(function(messages) {
    for(index in messages){
        let li  = document.createElement("li");
        li.innerText = messages[index].attributes.name + ":" + messages[index].attributes.words
        //console.log(li.innerText);
        messageList.appendChild(li);
        //console.log(messages[index].attributes.words);
    }
});

postMessageForm.addEventListener("submit",function(e){
    e.preventDefault();
    var content = postMessageForm.querySelector("input[name = content]").value;
    var name = postMessageForm.querySelector("input[name = userName]").value;
    //console.log(value);

    var Message = AV.Object.extend('Message');
    var message = new Message();
    message.save({
        name: name,
        words: content
    }).then(function(object){
        console.log(object.attributes.words);
        let li  = document.createElement("li");
        li.innerText = object.attributes.name + ":" + object.attributes.words;
        messageList.appendChild(li);
        postMessageForm.querySelector("input[name = content]").value = "";
        postMessageForm.querySelector("input[name = userName]").value = "";
    })

    
});

/*
var TestObject = AV.Object.extend('TestObject');
var testObject = new TestObject();
testObject.save({
  words: 'Hello World!'
}).then(function(object) {
  alert('LeanCloud Rocks!');
})
*/