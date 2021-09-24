document.addEventListener('DOMContentLoaded', function() {

    function showHomeArrow() {
        const headerHeight = 100;

        const homeArrow = document.querySelector(".home__arrow");
        const home = document.getElementById("home");
        const header = document.querySelector(".header");

        let homeH = home.offsetHeight;
        let scrollPos = window.pageYOffset;

        function checkHeight() {
            scrollPos = this.pageYOffset;

            if (scrollPos > homeH - headerHeight) {
                homeArrow.classList.add("show");
                header.classList.add("fixed");
            } else {
                homeArrow.classList.remove("show");
                header.classList.remove("fixed");
            } 
        }
        window.addEventListener("scroll", checkHeight);
        window.addEventListener("load", checkHeight);
        window.addEventListener("resize", checkHeight);
    }
    
    function rotateListener() {
        const promoSection = document.querySelector(".section--promo");
        window.addEventListener("resize", function() {
            if (outerWidth > outerHeight) {
                promoSection.style.height = "100vw";
            } else {
                promoSection.style.height = "100vh"
            }
        }, false);
    }

    function footerAccordeonToggle() {
        const accordButton = document.querySelectorAll(".footer__card__title");
        const accordContent = document.querySelectorAll(".footer__card__content");

        accordButton.forEach(button => {
            button.addEventListener("click", () => {
                currBtn = button.getAttribute("data-num");

                accordContent.forEach(content => {
                    if (content.getAttribute("data-num") == currBtn) {
                        content.classList.toggle("active");
                    }
                });
            });
        });
    }

    function burgerMenuToggle() {
        const menuButton = document.querySelector(".burger-menu");
        const burgerContent = document.querySelector(".burger-nav");
        const burgerLinks = document.querySelectorAll(".burger-nav__link");
        const header = document.querySelector(".header");

        menuButton.addEventListener("click", () => {
            menuButton.classList.toggle("clicked");
            burgerContent.classList.toggle("show");
            header.classList.toggle("burgeractive");
        });

        burgerLinks.forEach(link => {
            link.addEventListener("click", () => {
                menuButton.classList.remove("clicked");
                burgerContent.classList.remove("show");
                header.classList.remove("burgeractive");
            });
        });
    }

    showHomeArrow();
    rotateListener();
    footerAccordeonToggle();
    burgerMenuToggle();

}, false);