setTimeout(function(){
    console.log ("fang")
},3000)
// 1
// VM879:2 fang
setInterval(function(){
    console.log ("fing")
},1000)
// 2
// 44VM1061:2 fing


// 10초 타이머

setInterval(function(){
    if(time >=0) {
        console.log(time)
        time = time - 1
    }
},1000)

// 3분 타이머

let time = 180
// undefined

setInterval(function() {
    if(time>=0){
        const min = String(Math.floor(time/60)).padStart(2, "0")
        const sec = String(time % 60).padStart(2, "0")
        console.log(min + ":" + sec)
        time = time-1
    }
},1000)