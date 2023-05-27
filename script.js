const toggleNavbar = document.querySelector(".toggle-navbar");

const dropdownMenu = document.querySelectorAll(".dropdown-menu");

const dropdownClose = document.querySelectorAll(".dropdown-close");
const navMenu = document.querySelector(".nav-menu");

//show navbar
toggleNavbar.addEventListener("click", function () {
  if (window.innerWidth < 576) {
    navMenu.classList.toggle("show");

    if (navMenu.classList.contains("show")) {
      this.classList.replace("bx-menu", "bx-x");
    } else {
      this.classList.replace("bx-x", "bx-menu");
    }
  }
});

dropdownMenu.forEach((item) => {
  item.previousElementSibling.addEventListener("click", function () {
    if (window.innerWidth < 576) {
      item.classList.add("show");
      toggleNavbar.classList.add("hide");
    }
  });
});

dropdownClose.forEach((Close) => {
  Close.addEventListener("click", function () {
    if (window.innerWidth < 576) {
      dropdownMenu.forEach((item) => {
        item.classList.remove("show");
      });
      toggleNavbar.classList.remove("hide");
    }
  });
});

// modal
const openButton = document.querySelector("#open-btn");
const closeButton = document.querySelector("#close-btn");
const modalContainer = document.querySelector("#modal-container");

openButton.addEventListener("click", function () {
  modalContainer.style.display = "block";
  document.getElementById("search").focus();
});

closeButton.addEventListener("click", () => {
  modalContainer.style.display = "none";
});

window.addEventListener("click", (e) => {
  if (e.target === modalContainer) {
    modalContainer.style.display = "none";
  }
});

// accordion

const items = document.querySelectorAll(".accordion button");

function toggleAccordion() {
  const itemToggle = this.getAttribute("aria-expanded");

  for (i = 0; i < items.length; i++) {
    items[i].setAttribute("aria-expanded", "false");
  }

  if (itemToggle == "false") {
    this.setAttribute("aria-expanded", "true");
  }
}

items.forEach((item) => item.addEventListener("click", toggleAccordion));

// sidebar
const openNav = document.getElementById("openNav");

openNav.addEventListener("click", () => {
  document.getElementById("mySidenav").style.width = "100%";
});

const closeNav = document.getElementById("closeNav");

closeNav.addEventListener("click", () => {
  document.getElementById("mySidenav").style.width = "0";
});
