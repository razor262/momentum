const playBtn = document.querySelector('.play');
//let time = document.querySelector(".time");  
// const pauseBtn = document.querySelector('.pause-btn');
// const title = document.querySelector('.song');
const audio = new Audio();

var count = 0;

var songs = ["Moonway - 2 Times",
             "Rita Ora Imanbek - Bang Bang",
             "Sandra - Casino Royal",
             "Sam Smith - Writing's On The Wall",
             "Hurts - Somebody To Die For",
             "billie-eilish-no-time-to-die",
             "Jack-White-and-Alicia-Keys_-_Another-Way-to-Die"
             ];

window.onload = function(){
  var mp3 = document.getElementById("mp3");

  document.getElementById("next").onclick = next;
  document.getElementById("prev").onclick = prev;
}

function next(){
  if(count < songs.length-1){
    count++;
    play();
    playBtn.classList.toggle('pause')
  }
}

function prev(){
  if(count > 0){
    count--;
    play();
    playBtn.classList.toggle('pause')
  }
}

// function play(){
//   mp3.src = "music\\"+songs[count]+".mp3";
//  }

function play() {
    if (audio.paused) {
    // audio.src = 'music/Rita Ora Imanbek - Bang Bang.mp3';
    audio.src = "music\\"+songs[count]+".mp3";
    audio.currentTime = 0;
    audio.play();
    //button.classList.remove('pause')

    } else {
        audio.pause();
    }
};

playBtn.addEventListener('click', play);
// pauseBtn.addEventListener('click', pauseAudio);

// функция для подмены картинки
const button = document.querySelector('button');

function toggleBtn() {
  playBtn.classList.toggle('pause');
}
playBtn.addEventListener('click', toggleBtn);

// Audio
