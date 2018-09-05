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
        li.innerText = messages[index].attributes.words
        messageList.appendChild(li);
        //console.log(messages[index].attributes.words);
    }
});

postMessageForm.addEventListener("submit",function(e){
    e.preventDefault();
    var value = postMessageForm.querySelector("input[name = content]").value;
    //console.log(value);

    var Message = AV.Object.extend('Message');
    var message = new Message();
    message.save({
    words: value
    }).then(function(object){
        console.log(object.attributes.words);
        let li  = document.createElement("li");
        li.innerText = object.attributes.words;
        messageList.appendChild(li);
        postMessageForm.querySelector("input[name = content]").value = "";
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