/*---------------------- .scrollToTop ----------------------------------------*/
const scrollToTopBtn = document.querySelector('.scrollToTop');

window.addEventListener("scroll", function() {
    if (window.pageYOffset > 300) {
        if (!scrollToTopBtn.classList.contains("btnShow")) {
            scrollToTopBtn.classList.remove("btnHide");
            scrollToTopBtn.classList.add("btnShow");
            scrollToTopBtn.style.display = "block";
        }
    } else {
        if (scrollToTopBtn.classList.contains("btnShow")) {
            scrollToTopBtn.classList.remove("btnShow");
            scrollToTopBtn.classList.add("btnHide");
            setTimeout(function() { scrollToTopBtn.style.display = "none"; }, 500)

            //console.log("btnHide");
        }
    }
});

scrollToTopBtn.addEventListener("click", function() {
    window.scrollTo(0, 0);
});