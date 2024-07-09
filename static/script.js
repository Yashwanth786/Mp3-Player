console.log("Welcome to Paatala Pallaki");

// Initialize the Variables
let songIndex = 0;
let audioElement = new Audio();
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let masterSongName = document.getElementById('masterSongName');
let songItems = Array.from(document.getElementsByClassName('songItem'));
let volumeIcon = document.getElementById('mute');
let volumeSlider = document.getElementById('volume');

let songs = [
    {songName: "Hum Honge Kamyab (Mayank)", filePath: "static/songs/1.mp3", coverPath: "static/covers/1.jpeg" },
    {songName: "Jaane Kyun (Ved and Yash)", filePath: "static/songs/2.mp3", coverPath: "static/covers/2.jpeg" },
    {songName: "Neela Neela Amber (Dushyant and Snehil)", filePath: "static/songs/3.mp3", coverPath: "static/covers/3.jpg" },
    {songName: "Tholiprema (Nikhil and Rakesh)", filePath: "static/songs/4.mp3", coverPath: "static/covers/4.jpg"},
    {songName: "Ganesh Vandana", filePath: "static/songs/5.mp3", coverPath: "static/covers/5.jpg"},
    {songName: "Chhath Puja Song (Aman and Jay)", filePath: "static/6.mp3", coverPath: "static/covers/6.jpg"},
    {songName: "Saraswati Vandana (Ved and Tanmay)", filePath: "static/songs/7.mp3", coverPath: "static/covers/7.jpg"},
    {songName: "Teri Mitti (Dhruv and Sameer)", filePath: "static/songs/8.mp3", coverPath: "static/covers/8.jpeg"},
    {songName: "Sham (Dushyant)", filePath: "static/songs/9.mp3", coverPath: "static/covers/9.jpg"},
    {songName: "Khaab (Sammer)", filePath: "static/songs/10.mp3", coverPath: "static/covers/10.jpeg"},
    {songName: "Arare Manasa (Bharath)", filePath: "static/songs/11.mp3", coverPath: "static/covers/11.jpg"},
    {songName: "Phir Bhi Tumko Chaahunga (Sujal)", filePath: "static/songs/12.mp3", coverPath: "static/covers/16.jpeg"},
    {songName: "Ajay's Song", filePath: "static/songs/13.mp3", coverPath: "static/covers/13.jpg"},
    {songName: "Aankhein Khuli (Dhruv)", filePath: "static/songs/14.mp3", coverPath: "static/covers/14.jpg"},
    {songName: "Chhi-Chha Ledar (Jay)", filePath: "static/songs/15.mp3", coverPath: "static/covers/15.jpeg"},
    {songName: "Raabta (Aryan)", filePath: "static/songs/16.mp3", coverPath: "static/covers/16.jpeg"},
    {songName: "Pehla Nasha (Ved)", filePath: "static/songs/17.mp3", coverPath: "static/covers/17.jpeg"},
    {songName: "Naalo Maimarapu (Amrutha)", filePath: "static/songs/18.mp3", coverPath: "static/covers/18.jpg"},
    {songName: "Aashapasam (Sathwik)", filePath: "static/songs/19.mp3", coverPath: "static/covers/19.jpg"},
    {songName: "Shayarana (Anupama)", filePath: "static/songs/20.mp3", coverPath: "static/covers/20.jpg"},
    {songName: "Tum Hi Ho (Aman)", filePath: "static/songs/21.mp3", coverPath: "static/covers/16.jpeg"},
    {songName: "Main Agar Kahoon (Tanmay)", filePath: "static/songs/22.mp3", coverPath: "static/covers/22.jpg"},
    {songName: "Peniviti (Kartikeya)", filePath: "static/songs/23.mp3", coverPath: "static/covers/23.jpg"},
    {songName: "Waalian (Gagan)", filePath: "static/songs/24.mp3", coverPath: "static/covers/24.jpeg"},
    {songName: "Why This Kolavari Di (Sarvesh)", filePath: "static/songs/25.mp3", coverPath: "static/covers/25.jpg"},
    {songName: "Tum Sath ho (Sayyam)", filePath: "static/songs/26.mp3", coverPath: "static/covers/16.jpeg"},
    {songName: "Pashmina (Anek)", filePath: "static/songs/27.mp3", coverPath: "static/covers/26.jpeg"},
    {songName: "Mella Mellagaa (Rakesh)", filePath: "static/songs/28.mp3", coverPath: "static/covers/28.jpg"},
    {songName: "Khalasi (Rusna)", filePath: "static/songs/29.mp3", coverPath: "static/covers/29.jpeg"},
    {songName: "Give Me Some Sunshine (Devansh)", filePath: "static/songs/30.mp3", coverPath: "static/covers/30.jpeg"},
    {songName: "Kadalalle (Koushik)", filePath: "static/songs/31.mp3", coverPath: "static/covers/31.jpeg"},
    {songName: "Nalone Pongina Narmada (Mahitha)", filePath: "static/songs/32.mp3", coverPath: "static/covers/32.jpeg"},
    {songName: "Zalima (Chaithanya)", filePath: "static/songs/33.mp3", coverPath: "static/covers/16.jpeg"},
    {songName: "Hrudayama", filePath: "static/songs/34.mp3", coverPath: "static/covers/33.jpeg"},
    {songName: "Tamil Song", filePath: "static/songs/35.mp3", coverPath: "static/covers/35.jpeg"},
    {songName: "Bande Hai Hum Uske", filePath: "static/songs/36.mp3", coverPath: "static/covers/36.jpeg"},
    {songName: "Pilla Raa (Pravarsh)", filePath: "static/songs/37.mp3", coverPath: "static/covers/37.jpg"},
    {songName: "Luckkanna Mate Nillu (Jaswanth)", filePath: "static/songs/38.mp3", coverPath: "static/covers/38.jpg"},
    {songName: "Ninnila", filePath: "static/songs/39.mp3", coverPath: "static/covers/39.jpg"},
    {songName: "Pasori (Siri)", filePath: "static/songs/40.mp3", coverPath: "static/covers/40.jpg"},
    {songName: "Deh Shiva (Rajiv)", filePath: "static/songs/41.mp3", coverPath: "static/covers/41.jpg"},
    {songName: "Tamil Song (Antalene)", filePath: "static/songs/42.mp3", coverPath: "static/covers/42.jpg"},
    {songName: "Dil Dhadakne Do (Yash)", filePath: "static/songs/43.mp3", coverPath: "static/covers/43.jpg"},
    {songName: "Pal", filePath: "static/songs/44.mp3", coverPath: "static/covers/44.jpg"},
    {songName: "Khuda Jaane (Yogitha)", filePath: "static/songs/45.mp3", coverPath: "static/covers/45.jpg"},
    {songName: "Tamil Song (Barath Surya)", filePath: "static/songs/46.mp3", coverPath: "static/covers/46.jpg"},
    {songName: "Shiva Song (Prem)", filePath: "static/songs/47.mp3", coverPath: "static/covers/47.jpg"},
    {songName: "Group Song", filePath: "static/songs/48.mp3", coverPath: "static/covers/48.jpg"}, 
];

