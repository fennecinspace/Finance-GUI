// function defs
function NotificationHandler(){
    var button = document.getElementById("notify")
    var notifyArea = document.getElementById("notifyBox")

    button.addEventListener('click',function (e){
        e.stopPropagation();
        console.log(notifyArea.classList.contains("hide"))
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

    $("* :not(#notify,#notifyBox)").on("click" , e => { // this will make the notification box close when clicking elsewhere
        e.stopPropagation()
        if (!notifyArea.classList.contains("hide")) {
            button.classList.add("notifyOff")
            button.classList.remove("notifyOn")
            notifyArea.classList.add("hide")
        }
    })
}

// function callings
NotificationHandler()
