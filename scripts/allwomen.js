import navbar from "../components/navbar.js";
// import { navbarMedium } from "../components/mdeiumNavbar.js";
let navbar1=document.getElementById("navbar");
navbar1.innerHTML=navbar;
// let navbar2=document.getElementById("navbar2");


    // window.location.reload();
//     if(window.innerWidth>990){
        
      
//         navbar2.innerHTML=null;
//         navbar2.style.padding="none";
//         console.log("navbar2 is null");
     
        
//          navbar1.innerHTML=navbar;
       
//         //  window.stop();
        
//     }
//     else if(window.innerWidth<=990){
//         // window.location.reload();
       
//         navbar1.innerHTML=null;
//         navbar1.style.padding="none";
//         console.log("navbar is null");
       
        
//         navbar2.innerHTML=navbarMedium(); 
//         // window.stop();
//     }
//     // 


// function reloadPage() {
//     var currentDocumentTimestamp = new Date(performance.timing.domLoading).getTime();
//     // Current Time //
//     var now = Date.now();
//     // Total Process Lenght as Minutes //
//     var tenSec = 10 * 100;
//     // End Time of Process //
//     var plusTenSec = currentDocumentTimestamp + tenSec;
//     if (now > plusTenSec) {
//         location.reload();
//     }
// }
// document.getElementById("navbar").innerHTML=navbar;
// document.getElementById("navbar2").innerHTML=navbarMedium(); 