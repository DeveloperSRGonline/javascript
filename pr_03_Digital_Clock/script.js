const clock = document.getElementById('clock')

setInterval(function () {
    let date = new Date() // date
    clock.innerHTML = date.toLocaleTimeString()
}, 1000)