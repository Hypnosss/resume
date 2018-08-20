//切换作品集类型
works1.onclick = function(){
    works4.className = "worksBar status-1"
}

works2.onclick = function(){
    works4.className = "worksBar status-2"
}

works3.onclick = function(){
    works4.className = "worksBar status-3"
}

//改变topNavBar样式
window.onscroll = function(){
    var y = window.scrollY;
    if(y != 0){
        topNavBar.classList.add("notOnTop");
    }
    else{
        topNavBar.classList.remove("notOnTop");
    }
}
 
var liTags = document.getElementsByClassName("menuTriger");
for(var i = 0;i < liTags.length;i++){
    liTags[i].onmouseenter = function(x){
        var submenu = x.currentTarget.getElementsByTagName("ul")[0];
        submenu.classList.add("active");
    }
    liTags[i].onmouseleave = function(x){
        var submenu = x.currentTarget.getElementsByTagName("ul")[0];
        submenu.classList.remove("active");
    }
}


var aTags = document.querySelectorAll("div.topNavBarInner  nav > ul > li > a")
for(var i = 0;i < aTags.length;i++){
    aTags[i].onclick = function(x){
        x.preventDefault();
        var href = x.currentTarget.getAttribute("href");
        var myTop = document.querySelector(href).offsetTop;
        //console.log(top);
        window.scrollTo({
            top:myTop - 100,
            behavior: "smooth" 
        });
    }
}

window.onscroll = function(){
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
}