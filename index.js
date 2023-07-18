function time(){
let date= new Date();
let hour = date.getHours();
let min= date.getMinutes();
let sec=date.getSeconds();

let session="AM";
if(hour==0){
    hour=12;//12 hour format
}
if(hour>12){
    hour=hour-12;
    session="PM";
}
// if(hour,min,sec<10){
//     hour="0"+hour;
//     min="0"+min;
//     sec="0"+sec;
// }
hour=(hour<10)?"0"+hour:hour;
min=(min<10)?"0"+min:min;
sec=(sec<10)?"0"+sec:sec;

document.getElementById("main").innerHTML= hour+":"+min+":"+sec+" "+session; 

setTimeout(time,1000);
}

time();