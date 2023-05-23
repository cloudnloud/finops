let clock_container = document.querySelector(".clock_container");
function digitalclock(){
    let date=new Date();
    let hours=date.getHours();
    let minutes=date.getMinutes();
    let seconds=date.getSeconds();
    let txt="AM";
    if(hours>12){
        hours=hours-12;
        txt="PM";
    }
    else if(hours==0){
        hours=12;
        txt="AM";
    }
 
    hours=hours<10?'0'+hours:hours;
    minutes=minutes<10?'0'+minutes:minutes;
    seconds=seconds<10?'0'+seconds:seconds;

    clock_container.innerHTML=`${hours} : ${minutes} : ${seconds} ${txt}`;
 }
digitalclock();
setInterval(digitalclock,1000);
