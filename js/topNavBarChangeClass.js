function changeClass(){
    let y = window.scrollY;
    if(y != 0){
        topNavBar.classList.add("notOnTop");
    }
    else{
        topNavBar.classList.remove("notOnTop");
    }
}
 
changeClass();

window.addEventListener("scroll", function(){
    changeClass();
})