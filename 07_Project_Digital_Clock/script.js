const clock=document.getElementById('clock');


setInterval(function(){
    let date_time=new Date()
    // console.log(date_time.toLocaleTimeString());
    clock.innerHTML=date_time.toLocaleTimeString();
},1000);