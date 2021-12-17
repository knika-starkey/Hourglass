let perTimeSec = +prompt("Enter the amount of 'sand' (number of seconds)");
let x;
let date_in_future = new Date();
date_in_future.setSeconds(date_in_future.getSeconds() + perTimeSec);
function timer() {
  let date = new Date().getTime();
  let ms = date_in_future - date;
  let hours = Math.floor((ms % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((ms % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((ms % (1000 * 60)) / 1000);
  document.getElementById("time").innerHTML =
    "Осталось: " + hours + "часов " + minutes + "минут " + seconds + "секунд ";
  if (ms < 0) {
    clearInterval(x);
    document.getElementById("time").innerHTML = "Ваше время истекло";
  }
  x = setInterval(timer, 1000);
}
