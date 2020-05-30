//import $ from'jquery';
//import 'jquery-ui-dist/jquery-ui';

/*Relogio Digital*/
function clock(){
  setInterval( () => {
  const fullDate = new Date();
  var hours = fullDate.getHours();
  var minutes = fullDate.getMinutes();
  if (hours<10){
    hours = "0" + hours;
  }
  if (minutes < 10){
    minutes = "0" + minutes;
  }
  if(window.location.pathname === '/makeyourown'){
    document.getElementById('hours').innerHTML = hours;
    document.getElementById('minutes').innerHTML = ": " + minutes;
  }
},100);}

clock();