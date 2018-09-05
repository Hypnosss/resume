window.addEventListener("scroll", function(){
    var specialTags = document.querySelectorAll("[data-x]");
    var minIndex = 0;
    for(var i = 1;i < specialTags.length;i++){
        if(Math.abs(specialTags[i].offsetTop - window.scrollY) < Math.abs(specialTags[minIndex].offsetTop - window.scrollY)){
            minIndex = i;
        }  
    }
    var a = document.querySelector("a[href='#" + specialTags[minIndex].id +"']");
    var lis = a.parentNode.parentNode.childNodes;
    for(var i = 0;i < lis.length;i++){
        if(lis[i].nodeName == "LI")
            lis[i].childNodes[1].classList.remove("active");
            //console.log(lis[i].childNodes[1]);
    }
    a.classList.add("active");
})