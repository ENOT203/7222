let red = 0
let green = 0
let blue = 0
setInterval(() => {
    document.querySelector('html').style.background = `rgb(${red}, ${green}, ${blue})`
    if (red <= 255)  {
 red++ ,
    }
    else {
red--,
    }
    green++
    blue--
})