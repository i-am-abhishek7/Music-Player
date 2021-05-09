const music = document.querySelector("audio");
const img = document.querySelector("img");
const play = document.getElementById("play");
const artist = document.getElementById("artist");
const title = document.getElementById("title");
const prev = document.getElementById("prev");
const next = document.getElementById("next");

const songs = [{
    name: "abhi-1",
    title: "Titliyan",
    artist: "ft Hardy Sandhu",
},
{
    name: "abhi-2",
    title: "Legends Never Die",
    artist : "Pentakill",
},
{
    name : "abhi-3",
    title : " Fearless",
    artist : "Taylor Swift",
},
{
    name : "abhi-4",
    title : "Tandav",
    artist : "Dino James",
},
{
    name : "abhi-5",
    title : "Mirage",
    artist : "Dino James",
},
];

let isPlaying = false;

//for play function

const playMusic =  () =>{
    isPlaying = true;
    music.play();
    play.classList.replace("fa-play" , "fa-pause");
    img.classList.add("anime");
};

//for pause function

const pauseMusic =  () =>{
    isPlaying = false;
    music.pause();
    play.classList.replace("fa-pause" , "fa-play");
    img.classList.remove("anime");
};

play.addEventListener("click" , () =>{
    if(isPlaying){
        pauseMusic();
    }
    else{
        playMusic();
    }
});


//changing the  music data

const loadSong = (songs) =>{
    title.textContent = songs.title;
    artist.textContent = songs.artist;
    music.src = "Music/"+songs.name+".mp3";
    img.src = "Images/"+songs.name+".jpg";
};

songIndex = 0;

// loadSong(songs[2]);

const nextSongs = () =>{
    songIndex = (songIndex + 1) % songs.length;
    loadSong(songs[songIndex]);
    playMusic();
};

const prevSongs = () =>{
    songIndex = (songIndex - 1 + songs.length) % songs.length;
    loadSong(songs[songIndex]);
    playMusic();
};

next.addEventListener("click" , nextSongs);
prev.addEventListener("click" , prevSongs);