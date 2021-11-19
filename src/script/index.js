const TOP = document.querySelector(".top");

window.addEventListener("scroll", () =>{
    if (window.innerWidth < 820 && document.documentElement.scrollTop > 500) {
        TOP.style.display = "block";
      } else {
        TOP.style.display = "none";
      }
});