
var untilInauguration = function() {
  var now = (new Date()).getTime();
  var nextInauguration = Date.UTC(2021, 0, 20, 17);
  //var nextInauguration = Date.UTC(2017, 0, 20, 17);
  return delta = nextInauguration - now;
}

var millisecondsToTime = function(millis) {
  var seconds = Math.floor(millis / 1000);
  var days = Math.floor(seconds / 86400);
  seconds -= days * 86400;
  var hours = Math.floor(seconds / 3600);
  seconds -= hours * 3600;
  var minutes = Math.floor(seconds / 60);
  seconds -= minutes * 60;
  return {days: days, hours: hours, minutes: minutes, seconds: seconds}
}

var updateDelta = function() {
  detail = document.getElementById("trumpdetail");
  millis = untilInauguration();
  var date = millisecondsToTime(Math.abs(millis));
  var text = date.days + " days, " + date.hours + " hours, " + date.minutes + " minutes, " + date.seconds + " seconds"
  if (millis > 0) {
    document.getElementById("trumpstatus").innerHTML = "yes :(";
    document.getElementById("trumpdetail").innerHTML = text + " until the next inauguration.<br>And it can't come soon enough.";
    document.getElementsByTagName("body")[0].style["background-color"] = "red";
  }
  else {
    document.getElementById("trumpstatus").innerHTML = "NO! HOORAY!";
    document.getElementById("trumpdetail").innerHTML = text + " since the inauguration";
    document.getElementsByTagName("body")[0].style["background-color"] = "green";
  }
  window.setTimeout(updateDelta, 1000);
}

window.onload = function() {
  updateDelta();
};

