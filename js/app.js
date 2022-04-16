//carrusel

const containerImg = document.querySelector(".container .imgs")
let lefti = 0
let righti = 0
document.addEventListener("click", (e) => {
    console.log(e)

    if (e.target.matches(".boton-right i")) {
        console.log("rigth")
        righti++
        if (righti > 0) {
            if (12.5 * righti < 12.5 * 8) {
                containerImg.style.transform = `translatex(${-12.5 * righti}%)`
            } else {
                righti = 7
            }
        }
        console.log(righti)
    }

    if (e.target.matches(".boton-left i")) {
        console.log("left")
        containerImg.style.transform = "translatex(0%)"
        lefti++
        if (lefti > 0) {
            if (righti === 0) {
                containerImg.style.transform = `translatex(${0}%)`
            } else {
                containerImg.style.transform = `translatex(${-(12.5 * righti) + 12.5}%)`
            }
        }
        righti--
        if (righti < 0) {
            righti++
        }
    }

})