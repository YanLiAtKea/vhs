let intro = document.querySelector(".intro");
let div = document.querySelector("div");
let button = document.querySelectorAll("button");
let play = document.querySelector(".play")
let bloop = document.querySelector(".bloop")
let noWheel = document.querySelectorAll(".noWheel");
let rough = document.querySelector(".rough");
let bloopVideo = document.querySelector(".bloopVideo");
let both = document.getElementById('both');
let wheel = document.querySelector(".wheel");
let bkgbottom = document.querySelector('.bkgbottom');
let loading = document.querySelector('.loading');
let whichVideo;
let checkLoad;

let videos = document.querySelectorAll('video');
let pause = false;

videos.forEach(togglePause);
function togglePause(v){
    v.addEventListener('click', pauseVideo);
    function pauseVideo(){
        if(pause == false){
            v.pause();
            pause = true;
        } else {
            v.play();
            pause = false;
        }
    }
}

intro.addEventListener('ended', backgroundIn);
function backgroundIn() {
    intro.style.display = "none";
    div.classList.remove("hide");
}

button.forEach(eventMe)

function eventMe(e) {
    e.addEventListener('click', loadWheel);
    function loadWheel(e) {
        both.classList.add('flyaway');
        bkgbottom.classList.add('flyaway2');
        loading.classList.remove('hide');
        if (e.target.classList.contains("play")) {
            whichVideo = 1;
            checkLoad = setInterval(checkLoad, 1500);
        } else {
            whichVideo = 2;
            checkLoad = setInterval(checkLoad, 1500);
        }
        function checkLoad() {
            if (rough.readyState === 4 && whichVideo ==1) {
                rough.classList.remove("hide");
                wheel.classList.add("hide");
                rough.play();
                div.style.display = "none";
                loading.classList.add('hide');
                clearInterval(checkLoad);
                rough.addEventListener('ended', goBackTimeOut);

            } else if (bloopVideo.readyState === 4 && whichVideo == 2){
                bloopVideo.classList.remove("hide");
                wheel.classList.add("hide");
                bloopVideo.play();
                div.style.display = "none";
                loading.classList.add('hide');
                clearInterval(checkLoad);
                bloopVideo.addEventListener('ended', goBack);
            }
        }
        function goBackTimeOut(){
            setTimeout(goBack, 2000);
        }
        function goBack(){
//            div.classList.remove('hide');
            div.style.display = "inherit";
            both.classList.remove('flyaway');
            bkgbottom.classList.remove('flyaway2');
            rough.classList.add("hide");
            wheel.classList.remove("hide");
            bloopVideo.classList.add('hide');
            button.forEach(buttonBack);
            function buttonBack(b){
                b.style.display = "inherit";
            }
        }
        noWheel.forEach(hideMe);
        function hideMe(h) {
            h.style.display = "none";
        }
    }
}
