function setTime(callback){
    let i = 0;
    let count = 0;
    var s = setInterval(() => {
        let sizeAdjust = 10 + i;
        let size = sizeAdjust.toString() + "px";
        document.querySelector("body").style.fontSize = size;
        // document.querySelector(".container").style.marginLeft = size;
        for(let v = 0; v < document.querySelectorAll(".row").length; v++){
            document.querySelectorAll(".row")[v].style.padding = size;
        }
        i+= 10;
        count++;
        if(count === 5){
            setTimeout(() => {
                clearInterval(s);
                count = 0;
                callback();
            })
        }
    }, 500)
}
setTime(resetTime);

function resetTime(){
    let i = 0;
    let count = 0;
    var s = setInterval(() => {
        let sizeAdjust = 60 - i;
        let size = sizeAdjust.toString() + "px";
        document.querySelector("body").style.fontSize = size;
        for(let v = 0; v < document.querySelectorAll(".row").length; v++){
            document.querySelectorAll(".row")[v].style.padding = size;
        }
        i+= 10;
        count++;
        if(count === 6){
            setTimeout(() => {
                clearInterval(s);
                count = 0;
                setTime(resetTime);
            })
        }
    }, 500)
}









// 