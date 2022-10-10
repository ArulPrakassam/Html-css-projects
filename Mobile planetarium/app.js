const year = document.querySelector(".date");
const currentYear = new Date().getFullYear();
year.innerHTML = currentYear;

//slot booking

const showLink = document.querySelectorAll(".show-link");
const booking = document.querySelector(".booking");
const closeBtn = document.querySelector(".close-btn");
showLink.forEach((item) => {
  item.addEventListener("click", () => {
    booking.classList.add("show");
  });
});

closeBtn.addEventListener("click", () => {
  booking.classList.remove("show");
});
