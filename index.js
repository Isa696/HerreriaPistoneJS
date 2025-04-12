const RESPONSIVE_WIDTH = 1024

// Guarda una referencia al logo fuera del ScrollTrigger para eficiencia
const headerLogo = document.getElementById("header-logo");
const originalLogoSrc = "./assets/logo.png"; // Guarda la ruta original
const alternateLogoSrc = "./assets/logo-2.png"; // Guarda la ruta alternativa

gsap.registerPlugin(ScrollTrigger)

let headerWhiteBg = false
let isHeaderCollapsed = window.innerWidth < RESPONSIVE_WIDTH
const collapseHeaderItems = document.getElementById("collapsed-items")
const collapseBtn = document.getElementById("collapse-btn")


const dropdowns = document.querySelectorAll('.dropdown')
dropdowns.forEach(dropdown => new Dropdown(`#${dropdown.id}`))


gsap.to("#hero-image", {
    scale: 1,
    duration: 5
})


const expandingBg = document.getElementById("expanding-header-bg")

gsap.to(expandingBg, {

    height: "100%",
    duration: 3,
    scrollTrigger: {
        trigger: "#hero-section",
        // pin: true,
        start: "50px 10px", // when the top of the trigger hits the top of the viewport
        end: "80px 50px",
        scrub: 1,
        // markers: true
    }

})

ScrollTrigger.create({
    trigger: "#hero-section",
    start: "50px 10px", // when the top of the trigger hits the top of the viewport
    end: "60px 40px",
    scrub: 1,
    // markers: true,
    onEnter: () => {
        const headerLinks = document.querySelectorAll(".header-links")

        headerLinks.forEach(e => {
            e.classList.add("header-white-bg")
        })
        if (isHeaderCollapsed){
            collapseBtn.classList.add("primary-text-color")
        }
        headerWhiteBg = true

        // Cambia la imagen del logo
        if (headerLogo) {
            headerLogo.src = alternateLogoSrc; // Usa la ruta alternativa
        }
    },
    onEnterBack: () => {
        const headerLinks = document.querySelectorAll(".header-links")

        headerLinks.forEach(e => {
            e.classList.remove("header-white-bg")
        })
        collapseBtn.classList.remove("primary-text-color")
        collapseBtn.classList.add("tw-text-white")
        headerWhiteBg = false
                // Vuelve a la imagen original del logo
                if (headerLogo) {
                    headerLogo.src = originalLogoSrc; // Usa la ruta original
                }
    }
})


const reviewContainer = document.querySelector(".review-container")
const reviewSlideShow = new SlideShow(reviewContainer, true, 10000)


function onHeaderClickOutside(e) {

    if (!collapseHeaderItems.contains(e.target)) {
        toggleHeader()
    }

}


function toggleHeader() {
    console.log("Colappse", isHeaderCollapsed)
    if (isHeaderCollapsed) {
        // collapseHeaderItems.classList.remove("max-md:tw-opacity-0")
        collapseHeaderItems.classList.add("!tw-opacity-100")
        collapseHeaderItems.style.width = "60vw"
        collapseBtn.classList.remove("bi-list", "primary-text-color")
        collapseBtn.classList.add("bi-x", "tw-text-white")
        isHeaderCollapsed = false

        setTimeout(() => window.addEventListener("click", onHeaderClickOutside), 1)

    } else {
        collapseHeaderItems.classList.remove("!tw-opacity-100")
        collapseHeaderItems.style.width = "0vw"
        collapseBtn.classList.remove("bi-x", "tw-text-white")
        collapseBtn.classList.add("bi-list", headerWhiteBg ? "primary-text-color" : null)
        isHeaderCollapsed = true
        window.removeEventListener("click", onHeaderClickOutside)

    }
}

function responsive() {
    if (window.innerWidth > RESPONSIVE_WIDTH) {
        collapseHeaderItems.style.width = ""
        
    }else{
        isHeaderCollapsed = true
        collapseBtn.classList.add("bi-list", headerWhiteBg ? "primary-text-color" : null)
    }
}

window.addEventListener("resize", responsive)

// whatsapp

const phoneNumber = "+5491154960472";
    const message = "Hola!🌟 Vengo del sitio Web.✨ Quiero hacer una consulta 😊";
    const encodedMessage = encodeURIComponent(message);

    // Detectar si es móvil o desktop
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

const whatsAppUrl = isMobile
        ? `whatsapp://send?phone=${phoneNumber}&text=${encodedMessage}`
        : `https://web.whatsapp.com/send?phone=${phoneNumber}&text=${encodedMessage}`;

        document.addEventListener("DOMContentLoaded", () => {
            const whatsappLinks = document.querySelectorAll(".whatsapp-link");
            whatsappLinks.forEach(link => {
                link.setAttribute("href", whatsAppUrl);
            });
        });

// tooltip

document.addEventListener("DOMContentLoaded", () => {
    const tooltip = document.querySelector(".custom-tooltip");

    if (tooltip) {
        tooltip.style.opacity = "1";

        setTimeout(() => {
            tooltip.style.opacity = "0";
        }, 3000);
    }
});

// email form

const form = document.getElementById("contact-form");
const endpoint = form.dataset.endpoint;

form.setAttribute("action", endpoint);
const formInputs = form.querySelectorAll("input, textarea");
const formButton = form.querySelector("button[type='submit']");

window.onload = () => {
    form.reset();
}

// scroll a event

function scrollConOffset(e, id) {
    e.preventDefault();
    const yOffset = -60; // altura del navbar
    const element = document.getElementById(id);
    const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
  
    window.scrollTo({ top: y, behavior: 'smooth' });
  }
  