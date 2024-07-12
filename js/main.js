let hamMenuIcon = document.getElementById("ham-menu");
let navBar = document.getElementById("nav-bar");
let navLinks = navBar.querySelectorAll("li");
let scrollTopBtn = document.getElementById("scroll-top");

/* SideMenu Toggle */
hamMenuIcon.addEventListener("click", () => {
  navBar.classList.toggle("active");
  hamMenuIcon.classList.toggle("fa-times");
});
navLinks.forEach((navLinks) => {
  navLinks.addEventListener("click", () => {
    navBar.classList.remove("active");
    hamMenuIcon.classList.toggle("fa-times");
  });
});

let header = document.querySelector("header");
window.onscroll = () => {
  /* Sticky Header */
  let pos = document.documentElement.scrollTop;
  if (pos > 0) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
  /* Scroll Top Button */
  if (pos > 300) {
    scrollTopBtn.style.display = "grid";
  } else {
    scrollTopBtn.style.display = "none";
  }

  scrollTopBtn.addEventListener("click", () => {
    document.documentElement.scrollTop = 0;
  });
};




function changeRootValue(variable, value) {
  document.documentElement.style.setProperty(variable, value);
}
let darkbtn = document.getElementById('dark');
let lightbtn = document.getElementById('light');

darkbtn.addEventListener('click', function(){
  darkbtn.style.display = 'none';
  lightbtn.style.display = 'block';
  changeRootValue('--white-shade-1', '#000');
  changeRootValue('--white-shade-2', '#222222');
  changeRootValue('--black-shade-1', '#fff');
  changeRootValue('--light', '#202020');

})

lightbtn.addEventListener('click', function(){
  lightbtn.style.display = 'none';
  darkbtn.style.display = 'block';
  changeRootValue('--white-shade-1', '#fff');
  changeRootValue('--white-shade-2', '#e7e7e7');
  changeRootValue('--black-shade-1', '#000');
  changeRootValue('--light', '#ebe9e9');

})