import {womenProductData,displayData} from "../components/womenProducts.js";
let fatchedData=womenProductData();

let displayArea=document.querySelector("#displayProducts");
let clothingdata=fatchedData.filter((elem)=>{
    if(elem.categories=="Cloths")
    return elem;
});
document.getElementById("titalCloths").innerText=clothingdata.length+" "+"Items ";
displayData(displayArea,clothingdata);


import footer from"../footer.js"
document.getElementById("footer").innerHTML=footer();

// Sorting  starts************************
//   let selected = document.getElementById("sort");
//   selected.addEventListener("change",sortfun);
//   function sortfun() {
//      let  select = selected.value;
 
//     if (select === "default") {
//       console.log("default");
//       window.location.reload();
//     }
 
    
//     if (select === "a_z") {
//         clothingdata.sort(function (a, b) {
//         if (a.name > b.name) return 1;
//         if (a.name < b.name) return -1;
//         return 0;
//       });
//       // console.log("Hello A-Z")
//       displayData(displayArea,clothingdata);
//     }
 
//     if (select === "lth") {
//         clothingdata.sort(function (a, b) {
//         return a.price - b.price;
//       });
//       // console.log("Hello Low to High")
//       displayData(displayArea,clothingdata)
//     }
 
//     if (select === "htl") {
//         clothingdata.sort(function (a, b) {
//         return b.price - a.price;
//       });
//       // console.log("Hello High to Low")
//       displayData(displayArea,clothingdata)
//     }
 
   
//   };