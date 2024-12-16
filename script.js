const root = document.querySelector("#root");
const loaderBOX = document.querySelector(".loader");
const menuBTN = document.querySelector(".menu");
const menuIcon = document.querySelector(".menu i");
const navContainer = document.querySelector(".navigation-container");
const navigationPoints = document.querySelectorAll(".nav-points a");
const skills = document.querySelectorAll(".skills h3");
const skillBOXone = document.querySelector(".skills-box-1");
const skillboxDATA = document.querySelector(".skills-box-1 p");
const skillboxIcon = document.querySelector(".skills-box-1 h1 i");
const skillBOXtwo = document.querySelector(".skills-box-2");
const skillboxDATA2 = document.querySelector(".skills-box-2 p");
const skillboxIcon2 = document.querySelector(".skills-box-2 h1 i");
const projectBTN = document.querySelector(".page-3 h2");
const projectAbout = document.querySelector(".page-3 .tab-sec .tab-1");

// loader logic
const loader = () => {
  let loaderText = [
    "Hello", // Singapore (English) and "你好" (Nǐ hǎo) for Mandarin
    "नमस्ते",
    "こんにちは", // Japan (Konnichiwa)
    "Hello", // United States
    "안녕하세요", // South Korea (Annyeonghaseyo)
    "Hallo", // Germany
    "Hej", // Sweden
    "Hello", // United Kingdom
    "שלום", // Israel (Shalom)
    "你好", // China (Nǐ hǎo)
    "Hello",
    "Bonjour", // Canada (English and French)
  ];

  let count = 0;
  let intervalID = setInterval(() => {
    loaderBOX.innerText = `${loaderText[count]}`;
    count++;
    if (count === loaderText.length) {
      count = 0;
    }
  }, 200);

  window.addEventListener("load", () => {
    setTimeout(() => {
      clearInterval(intervalID);
      root.style.display = "block";
      loaderBOX.style.top = "-100%";
    }, 2000);
  });
};

// navigation icon logic
const navigationIcon = () => {
  let flag = 0;
  menuBTN.addEventListener("click", (evt) => {
    if (flag === 0) {
      navContainer.classList.add("navigation-container-animation");
      menuIcon.className = "fa-solid fa-xmark";
      menuIcon.id = "menu-i-change";
      flag = 1;
    } else {
      navContainer.classList.remove("navigation-container-animation");
      flag = 0;
      menuIcon.className = "fa-solid fa-bars";
      menuIcon.removeAttribute("id");
    }
    navigationPoints.forEach((elem) => {
      elem.addEventListener("click", () => {
        navContainer.classList.remove("navigation-container-animation");
        flag = 0;
        menuIcon.removeAttribute("id");
        menuIcon.className = "fa-solid fa-bars";
      });
    });
  });
};

// skill hover box show
const skillBOX = () => {
  skills.forEach((skill) => {
    skill.addEventListener("mouseenter", () => {
      skillBOXone.id = "skills-box-display";
      skillboxIcon.className = `${skill.getAttribute("data-icon")}`;
      skillboxDATA.innerText = `${skill.getAttribute("data-boxText")}`;
      //
      skillBOXtwo.id = "skills-box-display";
      skillboxIcon2.className = `${skill.getAttribute("data-icon")}`;
      skillboxDATA2.innerText = `${skill.getAttribute("data-learn-from")}`;
    });

    skill.addEventListener("mouseleave", () => {
      skillBOXone.id = "";
      skillBOXtwo.id = "";
    });
  });
};

// function call
loader();
navigationIcon();
skillBOX();
