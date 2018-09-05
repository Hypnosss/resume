var aTags = document.querySelectorAll("div.topNavBarInner  nav > ul > li > a")
for(var i = 0; i < aTags.length; i++){
    aTags[i].onclick = function(x){
        x.preventDefault();
        var href = x.currentTarget.getAttribute("href");
        var myTop = document.querySelector(href).offsetTop;
        window.scrollTo({
            top:myTop - 100,
            behavior: "smooth" 
        });
    }
}