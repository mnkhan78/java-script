const clockOutput = document.getElementById('clock')

const timeUpdate = () => {
    const date = new Date();
    clockOutput.innerHTML = date.toLocaleTimeString()
    // console.log("new time:",date.toLocaleTimeString())
}

setInterval(timeUpdate,1000)
