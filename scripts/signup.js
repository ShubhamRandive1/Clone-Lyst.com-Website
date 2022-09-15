let f = document.getElementById("form").addEventListener("submit", myfunc)

let arr = JSON.parse(localStorage.getItem("signUp")) || [];
console.log(arr)


function myfunc() {
  event.preventDefault();

  let Email = document.getElementById("name").value;
  let pass = document.getElementById("password").value;
  if(Email==""){
    alert("Enter email");
  }
  else if(pass==""){
    alert("Enter password");
  }
  else{
    let obj = {
      Email,
      pass,
    }
    if (Email != "" && pass != "") {

      arr.push(obj);


      localStorage.setItem("signUp", JSON.stringify(arr))
      alert("Account Created Successfully");
      window.location.href = "login.html"
    } else {
      let p = document.createElement("p");
      p.innerText = "input Credential"
      p.style.color = "red";
      document.getElementById("ss").append(p)
    }
  }
}
