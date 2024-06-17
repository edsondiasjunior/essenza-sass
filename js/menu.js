const btnMobile = document.getElementById("btn-mobile");

function toggleMenu() {
  const nav = document.getElementById("nav");
  nav.classList.toggle("active");
  const hamburguer = document.getElementById("hamburguer");
  hamburguer.classList.toggle("x1");
  const hamburguer2 = document.getElementById("hamburguer2");
  hamburguer2.classList.toggle("active2");
  const hamburguer3 = document.getElementById("hamburguer3");
  hamburguer3.classList.toggle("active3");
}

btnMobile.addEventListener("click", toggleMenu);
