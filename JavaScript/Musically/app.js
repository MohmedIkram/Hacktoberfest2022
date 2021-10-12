const music = document.querySelector("audio");
const play = document.getElementById('play');
const img = document.querySelector('img');
const artist = document.getElementById('artist');
const title = document.getElementById('title');
const next = document.getElementById('next');
const prev = document.getElementById('prev');


const songs = [{
        name: 'sample_1',
        title: 'Blank Space',
        artist: 'Taylor Swift'
    },
    {
        name: 'sample_2',
        title: 'Memories',
        artist: 'Maroon 5'
    },
    {
        name: 'sample_3',
        title: 'Isabella Lullaby',
        artist: 'Isabella PN'
    }
]


let isPlaying = false;

const playMusic = () => {
    isPlaying = true;
    music.play();
    play.classList.replace('fa-play', 'fa-pause');
    img.classList.add("anime");
};

const pauseMusic = () => {
    isPlaying = false;
    music.pause();
    play.classList.replace('fa-pause', 'fa-play');
    img.classList.remove("anime");

};

play.addEventListener('click', () => {
    if (isPlaying) {
        pauseMusic();
    } else {
        playMusic();
    }
});


const loadSong = (songs) => {
    title.textContent = songs.title;
    artist.textContent = songs.artist;
    music.src = `music/${songs.name}.wav`;
    img.src = `images/${songs.name}.jpg`
}

songIndex = 0;

const nextSong = () => {
    songIndex = (songIndex + 1 ) % songs.length;
    loadSong(songs[songIndex]);
    playMusic();
}

const prevSong = () => {
    songIndex = (songIndex - 1 + songs.length ) % songs.length;
    loadSong(songs[songIndex]);
    playMusic();
}

next.addEventListener('click', nextSong);
prev.addEventListener('click', prevSong);