function showTime(){
    var date = new Date();

var h = date.getHours();
var m = date.getMinutes();
var s = date.getSeconds();
var session = document.getElementById("ampm").innerText;
console.log(session);

if(h>12){
    document.getElementById("ampm").innerText = "PM";
    h = h-12;
}

h = h < 10 ? "0" + h : h;
m = m < 10 ? "0" + m : m;
s = s < 10 ? "0" + s : s;   

document.getElementById("hours").innerText = h;
document.getElementById("minutes").innerText = m;
document.getElementById("second").innerText = s;



setTimeout(showTime, 1000);

}


