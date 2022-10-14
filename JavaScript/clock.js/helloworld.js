window.onload = function(){
    setInterval(() => {
        let date = new Date()
        var time = date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds()
        document.getElementById('time').innerHTML = time 
    }, 1000);
 };