function updateTime() {
  const timeEl = document.getElementById("time");
  const now = new Date();
  const timeString = now.toLocaleTimeString();
  timeEl.textContent = `Current Time: ${timeString}`;
}

updateTime();
setInterval(updateTime, 1000);
