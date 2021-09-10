let bar1 = document.getElementById("bar1")
let bar2 = document.getElementById("bar2")
let bar3 = document.getElementById("bar3")
let bar4 = document.getElementById("bar4")
let bar5 = document.getElementById("bar5")
let bar6 = document.getElementById("bar6")

//clock
setInterval(getTime, 1000);

function getTime(){
  var now = new Date()
  var hour = now.getHours()
  var minute = now.getMinutes()
  var second = now.getSeconds()
  
  //hours
  barPosition(bar1, Math.floor(hour / 10))
  barPosition(bar2, hour % 10)
  
  //minutes
  barPosition(bar3, Math.floor(minute / 10))
  barPosition(bar4, minute % 10)
  
  //seconds
  barPosition(bar5, Math.floor(second / 10))
  barPosition(bar6, second % 10)
}

function barPosition(bar, num){
  
  //array of p elements in bar
  let children = bar.children

  //reset font weight for all elements in the bar
  for(let i = 0; i < children.length; i++){
    children[i].style.fontWeight = ""
  }

  switch(num){
    case 0:
      bar.style.top="135px"  
      makeBold(children[0])
      break; 
    case 1:
      bar.style.top="105px"  
      makeBold(children[1])
      break; 
    case 2:
      bar.style.top="75px"  
      makeBold(children[2])
      break; 
    case 3:
      bar.style.top="45px"  
      makeBold(children[3])
      break; 
    case 4:
      bar.style.top="15px"  
      makeBold(children[4])
      break; 
    case 5:
      bar.style.top="-15px" 
      makeBold(children[5]) 
      break; 
    case 6:
      bar.style.top="-45px"  
      makeBold(children[6])
      break; 
    case 7:
      bar.style.top="-75px"  
      makeBold(children[7])
      break; 
    case 8:
      bar.style.top="-105px"  
      makeBold(children[8])
      break;
    case 9:
      bar.style.top="-135px"  
      makeBold(children[9])
      break; 
  }
}

function makeBold(p){
  p.style.fontWeight = "bold"
}