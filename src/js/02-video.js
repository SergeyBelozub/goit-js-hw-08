import throttle from "lodash.throttle";

const iframe = document.querySelector("iframe");
const player = new Vimeo.Player(iframe);
let parsedCurrentTime = 0;

player.on("timeupdate", throttle(onPlay, 1000));

function onPlay(event) {
  localStorage.setItem("videoplayer-current-time", event.seconds);
}

const currentTime = localStorage.getItem("videoplayer-current-time");
function timeHandler(currentTime) {
  if (currentTime) {
    parsedCurrentTime = JSON.parse(currentTime);
  } else {
    parsedCurrentTime = 0;
  }
}
timeHandler(currentTime);

player.setCurrentTime(parsedCurrentTime);
