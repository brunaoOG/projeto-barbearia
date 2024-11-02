setTimeout(() => {
  document.querySelectorAll(".photo .appointment-event").forEach((el) => {
    el.classList.add("appt-transition");
  });
  document
    .querySelectorAll(".photo .appointment-event .appointment a")
    .forEach((el) => {
      el.classList.add("appt-transition");
    });
  document
    .querySelector(".galery .instagram .appointment a")
    .classList.add("instagram-transition");
}, 500);

const scrollar = (el) => {
  let headerMargin = document.querySelector("header").offsetHeight;
  let topElementDistance = document.querySelector(el).offsetTop;
  let finalScrollAct = topElementDistance - headerMargin;
  window.scroll(0, finalScrollAct);
};
