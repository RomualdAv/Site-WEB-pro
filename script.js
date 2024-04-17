document.addEventListener("DOMContentLoaded", function() {
    const sliderContainer = document.getElementById("sliderContainer");
    const scrollLeftButton = document.getElementById("scrollLeftButton");
    const scrollRightButton = document.getElementById("scrollRightButton");
    
    const scrollStep = 200;
    
    scrollLeftButton.addEventListener("click", function() {
        sliderContainer.scrollBy({
            left: -scrollStep,
            behavior: "smooth"
        });
    });
    
    scrollRightButton.addEventListener("click", function() {
        sliderContainer.scrollBy({
            left: scrollStep,
            behavior: "smooth"
        });
    });
});
