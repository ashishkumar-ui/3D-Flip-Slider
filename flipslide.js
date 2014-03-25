function flipSlider(options) {
    // Private Vars
    var container = options.container,
        slider = container.querySelector(".flip"),
        slides = slider.querySelectorAll(".slide"),
        nextBtn = container.querySelector(".next"),
        PrevBtn = container.querySelector(".prev"),
        timeout,
        frontSlide,
        backSlide;

    // == public functions == //

    //Next flip
    this.nextFlip = function() {
        doFlip(1);
    }

    //previous flip
    this.prevFlip = function() {
        doFlip(-1);
    }

    // == private functions == //

    // flip slides
    function doFlip(dir) {
        if (!container.querySelector(".animate")) {
            slider.classList.add("animate");

            if (dir == -1) {
                slider.classList.add("animateL");
            }

            frontSlide = slider.querySelector(".front");
            backSlide = findBack(dir);

            backSlide.classList.add("back");

            timeout = setTimeout(function() {
                resetSlides();
                clearTimeout(timeout);
            }, 600);
        }
    }

    // reset slides on completion
    function resetSlides() {
        frontSlide = slider.querySelector(".front");
        backSlide = slider.querySelector(".back");

        backSlide.classList.add("front");
        backSlide.classList.remove("back");
        frontSlide.classList.remove("front");
        slider.classList.remove("animate");
        slider.classList.remove("animateL");
    }

    // find slide to set it back-flip
    function findBack(dir) {
        var frontIndex,
            target,
            slideCount;

        slides = slider.querySelectorAll(".slide");
        slideCount = slides.length;

        for (var i = 0; i < slideCount; i++) {
            if (slides[i].classList.contains("front")) {
                frontIndex = i;
            }
        };

        if (dir == -1) {
            target = frontIndex < 1 ? slides[slideCount - 1] : slides[frontIndex - 1];
        } else {
            target = (frontIndex + 1) < slideCount ? slides[frontIndex + 1] : slides[0];
        }

        return target;
    }

    // Event Bindings
    nextBtn.onclick = this.nextFlip;
    PrevBtn.onclick = this.prevFlip;
}

// Creating Instance of the slider
var flip1 = new flipSlider({
    container: document.querySelector(".flip-slider")
});
