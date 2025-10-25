let Body = document.getElementsByTagName("body");
let Track = document.querySelector(".track");
let car = document.querySelector(".car");
let accelerate = new Audio("sound.mp3");
let backing = new Audio("backing.mp3");

document.addEventListener('keyup', function (event) {

  //Forward
  if(event.key == "ArrowRight"){
    let audio = document.createElement('audio');
    backing.pause();
  accelerate.play();
  accelerate.loop = true;
  this.body.style.animation = "shakeBody linear 3s infinite";
    Track.style.animation = "carMove linear 13s infinite";

    car.style.animation = "shake linear .3s infinite";
    car.style.animation = "expandwidth 5s linear forwards";
    car.style.left = "444px";

    document.querySelector(".left").style.animation = "wheelRotation linear .16s infinite";
    document.querySelector(".right").style.animation = "wheelRotation linear .16s infinite";
  }
  
  //Reverse
  else if(event.key == "ArrowLeft"){
    let audio = document.createElement('audio');
    audio.src = 'backing.mp3';
    accelerate.pause(); 
    backing.play();
    backing.loop = true;
    this.body.style.animation = "shakeBody linear 3s infinite";
    Track.style.animation = "carReverse linear 13s infinite";

    car.style.animation = "shake linear .3s infinite";
    car.style.animation = "shrinkWidth 3s linear backwards";
    car.style.left = "0px";

    document.querySelector(".left").style.animation = "reverseWheel linear .60s infinite";
    document.querySelector(".right").style.animation = "reverseWheel linear .60s infinite";
  }
  
  //Stop 
  else{
    accelerate.pause();
    backing.pause();
  this.body.style = "none";
    Track.style = "none";
    car.style = "none";
    document.querySelector(".left").style = "none";
    document.querySelector(".right").style = "none";
  }
});