audioElement.volume = volumeSlider.value / 100;

// Handle mute/unmute
volumeIcon.addEventListener('click', () => {
    if (audioElement.volume > 0) {
        audioElement.volume = 0;
        volumeSlider.value = 0;
        volumeIcon.classList.remove('fa-volume-up');
        volumeIcon.classList.add('fa-volume-mute');
    } else {
        audioElement.volume = volumeSlider.value / 100;
        volumeIcon.classList.remove('fa-volume-mute');
        volumeIcon.classList.add('fa-volume-up');
    }
});

// Handle volume change
volumeSlider.addEventListener('input', () => {
    audioElement.volume = volumeSlider.value / 100;

    // Update volume icon based on the volume level
    if (audioElement.volume === 0) {
        volumeIcon.classList.remove('fa-volume-up');
        volumeIcon.classList.add('fa-volume-mute');
    } else {
        volumeIcon.classList.remove('fa-volume-mute');
        volumeIcon.classList.add('fa-volume-up');
    }
});

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

// Call the shuffleArray function on the songs array to shuffle it initially
shuffleArray(songs);

songItems.forEach((element, i) => {
    element.getElementsByTagName("img")[0].src = songs[i].coverPath;
    element.getElementsByClassName("songName")[0].innerText = songs[i].songName;
})

// Handle play/pause click
masterPlay.addEventListener('click', () => {
    if (audioElement.paused || audioElement.currentTime <= 0) {
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity = 1;
    } else {
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
        gif.style.opacity = 0;
    }
})

