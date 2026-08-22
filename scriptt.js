console.log("welcome");
let songIndex=0;
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let masterPlayIcon = masterPlay.querySelector("i");

let previousBtn = document.getElementById("previousBtn");
let nextBtn = document.getElementById("nextBtn");

let songName = document.getElementById("songName");
let artistName = document.getElementById("artistName");

let audioElement = new Audio('Do I Wanna Know_ - Arctic Monkeys.mp3');
let songs = [
    {songName: "Do I Wanna Know",  artistName: "Arctic Monkeys", filePath: "Do I Wanna Know_ - Arctic Monkeys.mp3"},
    {songName: "I Thought I Saw Your Face Today",  artistName: "She & Him", filePath: "I Thought I Saw Your Face Today.mp3"},
    {songName: "Enna Sona",  artistName: "Arijit Singh", filePath: "Enna Sona.mp3"},
    {songName: "Babydoll",  artistName: "Dominic Fike", filePath: "Babydoll.mp3"},
    {songName: "505 ",  artistName: "Arctic Monkeys", filePath: "505.mp3"},
   
];

// handle play or pause
masterPlay.addEventListener('click', ()=>{
    if(audioElement.paused || audioElement.currentTime<=0) {
        audioElement.play();
         masterPlayIcon.classList.remove("fa-play");
        masterPlayIcon.classList.add("fa-pause");

    }else {
        audioElement.pause();
          masterPlayIcon.classList.remove("fa-pause");
        masterPlayIcon.classList.add("fa-play");
    }
})

myProgressBar.addEventListener("change", ()=> {
    audioElement.currentTime=
    (myProgressBar.value * audioElement.duration) /100;

});





//listen event
audioElement.addEventListener('timeupdate', ()=>{
    let progress = parseInt(
        (audioElement.currentTime / audioElement.duration) * 100
    );
    myProgressBar.value=progress;
});


// load song

function loadSong(index) {

    audioElement.pause();

    audioElement.src = songs[index].filePath;

    audioElement.load();

    songName.innerText = songs[index].songName;
    artistName.innerText = songs[index].artistName;

    myProgressBar.value = 0;
}


nextBtn.addEventListener("click", () => {

    songIndex++;

    if (songIndex >= songs.length) {
        songIndex = 0;
    }

    loadSong(songIndex);

    audioElement.play();

    masterPlayIcon.classList.remove("fa-play");
    masterPlayIcon.classList.add("fa-pause");

});

previousBtn.addEventListener("click", () => {

    songIndex--;

    if (songIndex < 0) {
        songIndex = songs.length - 1;
    }

    loadSong(songIndex);

    audioElement.play();

    masterPlayIcon.classList.remove("fa-play");
    masterPlayIcon.classList.add("fa-pause");

});