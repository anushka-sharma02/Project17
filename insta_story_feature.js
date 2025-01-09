var arr=[
    {dp:"https://plus.unsplash.com/premium_photo-1693258698597-1b2b1bf943cc?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODl8fHBlcnNvbnxlbnwwfHwwfHx8MA%3D%3D",status:"https://images.unsplash.com/19/nomad.JPG?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODZ8fHBlcnNvbnxlbnwwfHwwfHx8MA%3D%3D"},
    {dp:"https://plus.unsplash.com/premium_photo-1689539137236-b68e436248de?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",status:"https://images.unsplash.com/photo-1488424138610-252b5576e079?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHBlcnNvbnxlbnwwfHwwfHx8MA%3D%3D"},
    {dp:"https://images.unsplash.com/photo-1529665730773-4f3fda31a5f9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fHBlcnNvbnxlbnwwfHwwfHx8MA%3D%3D",status:"https://images.unsplash.com/photo-1542452376175-82b6fb643412?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8cGVyc29ufGVufDB8fDB8fHww"},
    {dp:"https://images.unsplash.com/photo-1521566652839-697aa473761a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHBlcnNvbnxlbnwwfHwwfHx8MA%3D%3D",status:"https://images.unsplash.com/photo-1541190990694-4a612732721c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8cGVyc29ufGVufDB8fDB8fHww"},
    {dp:"https://plus.unsplash.com/premium_photo-1664536392896-cd1743f9c02c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fHBlcnNvbnxlbnwwfHwwfHx8MA%3D%3D",status:"https://images.unsplash.com/photo-1473773386757-42bbe7288351?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cGVyc29ufGVufDB8fDB8fHww"},
    {dp:"https://plus.unsplash.com/premium_photo-1691784781482-9af9bce05096?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjV8fHBlcnNvbnxlbnwwfHwwfHx8MA%3D%3D",status:"https://images.unsplash.com/photo-1522845015757-50bce044e5da?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjh8fHBlcnNvbnxlbnwwfHwwfHx8MA%3D%3D"},
    {dp:"https://plus.unsplash.com/premium_photo-1710459650235-1cf542dc189f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjl8fHBlcnNvbnxlbnwwfHwwfHx8MA%3D%3D",status:"https://images.unsplash.com/photo-1517364350421-1d6871888e1b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzZ8fHBlcnNvbnxlbnwwfHwwfHx8MA%3D%3D"},
    {dp:"https://plus.unsplash.com/premium_photo-1664541336692-e931d407ba88?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzd8fHBlcnNvbnxlbnwwfHwwfHx8MA%3D%3D",status:"https://images.unsplash.com/photo-1473830394358-91588751b241?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTF8fHBlcnNvbnxlbnwwfHwwfHx8MA%3D%3D"},
    {dp:"https://plus.unsplash.com/premium_photo-1689568126014-06fea9d5d341?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTN8fHBlcnNvbnxlbnwwfHwwfHx8MA%3D%3D",status:"https://images.unsplash.com/photo-1462737894914-3552923dc87d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjZ8fHBlcnNvbnxlbnwwfHwwfHx8MA%3D%3D"},
    {dp:"https://plus.unsplash.com/premium_photo-1690086519096-0594592709d3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTd8fHBlcnNvbnxlbnwwfHwwfHx8MA%3D%3D",status:"https://images.unsplash.com/photo-1522506209496-4536d9020ec4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjB8fHBlcnNvbnxlbnwwfHwwfHx8MA%3D%3D"}
];
var clutter="";
var stories=document.querySelector(".story-section");
var screen=document.querySelector(".full-screen");
var flag=0;
for(var i=0;i<10;i++){
    clutter+=`<div class="story">
                <img id=${i} src=${arr[i].dp} alt="dp">
            </div>`;
}
/*OR we can write:
   arr.forEach(function(element,index){
          clutter+=`<div class="story">
          <img id="${index}" src="${element.dp}" alt="dp">
          </div>`;
   })
*/
stories.innerHTML=clutter;
var story=document.querySelectorAll(".story");
stories.addEventListener("click",function(dets){
    if(dets.target.id != ""){
    screen.style.display="block";
    screen.style.backgroundImage=`url("${arr[Number(dets.target.id)].status}")`;
    setTimeout(function(){
        screen.style.display="none";
        story[dets.target.id].style.background="grey";
    },3000);
}
  })
