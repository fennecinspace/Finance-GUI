/** defs **/
var leftMenuItems = document.querySelectorAll(".leftMenuItem")

function firstLoad () { //LOADS HOME THE FIRST TIME THE USER ENTERS THE SITE
    window.addEventListener("load",function (){
        $("#sitecontainer").load("pages/settings.html").hide()
        $("#sitecontainer").load("pages/wallet.html").hide()
        $("#sitecontainer").load("pages/news.html").hide()
        $("#sitecontainer").load("pages/portfolio.html").hide()
        $("#sitecontainer").load("pages/home.html")
    },false)
}

function LeftMenuResetter(n){ // resets all buttons when a button is clicked
    if (n !== 0) {
        leftMenuItems[0].classList.add("homeOff")
        leftMenuItems[0].classList.remove("homeOn")
    }
    if (n !== 1) {
        leftMenuItems[1].classList.add("profileOff")
        leftMenuItems[1].classList.remove("profileOn")
    }
    if (n !== 2) {
        leftMenuItems[2].classList.add("newsOff")
        leftMenuItems[2].classList.remove("newsOn")
    }
    if (n !== 3) {
        leftMenuItems[3].classList.add("walletOff")
        leftMenuItems[3].classList.remove("walletOn")
    }
    if (n !== 4) {
        leftMenuItems[4].classList.add("settingsOff")
        leftMenuItems[4].classList.remove("settingsOn")
    }
    if (n !== 5) {    
    leftMenuItems[5].classList.add("logoutOff")
    leftMenuItems[5].classList.remove("logoutOn")
    }
}

function HomeButton() {
    leftMenuItems[0].addEventListener('click',function (e){
        e.stopPropagation();
        leftMenuItems[0].classList.add("homeOn")
        $("#sitecontainer").load("pages/home.html").hide().fadeIn(400);
        LeftMenuResetter(0)
    })
}

function PortfolioButton() {
    leftMenuItems[1].addEventListener('click',function (e){
        e.stopPropagation();
        leftMenuItems[1].classList.add("profileOn")
        $("#sitecontainer").load("pages/portfolio.html").hide().fadeIn(400);
        LeftMenuResetter(1)
    })
}

function NewsButton() {
    leftMenuItems[2].addEventListener('click',function (e){
        e.stopPropagation();
        leftMenuItems[2].classList.add("newsOn")
        $("#sitecontainer").load("pages/news.html").hide().fadeIn(400);
        LeftMenuResetter(2)
    })
}

function WalletButton() {
    leftMenuItems[3].addEventListener('click',function (e){
        e.stopPropagation();
        leftMenuItems[3].classList.add("walletOn")
        $("#sitecontainer").load("pages/wallet.html").hide().fadeIn(400);
        LeftMenuResetter(3)
    })
}

function SettingButton() {
    leftMenuItems[4].addEventListener('click',function (e){
        e.stopPropagation();
        leftMenuItems[4].classList.add("settingsOn")
        $("#sitecontainer").load("pages/settings.html").hide().fadeIn(400);
        LeftMenuResetter(4)
    })
}

function LogoutButton() {
    leftMenuItems[5].addEventListener('click',function (e){
        e.stopPropagation();
        leftMenuItems[5].classList.add("logoutOn")
        LeftMenuResetter(5)
    })
}

function LeftMenuHandler (){
    HomeButton();
    PortfolioButton();
    NewsButton();
    WalletButton();
    SettingButton();
    LogoutButton();
}

/** function callings **/
firstLoad ()
LeftMenuHandler();
