const modal = document.getElementsByClassName("black-bg")[0];
const body = document.body;
function openCartModal() {
  modal.style.display = "block";

  document.getElementsByClassName("cart-modal")[0].style.display = "block";
  body.style.height = "100vh";
  body.style.overflowY = "hidden";
  modal.style.overflowY = "scroll";
}

function openDishModal() {
  modal.style.display = "block";
  document.documentElement.scrollTop = 0;
  document.getElementsByClassName("dish-modal")[0].style.display = "block";
  body.style.height = "100vh";
  body.style.overflowY = "hidden";
  modal.style.overflowY = "scroll";
}

function closeDishModal() {
  modal.style.display = "none";
  body.style.height = "100vh";
  body.style.overflowY = "unset";
  modal.style.overflowY = "unset";
}
function closeCartModal() {
  modal.style.display = "none";
  body.style.height = "100vh";
  body.style.overflowY = "unset";
  modal.style.overflowY = "unset";
}

const vid = document.querySelector(".sample-video");

function playPauseVideo() {
  if (!vid.paused) {
    vid.pause();
    document.querySelector(".play-pause-effect").style.display = "block";
  } else {
    vid.play();
    document.querySelector(".play-pause-effect").style.display = "none";
  }
}

let quantity = document.getElementById("quantity").textContent;
let qtyRef = document.getElementById("quantity");

function increaseQTY() {
  ++quantity;
  qtyRef.innerHTML = quantity;
}
function decreaseQTY() {
  if (quantity > 1) {
    --quantity;
    qtyRef.innerHTML = quantity;
  } else {
    qtyRef.innerHTML = 0;
  }
}
