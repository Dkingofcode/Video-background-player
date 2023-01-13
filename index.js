const btnContainer = document.querySelector(".switch");
const btnPlay = document.querySelector(".switch-play");
const btnPause = document.querySelector(".switch-pause");
const video = document.querySelector(".video-container");


btnContainer.addEventListener("click", () => {
   if(btnPlay.classList.contains("on")){
      btnPlay.classList.remove("on");
      btnPause.classList.add("on");
      video.pause();
   }else{
       btnPlay.classList.add("on");
       btnPause.classList.remove("on");
       video.play();
   }
})