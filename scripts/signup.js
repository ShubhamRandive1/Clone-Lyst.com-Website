let f=document.getElementById("form").addEventListener("submit",myfunc)

let arr=JSON.parse(localStorage.getItem("signUp"))||[];
console.log(arr)


function myfunc(){
    event.preventDefault();

  let Email=document.getElementById("name").value;
let pass=document.getElementById("password").value;

let obj={
  Email,
  pass,
}
 if(Email!=""&& pass!=""){

arr.push(obj);


localStorage.setItem("signUp",JSON.stringify(arr))

}
else {
    let p=document.createElement("p");
   p.innerText="input Credential"
   p.style.color="red";
   document.getElementById("ss").append(p)
}
}