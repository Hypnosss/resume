var APP_ID = 'YoFYXsL0YpyNoqbAakgKn2YO-gzGzoHsz';
var APP_KEY = '58ryMz0SYeXQrV9Ga8SNVBfm';

AV.init({
    appId: APP_ID,
    appKey: APP_KEY
});

var query = new AV.Query("Message");
query.find().then(function(messages) {
    for(let index in messages){
        let li  = document.createElement("li");
        li.innerText = messages[index].attributes.name + ":" + messages[index].attributes.words
        messageList.appendChild(li);
    }
});

postMessageForm.addEventListener("submit",function(e){
    e.preventDefault();
    var content = postMessageForm.querySelector("input[name = content]").value;
    var name = postMessageForm.querySelector("input[name = userName]").value;
    nameWarning.classList.remove("active");
    contentWarning.classList.remove("active");
    if(name === "" || name.replace(/ /g, "") === ""){
        nameWarning.classList.add("active");
        return;
    }else{
        if(content === "" || name.replace(/ /g, "") === ""){
            contentWarning.classList.add("active");
            return;
        }
    }
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

