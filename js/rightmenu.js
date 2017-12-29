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
                this.classList.add("activeElement")
                CurrencyResetter(i)
                e.stopPropagation();
            })
}

CurrencyLoader()

() => { // this will fix clicking the currencies not closing the nortification box
    $(".currency").on("click" , e => {
        e.stopPropagation()
        if (!$("#notifyBox")[0].classList.contains("hide")) {
            $("#notify")[0].classList.add("notifyOff")
            $("#notify")[0].classList.remove("notifyOn")
            $("#notifyBox")[0].classList.add("hide")
        }
    })
}() // function is defined and called 