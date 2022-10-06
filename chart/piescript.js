  
  document.onmousedown=disableclick;
  status="Right Click Disabled";
  function disableclick(event)
  { 
    if(event.button==2)
     {
      alert(status);
       return false;
        }}
document.onkeydown = function(e) {
    if((e.ctrlKey && (e.keyCode === 85 || e.keyCode===117)) || (e.ctrlKey && e.keyCode===16 && e.keyCode===73))
    {
            return false;
    } 
    else {
        return true;
    }
};
$(document).keypress("u",function(e) {
  if(e.ctrlKey)
  {
return false;
}
else
{
return true;
}
});
    $(document).ready(
    function(){
       showGraph();
    }
);
function showGraph() {
    $.get("https://disease.sh/v2/countries/India?yesterday=false",function(data) {
        var name=['Cases','Deaths','Recovered','Active'];
        var details=[];
        details.push(data.cases);
        details.push(data.deaths);
        details.push(data.recovered);
        details.push(data.active);
        var chartdata={
            labels:name,
            datasets:[
                {
                    backgroundColor:['#95a5a6','#e74c3c','#2ecc71','#3498db'],
                    data:details
                }
            ]
        };
    var options={
        elements:{
      arc:{
          borderWidth:0
      }
        }
    };
        var graphTarget=$("#myChart");
        var graph=new Chart(graphTarget,{
            type:'pie',
            data:chartdata,
            options:options
        });
    });
}