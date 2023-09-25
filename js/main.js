const audio = document.getElementById('audio');
const playBtn = document.getElementById('play');
const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');
const title = document.getElementById('title');
const time = document.getElementById('time');
const musicContainer = document.getElementById('music-container');

const lessons = ['aussprache-1', 'aussprache-3', 'basistraining-14'];

let lessonIndex = 1

loadLesson(lessons[lessonIndex]);

function loadLesson(lesson) {
    title.innerText = lesson;
    audio.src = `lessons/${lesson}.mp3`;
}

// play the lesson
function playLesson() {
    musicContainer.classList.add('play');
    playBtn.querySelector('i.fa-solid').classList.remove('fa-play');
    playBtn.querySelector('i.fa-solid').classList.add('fa-pause');
    audio.play();
}

// pause the lesson
function pauseLesson() {
    musicContainer.classList.remove('play');
    playBtn.querySelector('i.fa-solid').classList.remove('fa-pause');
    playBtn.querySelector('i.fa-solid').classList.add('fa-play');
    audio.pause();
}

// next lesson
function nextLesson() {
    lessonIndex++;

    if (lessonIndex > lessons.length - 1) {
        lessonIndex = 0;
    }

    loadLesson(lessons[lessonIndex])
    playLesson();
}

// next lesson
function prevLesson() {
    lessonIndex--;

    if (lessonIndex < 0) {
        lessonIndex = lessons.length - 1
    }

    loadLesson(lessons[lessonIndex])
    playLesson();
}


playBtn.addEventListener('click', () => {
    const isPlaying = musicContainer.classList.contains('play');

    if (isPlaying) {
        pauseLesson();
    } else {
        playLesson();
    }
})

nextBtn.addEventListener('click', nextLesson);
prevBtn.addEventListener('click', prevLesson);




