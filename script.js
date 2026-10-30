// Selectors
const icon = document.querySelector(".icon");
const header = document.querySelector(".header");
const h2 = document.querySelectorAll("h2");
const headerA = document.querySelectorAll("header a");
const aiBtn = document.querySelector(".Askai-btn");
const profileIcon = document.querySelector(".icon-user");
const logoBlack = document.querySelector("#logoBlack");
const logoWhite = document.querySelector("#logoWhite");
const menuIcon = document.querySelector(".icon-menu");
const section4GridContainer = document.querySelectorAll(
  ".section-4-gridcontainer1",
);
const section4GridContainerImage = document.querySelectorAll(
  ".section-4-gridcontainer1image",
);

console.log(section4GridContainerImage);

window.addEventListener("scroll", () => {
  if (window.scrollY >= 10) {
    header.style.backgroundColor = "white";
    // header.style.position = "sticky";
    // header.classList.add('sticky');

    headerA.forEach((item) => {
      item.style.color = "black";
    });

    aiBtn.style.borderColor = "black";
    profileIcon.style.fill = "black";
    logoWhite.classList.add("hidden");
    logoBlack.classList.remove("hidden");
    menuIcon.style.fill = "black";
  } else {
    header.style.backgroundColor = "#673de6";
    headerA.forEach((item) => {
      item.style.color = "white";
    });
    aiBtn.style.borderColor = "white";
    profileIcon.style.fill = "white";
    logoWhite.classList.remove("hidden");
    logoBlack.classList.add("hidden");
    menuIcon.style.fill = "white";
  }
});

// Store individually the parent container
const section4GridContainer1 = section4GridContainer[0];
const section4GridContainer2 = section4GridContainer[1];

// Store individually the image container
const section4GridContainerImage1 = section4GridContainerImage[0];
const section4GridContainerImage2 = section4GridContainerImage[1];

// A function that allow an image to appear and disappear
const imageReavealer = (class1, class2) => {
  class1.addEventListener("mouseenter", (e) => {
    class2.classList.add("image-visible");
  });

  class1.addEventListener("mouseleave", (e) => {
    class2.classList.remove("image-visible");
  });
};

// First Box
imageReavealer(section4GridContainer1, section4GridContainerImage1)

// Second box
imageReavealer(section4GridContainer2, section4GridContainerImage2)
