let timer;
let time = document.getElementsByClassName('value');
let timeFunctions = {
    decrementSecond: function () {
        time[2].innerHTML = parseInt(time[2].innerHTML) - 1
        time[2].innerHTML.length === 1 ? time[2].innerHTML = "0" + time[2].innerHTML : time[2].innerHTML
    },
    decrementMinutes: function () {
        time[1].innerHTML = parseInt(time[1].innerHTML) - 1
        time[1].innerHTML.length === 1 ? time[1].innerHTML = "0" + time[1].innerHTML : time[1].innerHTML
    },
    decrementHours: function () {
        time[0].innerHTML = parseInt(time[0].innerHTML) - 1
        time[0].innerHTML.length === 1 ? time[0].innerHTML = "0" + time[0].innerHTML : time[0].innerHTML
    },
    clearAll: function () {
        for (let index = 0; index < time.length; index++) {
            time[index].innerHTML = '00'
        }
    }
}


let inputForm = document.getElementById('inputs')
inputForm.onsubmit = (e) => {
    start()
    e.preventDefault()
}
function setCountdown() {
    let inputs = inputForm.getElementsByTagName('input')
    for (let index = 0; index < inputs.length; index++) {
        time[index].innerHTML = inputs[index].value.length === 1 ? "0" + inputs[index].value : inputs[index].value;
    }
}

function buttonClick() {
    inputForm.getElementsByTagName('button')[0].click()
}

function start() {
    setCountdown()
    clearInterval(timer)
    timer = setInterval(() => {
        timeFunctions.decrementSecond();
        if (time[2].innerHTML < 0) {
            timeFunctions.decrementMinutes()
            time[2].innerHTML = 59
            if (time[1].innerHTML < 0) {
                timeFunctions.decrementHours()
                time[1].innerHTML = 59
                if (parseInt(time[0].innerHTML) < 0) {
                    reset()
                }
            }
        }
    }, 1000)
}
function stop() {
    clearInterval(timer)
}

function reset() {
    stop()
    timeFunctions.clearAll()
}