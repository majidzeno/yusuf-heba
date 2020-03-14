function html(ele, code) {
  ele.innerHTML = code;
}

function makeTimer() {
  var endTime = new Date("March 27, 2020 17:00:00");
  var endTime = Date.parse(endTime) / 1000;

  var now = new Date();
  var now = Date.parse(now) / 1000;

  var timeLeft = endTime - now;

  var days = Math.floor(timeLeft / 86400);
  var hours = Math.floor((timeLeft - days * 86400) / 3600);
  var minutes = Math.floor((timeLeft - days * 86400 - hours * 3600) / 60);
  var seconds = Math.floor(
    timeLeft - days * 86400 - hours * 3600 - minutes * 60
  );

  var D = document.getElementById("days");
  var H = document.getElementById("hours");
  var M = document.getElementById("minutes");
  var S = document.getElementById("seconds");
  var O = document.getElementById("output");

  if (days < 0 || hours < 0 || minutes < 0 || seconds < 0) {
    // counting up
    html(D, Math.abs(days) - 1 + "<span>Days</span>");
    html(H, 23 - Math.abs(hours) + "<span>Hours</span>");
    html(M, 59 - Math.abs(minutes) + "<span>Minutes</span>");
    html(S, 59 - Math.abs(seconds) + "<span>Seconds</span>");
    html(O, "since we were married!");
  } else if (days === 0 && hours < 24) {
    html(O, "It's Happening Today !! ♥ ♥");
    $("#output").css("color", "red");
  } else {
    // counting down
    html(D, Math.abs(days) + "<span>Days</span>");
    html(H, Math.abs(hours) + "<span>Hours</span>");
    html(M, Math.abs(minutes) + "<span>Minutes</span>");
    html(S, Math.abs(seconds) + "<span>Seconds</span>");
    html(O, "Till we get married!");
  }
  let width = Math.abs(days);
  $("#gap").css("maxWidth", width + "%");
  $("#daysNumber").html(width);
  if (width <= 10) {
    $("#daysLeft").css("marginBottom", 4 + "em");
  }
}

setInterval(function() {
  makeTimer();
}, 1000);