// Listen to Events
audioElement.addEventListener('timeupdate', () => {
    // Update Seekbar
    progress = parseInt((audioElement.currentTime / audioElement.duration) * 100);
    myProgressBar.value = progress;
})

myProgressBar.addEventListener('change', () => {
    audioElement.currentTime = myProgressBar.value * audioElement.duration / 100;
})

const makeAllPlays = () => {
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element) => {
        element.classList.remove('fa-pause-circle');
        element.classList.add('fa-play-circle');
    });
}

Array.from(document.getElementsByClassName('songItemPlay')).forEach((element) => {
    element.addEventListener('click', (e) => {
        makeAllPlays();
        songIndex = parseInt(e.target.id);
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');
        audioElement.src = songs[songIndex].filePath;
        masterSongName.innerText = songs[songIndex].songName;
        audioElement.currentTime = 0;
        audioElement.play();
        gif.style.opacity = 1;
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
    })
})

document.getElementById('next').addEventListener('click', () => {
    if (songIndex >= songs.length - 1) {
        songIndex = 0;
    } else {
        songIndex += 1;
    }
    audioElement.src = songs[songIndex].filePath;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
})

document.getElementById('previous').addEventListener('click', () => {
    if (songIndex <= 0) {
        songIndex = songs.length - 1;
    } else {
        songIndex -= 1;
    }
    audioElement.src = songs[songIndex].filePath;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
})

// Add event listener for the shuffle button
document.getElementById('shuffle').addEventListener('click', () => {
    // Shuffle the songs array
    shuffleArray(songs);

    // Reset the songIndex to 0
    songIndex = 0;

    // Update the audioElement source with the first song in the shuffled array
    audioElement.src = songs[songIndex].filePath;

    // Update masterSongName
    masterSongName.innerText = songs[songIndex].songName;

    // Reset the play button
    masterPlay.classList.remove('fa-pause-circle');
    masterPlay.classList.add('fa-play-circle');

    // Update the song items in the UI
    songItems.forEach((element, i) => {
        element.getElementsByTagName("img")[0].src = songs[i].coverPath;
        element.getElementsByClassName("songName")[0].innerText = songs[i].songName;
    });
});

// Add event listener for the original order button
document.getElementById('originalOrder').addEventListener('click', () => {
    // Sort the songs array back to its original order
    songs.sort((a, b) => a.songName.localeCompare(b.songName));

    // Reset the songIndex to 0
    songIndex = 0;

    // Update the audioElement source with the first song in the original array
    audioElement.src = songs[songIndex].filePath;

    // Update masterSongName
    masterSongName.innerText = songs[songIndex].songName;

    // Reset the play button
    masterPlay.classList.remove('fa-pause-circle');
    masterPlay.classList.add('fa-play-circle');

    // Update the song items in the UI
    songItems.forEach((element, i) => {
        element.getElementsByTagName("img")[0].src = songs[i].coverPath;
        element.getElementsByClassName("songName")[0].innerText = songs[i].songName;
    });
});
// Add the following code after the timeupdate event listener

audioElement.addEventListener('loadedmetadata', () => {
    // Update the total duration when the audio is loaded
    updateDuration();
});

// Add a function to update the song duration
function updateDuration() {
    // Display the current time and total duration in minutes and seconds
    let currentTime = Math.floor(audioElement.currentTime);
    let duration = Math.floor(audioElement.duration);

    let currentMinutes = Math.floor(currentTime / 60);
    let currentSeconds = currentTime % 60;
    currentSeconds = currentSeconds < 10 ? '0' + currentSeconds : currentSeconds;

    let totalMinutes = Math.floor(duration / 60);
    let totalSeconds = duration % 60;
    totalSeconds = totalSeconds < 10 ? '0' + totalSeconds : totalSeconds;

    // Update the duration element
    document.getElementById('duration').innerText = `${currentMinutes}:${currentSeconds} / ${totalMinutes}:${totalSeconds}`;
}

// Update the timeupdate event listener to call the updateDuration function
audioElement.addEventListener('timeupdate', () => {
    // Update Seekbar
    progress = parseInt((audioElement.currentTime / audioElement.duration) * 100);
    myProgressBar.value = progress;

    // Update the song duration
    updateDuration();
});
