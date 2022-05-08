fetch("products.json")
.then(function(response){
   return response.json();
})
.then(function(data){
   localStorage.setItem("products", JSON.stringify(data));
   if(!localStorage.getItem("Cart")){
      localStorage.setItem("Cart", "[]");
   }
});

// SETTING GLOBAL VARIABLES SO WE CAN ACCESS THEM FROM INSIDE THE FUNCTIONS.
let products = JSON.parse(localStorage.getItem("products"));
let cart = JSON.parse(localStorage.getItem("Cart"));

function addItemToCart(productId){
    let product = products.find(function(item){
       return item.id == productId;
    });
  
    if(cart.length == 0){
       cart.push(product);
    }else{
       let res = cart.find(element => element.id == productId);
       if(res === undefined){
          cart.push(product);
       }
    }
    localStorage.setItem("Cart", JSON.stringify(cart));
 }
//  addItemToCart(1); // adding the product with id=1 to the cart.
 