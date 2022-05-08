import navbar from "../components/navbar.js";
document.getElementById("navbar").innerHTML=navbar;

let womenlink=document.getElementById("women");
womenlink.style.color="black";
womenlink.style.textDecoration="underline";

import{clothing,shoes,access,bags,jewelry,brands} from "../components/womenNavbar.js"
let bodyLeftContent=document.getElementById("menus");
bodyLeftContent.innerHTML=clothing();
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

document.getElementById("allWomen").addEventListener("click", allWomensPage);
function allWomensPage(){
    window.location.href="allWomen.html";
}
document.getElementById("sales").addEventListener("click", salesList);
function salesList(){
    window.location.href="menSales.html";
}
// footer------------------------------------------->

import {womenProductData,displayData} from "../components/womenProducts.js";

let fatchedData=womenProductData();

let displayArea=document.querySelector("#bodyRight");
// let clothingdata=fatchedData.filter((elem)=>{
//     if(elem.categories=="Bags")
//     return elem;
// });
// document.getElementById("titalCloths").innerText=fatchedData.length+" "+"Items ";
displayData(displayArea,fatchedData);
import footer from"../footer.js"
document.getElementById("footer").innerHTML=footer();