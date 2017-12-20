// function defs
function notificationHandler(){
    var button = document.getElementById("notify")
    var notifyArea = document.getElementById("notifyBox")

    button.addEventListener('click',function (e){
        e.stopPropagation();
        if(notifyArea.classList.contains("hide")) {
            button.classList.add("notifyOn")
            button.classList.remove("notifyOff")
            notifyArea.classList.remove("hide")
        }
        else {
            button.classList.add("notifyOff")
            button.classList.remove("notifyOn")
            notifyArea.classList.add("hide")
        }
    })
}


// function callings
notificationHandler()
