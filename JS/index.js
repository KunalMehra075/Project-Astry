//? <!----------------------------------------------- < Preloader & Progressbar> ----------------------------------------------->

const filled = document.querySelector(".filled");
function update() {
  filled.style.width = `${
    (window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100
  }%`;
  requestAnimationFrame(update);
}
update();
var loader = document.querySelector("#preloader");
window.addEventListener("load", function () {
  loader.style.display = "none";
});

//? <!----------------------------------------------- < Buttons> ----------------------------------------------->

let explore = document.getElementById("letsexplore");
let graphicD = document.getElementById("graphic-design");
let sketching = document.getElementById("sketching");
let libearlA = document.getElementById("liberal-arts");

explore.addEventListener("click", () => {
  window.scrollTo(0, 780);
});
