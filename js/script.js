//script for hamburger starts here
const hamburger = document.getElementById('hamburger')
const navMenu = document.getElementById('navMenu')

hamburger.addEventListener("click", () => {
    if (navMenu.style.display==='flex') {
        navMenu.style.display = 'none'
    } else {
        navMenu.style.display = 'flex'
    }
})


// script for see more button starts here 
function toggleText () {
    // assign the "see more content" and "see more button" to a variable
    const moreText = document.getElementById('more')
    const btnText = document.getElementById('btn')

    if (moreText.style.display === "none") {
        moreText.style.display = "inline"
        btnText.innerHTML = "See Less"

    } else {
        moreText.style.display = "none"
        btnText.innerHTML = "See More"
    }
}


// script for the countdown starts here 
// step1: set the date you want the countend to end 
const targetDate = new Date("2025-07-30T00:00:00").getTime();

const countdown = setInterval(() => {
    // step2: update the countdown every one second 
    const now = new Date().getTime()
    const distance =targetDate - now;


    // step3: time calculation  for days, hours, minutes, and seconds
    const days = Math.floor(distance / (1000*60*60*24))


    const hours = Math.floor(
        (distance%(1000*60*60*24)) / (1000*60*60)
    )


    const minutes = Math.floor (
        (distance%(1000*60*60)) / (1000*60)
    )


    const seconds = Math.floor (
        (distance%(1000*60)) / 1000
    )


    //To display the result
    document.getElementById("countdown").innerHTML= days + "d " + hours + "h " + minutes + "m " + seconds + "s "


    //What happens when the countdown finished
    if (distance < 0) {
        clearInterval(timer)
        document.getElementById('countdown').innerHTML = 'Expired'
    }


    //putting tags for days, hours, minutes and seconds starts here
   document.getElementById('countdown').innerHTML=  `<span class = "days">${days}d</span>` +
    `<span class = "hours">${hours}h</span>` +
    `<span class = "minutes">${minutes}m</span>` +
    `<span class = "seconds">${seconds}s</span>`

},1000);


//putting tags for days, hours, minutes and seconds starts here
document.getElementById('countdown').innerHTML= `<span class = "days">${days}d</span>` +
`<span class = "hours">${hours}h</span>` +
`<span class = "minutes">${minutes}m</span>` +
`<span class = "seconds">${seconds}s</span>`