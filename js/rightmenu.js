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

CurrencyLoader();


