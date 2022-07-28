const burger = document.getElementsByClassName("burger");
const menu = document.getElementsByClassName("menu");
// burger.style.color = "red";
burger[0].addEventListener("click", (e) => {
  if (menu[0].style.display === "block") {
    menu[0].style.display = "none";
  } else {
    menu[0].style.display = "block";
  }
});
// console.log(burger[0].a);
console.log("hello");
