//Variables para acceder al HTML
const buttons = document.querySelectorAll("[data-carousel-button]")
//foreach que permite recorrer el carousel de imagenes
buttons.forEach(button => {
    //evento para pasar a la siguiente imagen
    button.addEventListener("click", () => {
    //ternaria para controlar el flujo de las imagenes
    const offset = button.dataset.carouselButton === "next" ? 1 : -1
    const slides = button
        .closest("[data-carousel]")
        .querySelector("[data-slides]")
    //controlar en que slide se encuentra
    const activeSlide = slides.querySelector("[data-active]")
    let newIndex = [...slides.children].indexOf(activeSlide) + offset
    if (newIndex < 0) newIndex = slides.children.length - 1
    if (newIndex >= slides.children.length) newIndex = 0

    slides.children[newIndex].dataset.active = true
    delete activeSlide.dataset.active
    })
})
