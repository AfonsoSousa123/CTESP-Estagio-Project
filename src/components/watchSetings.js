import $ from'jquery';
import 'jquery-ui-dist/jquery-ui';

/*Relogio Digital*/
$(function clock(){
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
    document.getElementById('hour').innerHTML = hours;
    document.getElementById('minute').innerHTML = ": " + minutes;
    document.getElementById('hour_1').innerHTML = hours;
    document.getElementById('minute_1').innerHTML = ": " + minutes;
  }
},100);})