function start1() {
    setTimeout(function(){
        console.log('start no repeat!')
    }, 2000)
}

let interId;

function repeat1() {
    interId = setInterval(function(){
        console.log('start repeat 2s!')
    }, 2000)
}

function stop1() {
    clearInterval(interId)
}