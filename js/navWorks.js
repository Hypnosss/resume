var liTags = document.getElementsByClassName("menuTrigger");
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