var currencies = document.querySelectorAll(".currency")

function CurrencyResetter(n){ // resets all buttons when a button is clicked
    for (let i = 0; i < currencies.length; i++)
        if (i !== n){
            currencies[i].classList.remove("activeElement")
        }
}

function CurrencyLoader(){
    for (let i = 0; i < currencies.length; i++)
            currencies[i].addEventListener('click', function(e){
                let newCharts = 
                    $.get("../pages/home.html").then( page => {
                        $("#homeContent").html($(page).find("#homeContent").html())
                    })
                $("#homeContent").load("newCharts")
                this.classList.add("activeElement")
                if (!$("#notifyBox")[0].classList.contains("hide")) {
                    $("#notify")[0].classList.add("notifyOff")
                    $("#notify")[0].classList.remove("notifyOn")
                    $("#notifyBox")[0].classList.add("hide")
                }
                CurrencyResetter(i)
                e.stopPropagation();
            })
}

CurrencyLoader()