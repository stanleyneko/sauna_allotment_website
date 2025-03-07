// animation starts when scroll //
const textAppear = (entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      const keyframes = {
        opacity: [0, 1],
        translate: ["0 50px", 0],
      };
      entry.target.animate(keyframes, 500);
    }
  });
};

const boxObserver = new IntersectionObserver(textAppear);
document.querySelectorAll(".js-show-text").forEach((element) => {
  boxObserver.observe(element);
});
boxObserver.observe(document.querySelectorAll(".js-show-text"));
