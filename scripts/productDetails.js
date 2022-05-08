proDetails=JSON.parse(localStorage.getItem("productDetails"));


let image=document.createElement("img");
image.src=proDetails.image;
document.getElementById("imageDiv").append(image);
document.querySelector(".newPrice").innerText="$"+proDetails.price;
let strikedPrice=document.querySelector(".actualPrice");
strikedPrice.innerText="$"+proDetails.strickedoff;

let cartData=JSON.parse(localStorage.getItem("Cart"))||[];
function addtoCart(){
    cartData.push(proDetails);
    localStorage.setItem("Cart", JSON.stringify(cartData));
    alert("Product added");
}
// strikedPrice.style.textDecoration=""

