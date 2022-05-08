import {menProductData,displayData} from "../components/menProductNew.js";

let fatchedData=menProductData();

console.log(fatchedData);
let displayArea=document.querySelector("#displayProducts");
let clothingdata=fatchedData.filter((elem)=>{
    if(elem.type=="shirt" || elem.type=="T-shirt")
    return elem;
});
document.getElementById("titalCloths").innerText=clothingdata.length+" "+"Items ";
displayData(displayArea,clothingdata);


import footer from"../footer.js";
document.getElementById("footer").innerHTML=footer();