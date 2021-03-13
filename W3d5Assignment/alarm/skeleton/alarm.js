'use strict';
//alert("hi");
function alarm() {
    let colorChange = document.getElementById("colored");
    let min = parseInt(document.getElementById("min").value);
    let sec = parseInt(document.getElementById("sec").value);
    let result = (min * 60) + (sec)
    let final = result * 10000;
    colorChange.style.backgroundColor = "red"
    setInterval(() => {
        colorChange.style.backgroundColor = "white"
    }, final);
    //clearInterval(a)

}