const header = document.getElementById("header");
const title = document.getElementById("title");
const excerpt = document.getElementById("excerpt");
const profile_img = document.getElementById("profile_img");
const Name = document.getElementById("Name");
const date = document.getElementById("date");
const animated_bgs = document.querySelectorAll(".animated-bg");
const animated_bg_texts = document.querySelectorAll(".animated-bg-text");

setTimeout(getDate, 2500);

function getDate() {
  header.innerHTML = '<img src="laptop image.jpg" alt ="laptop">';
  title.innerHTML = "this is some dummy text for test";
  excerpt.innerHTML =
    "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Saepe, exercitationem!";
  profile_img.innerHTML =
    '<img src="https://randomuser.me/api/portraits/men/45.jpg" alt="some img">';
  date.innerHTML = "oct 08, 2020";
  Name.innerHTML = "John Doe";

  animated_bgs.forEach((bg) => bg.classList.remove("animated-bg"));
  animated_bg_texts.forEach((bg) => bg.classList.remove("animated-bg-text"));
}
