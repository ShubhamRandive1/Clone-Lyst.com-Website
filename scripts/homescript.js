import navbar from "../homepage/components/navbar.js"

document.getElementById("navbar").innerHTML = navbar();






var slide = document.getElementById("slider");
var btn1 = document.getElementById('btn1');
var btn2 = document.getElementById('btn2');
var btn3 = document.getElementById('btn3');
var btn4 = document.getElementById('btn4');

btn1.onclick = function () {
    slide.style.transform = "translateX(0px)";
    btn1.classList.add('active');
    btn2.classList.remove('active');
    btn3.classList.remove('active');
    btn4.classList.remive('active');
};
btn2.onclick = function () {
    slide.style.transform = "translateX(-100%)";
    btn1.classList.remove('active');
    btn2.classList.add('active');
    btn3.classList.remove('active');
    btn4.classList.remove('active');
};
btn3.onclick = function () {
    slide.style.transform = "translateX(-200%)";
    btn1.classList.remove('active');
    btn2.classList.remove('active');
    btn3.classList.add('active');
    btn4.classList.remove('active');
};
btn4.onclick = function () {
    slide.style.transform = "translateX(-300%)";
    btn1.classList.remove('active');
    btn2.classList.remove('active');
    btn3.classList.remove('active');
    btn4.classList.add('active');
};

// next

var slide1 = document.getElementById("slider1");
console.log(slide1);
var btn11 = document.getElementById('btn11');
console.log(btn11);
var btn22 = document.getElementById('btn22');
var btn33 = document.getElementById('btn33');
var btn44 = document.getElementById('btn44');

btn11.onclick = function () {
    slide1.style.transform = "translateX(0px)";
    btn11.classList.add('active');
    btn22.classList.remove('active');
    btn33.classList.remove('active');
    btn44.classList.remive('active');
};
btn22.onclick = function () {
    slide1.style.transform = "translateX(-100%)";
    btn11.classList.remove('active');
    btn22.classList.add('active');
    btn33.classList.remove('active');
    btn44.classList.remove('active');
};
btn33.onclick = function () {
    slide1.style.transform = "translateX(-200%)";
    btn11.classList.remove('active');
    btn22.classList.remove('active');
    btn33.classList.add('active');
    btn44.classList.remove('active');
};
btn44.onclick = function () {
    slide1.style.transform = "translateX(-300%)";
    btn11.classList.remove('active');
    btn22.classList.remove('active');
    btn33.classList.remove('active');
    btn44.classList.add('active');
};

// break


var slide2 = document.getElementById("slider2");
console.log(slide2);
var btn111 = document.getElementById('btn111');
console.log(btn11);
var btn222 = document.getElementById('btn222');
var btn333 = document.getElementById('btn333');
var btn444 = document.getElementById('btn444');

btn111.onclick = function () {
    slide2.style.transform = "translateX(0px)";
    btn111.classList.add('active');
    btn222.classList.remove('active');
    btn333.classList.remove('active');
    btn444.classList.remive('active');
};
btn222.onclick = function () {
    slide2.style.transform = "translateX(-100%)";
    btn111.classList.remove('active');
    btn222.classList.add('active');
    btn333.classList.remove('active');
    btn444.classList.remove('active');
};
btn333.onclick = function () {
    slide2.style.transform = "translateX(-200%)";
    btn111.classList.remove('active');
    btn222.classList.remove('active');
    btn333.classList.add('active');
    btn444.classList.remove('active');
};
btn444.onclick = function () {
    slide2.style.transform = "translateX(-300%)";
    btn111.classList.remove('active');
    btn222.classList.remove('active');
    btn333.classList.remove('active');
    btn444.classList.add('active');
};

// break1


var slide22 = document.getElementById("slider22");
console.log(slide22);
var btn1111 = document.getElementById('btn1111');
console.log(btn1111);
var btn2222 = document.getElementById('btn2222');
var btn3333 = document.getElementById('btn3333');
var btn4444 = document.getElementById('btn4444');

btn1111.onclick = function () {
    slide22.style.transform = "translateX(0px)";
    btn1111.classList.add('active');
    btn2222.classList.remove('active');
    btn3333.classList.remove('active');
    btn4444.classList.remive('active');
};
btn2222.onclick = function () {
    slide22.style.transform = "translateX(-100%)";
    btn1111.classList.remove('active');
    btn2222.classList.add('active');
    btn3333.classList.remove('active');
    btn4444.classList.remove('active');
};
btn3333.onclick = function () {
    slide22.style.transform = "translateX(-200%)";
    btn1111.classList.remove('active');
    btn2222.classList.remove('active');
    btn3333.classList.add('active');
    btn4444.classList.remove('active');
};
btn4444.onclick = function () {
    slide22.style.transform = "translateX(-300%)";
    btn1111.classList.remove('active');
    btn2222.classList.remove('active');
    btn3333.classList.remove('active');
    btn4444.classList.add('active');
};

// break2


var slide3 = document.getElementById("slider3");
console.log(slide3);
var btn11111 = document.getElementById('btn11111');
console.log(btn11111);
var btn22222 = document.getElementById('btn22222');
var btn33333 = document.getElementById('btn33333');
var btn44444 = document.getElementById('btn44444');

btn11111.onclick = function () {
    slide3.style.transform = "translateX(0px)";
    btn11111.classList.add('active');
    btn22222.classList.remove('active');
    btn33333.classList.remove('active');
    btn44444.classList.remive('active');
};
btn22222.onclick = function () {
    slide3.style.transform = "translateX(-100%)";
    btn11111.classList.remove('active');
    btn22222.classList.add('active');
    btn33333.classList.remove('active');
    btn44444.classList.remove('active');
};
btn33333.onclick = function () {
    slide3.style.transform = "translateX(-200%)";
    btn11111.classList.remove('active');
    btn22222.classList.remove('active');
    btn33333.classList.add('active');
    btn44444.classList.remove('active');
};
btn44444.onclick = function () {
    slide3.style.transform = "translateX(-300%)";
    btn11111.classList.remove('active');
    btn22222.classList.remove('active');
    btn33333.classList.remove('active');
    btn44444.classList.add('active');
};
