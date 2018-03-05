var leftMenuItems=document.querySelectorAll(".leftMenuItem")
function loadingHandler(){$(document).on({ajaxStart:function(){$("#sitecontainer").addClass("loading")},ajaxStop:function(){$("#sitecontainer").removeClass("loading")}})}
function firstLoad(){window.addEventListener("load",e=>{e.stopPropagation();$("#sitecontainer").load("pages/home.html")},!1)}
function LeftMenuResetter(n){if(n!==0){leftMenuItems[0].classList.add("homeOff")
leftMenuItems[0].classList.remove("homeOn")}
if(n!==1){leftMenuItems[1].classList.add("ratesOff")
leftMenuItems[1].classList.remove("ratesOn")}
if(n!==2){leftMenuItems[2].classList.add("newsOff")
leftMenuItems[2].classList.remove("newsOn")}
if(n!==3){leftMenuItems[3].classList.add("walletOff")
leftMenuItems[3].classList.remove("walletOn")}
if(n!==4){leftMenuItems[4].classList.add("settingsOff")
leftMenuItems[4].classList.remove("settingsOn")}
if(n!==5){leftMenuItems[5].classList.add("logoutOff")
leftMenuItems[5].classList.remove("logoutOn")}}
function HomeButton(){leftMenuItems[0].addEventListener('click',function(e){e.stopPropagation();leftMenuItems[0].classList.add("homeOn")
$("#sitecontainer").load("pages/home.html").hide().fadeIn(400);$("#rightmenu").removeClass("hide");LeftMenuResetter(0)})}
function RatesButton(){leftMenuItems[1].addEventListener('click',function(e){e.stopPropagation();leftMenuItems[1].classList.add("ratesOn")
$("#sitecontainer").load("pages/rates.html").hide().fadeIn(400);$("#rightmenu").addClass("hide");LeftMenuResetter(1)})}
function NewsButton(){leftMenuItems[2].addEventListener('click',function(e){e.stopPropagation();leftMenuItems[2].classList.add("newsOn")
$("#sitecontainer").load("pages/news.html").hide().fadeIn(400);$("#rightmenu").addClass("hide");LeftMenuResetter(2)})}
function WalletButton(){leftMenuItems[3].addEventListener('click',function(e){e.stopPropagation();leftMenuItems[3].classList.add("walletOn")
$("#sitecontainer").load("pages/wallet.html").hide().fadeIn(400);$("#rightmenu").addClass("hide");LeftMenuResetter(3)})}
function SettingButton(){leftMenuItems[4].addEventListener('click',function(e){e.stopPropagation();leftMenuItems[4].classList.add("settingsOn")
$("#sitecontainer").load("pages/settings.html").hide().fadeIn(400);$("#rightmenu").addClass("hide");LeftMenuResetter(4)})}
function LogoutButton(){leftMenuItems[5].addEventListener('click',function(e){e.stopPropagation();leftMenuItems[5].classList.add("logoutOn")
LeftMenuResetter(5)})}
function LeftMenuHandler(){HomeButton();RatesButton();NewsButton();WalletButton();SettingButton();LogoutButton()}
firstLoad();LeftMenuHandler();loadingHandler()