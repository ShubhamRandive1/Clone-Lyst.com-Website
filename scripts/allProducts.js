import {womenProductData,displayData} from "../components/womenProducts.js";

let fatchedData=womenProductData();

let displayArea=document.querySelector("#displayProducts");
// let clothingdata=fatchedData.filter((elem)=>{
//     if(elem.type=="Dress")
//     return elem;
// });
document.getElementById("titalCloths").innerText=clothingdata.length+" "+"Items ";
displayData(displayArea,fatchedData);


import footer from"../footer.js"
document.getElementById("footer").innerHTML=footer();