let nav = document.querySelector(".nav-con");
let ques = document.querySelectorAll(".ques");
let productsCon = document.querySelector(".products2-con");

let scR = document.querySelector("#scl");
let scL = document.querySelector("#scr");

let toggleMenu = document.querySelector("#nav-toggle");
let menuCon = document.querySelector(".nav-items-con");

const scrollNav = () => {
  if (window.scrollY > 100) {
    if (!nav.classList.contains("scroll")) {
      nav.classList.add("scroll");
    }
  } else {
    if (nav.classList.contains("scroll")) {
      nav.classList.remove("scroll");
    }
  }
};

scrollNav();

toggleMenu.addEventListener("click", () => {
  if (menuCon.style.height) {
    menuCon.style.height = null;
  } else {
    menuCon.style.height = menuCon.scrollHeight + "px";
  }
});

scR.addEventListener("click", () => {
  let childWidth = document.querySelector(".product2-item").offsetWidth;
  productsCon.scrollLeft -= childWidth + 20;
});

scL.addEventListener("click", () => {
  let childWidth = document.querySelector(".product2-item").offsetWidth;
  productsCon.scrollLeft += childWidth + 20;
});

ques.forEach((elem, ind) => {
  elem.addEventListener("click", () => {
    document.querySelectorAll(".ans").forEach((el, idx) => {
      if (idx != ind) {
        if (el.style.maxHeight) {
          el.previousElementSibling.lastElementChild.style.transform = null;
        }
        el.style.maxHeight = null;
      }
    });

    let dropIcon = elem.lastElementChild;
    let ans = elem.nextElementSibling;

    if (ans.style.maxHeight) {
      ans.style.maxHeight = null;
      dropIcon.style.transform = null;
    } else {
      ans.style.maxHeight = ans.scrollHeight + "px";
      dropIcon.style.transform = "rotate(180deg)";
    }
  });
});

window.addEventListener("scroll", scrollNav);
window.addEventListener("resize", () => {
  if (window.innerWidth > 900) {
    menuCon.style.height = null;
  }
});
