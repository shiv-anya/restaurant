const burger = document.getElementsByClassName("burger");
const menu = document.getElementsByClassName("menu");
const times = document.getElementsByClassName("times");
// burger.style.color = "red";
burger[0].addEventListener("click", (e) => {
  menu[0].style.display = "block";
  times[0].style.display = "block";
  burger[0].style.display = "none";
});
times[0].addEventListener("click", (e) => {
  times[0].style.display = "none";
  burger[0].style.display = "block";
  menu[0].style.display = "none";
});
// console.log(burger[0].a);
console.log("hello");
