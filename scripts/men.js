import navbar from "../components/navbar.js";
document.getElementById("navbar").innerHTML=navbar;

let menlink=document.getElementById("men");
menlink.style.color="black";
menlink.style.textDecoration="underline";
let womenlink=document.getElementById("women");
womenlink.style.color="#626262";
womenlink.style.textDecoration="none";


import{clothing,shoes,access,bags,jewelry,brands} from "../components/mensNavbar.js"
let bodyLeftContent=document.getElementById("bodyLeft");

document.getElementById("clothing").addEventListener("click", clothingList);
function clothingList(){
    bodyLeftContent.innerHTML=null;
    bodyLeftContent.innerHTML=clothing();
}

document.getElementById("shoes").addEventListener("click", shoesList);
function shoesList(){
    bodyLeftContent.innerHTML=null;
    bodyLeftContent.innerHTML=shoes();
}

document.getElementById("access").addEventListener("click", accessList);
function accessList(){
    bodyLeftContent.innerHTML=null;
    bodyLeftContent.innerHTML=access();
}

document.getElementById("bags").addEventListener("click", bagsList);
function bagsList(){
    bodyLeftContent.innerHTML=null;
    bodyLeftContent.innerHTML=bags();
}

document.getElementById("jewelry").addEventListener("click", jewelryList);
function jewelryList(){
    bodyLeftContent.innerHTML=null;
    bodyLeftContent.innerHTML=jewelry();
}

document.getElementById("brands").addEventListener("click", brandsList);
function brandsList(){
    bodyLeftContent.innerHTML=null;
    bodyLeftContent.innerHTML=brands();
}

document.getElementById("allWomen").addEventListener("click", allWomensList);
function allWomensList(){
    window.location.href="allMen.html";
}
document.getElementById("sales").addEventListener("click", salesList);
function salesList(){
    window.location.href="womenSales.html";
}