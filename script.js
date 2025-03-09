// code for html page

// code for pomodoro video
const pomodoro_video = document.getElementById('PomodoroVideo');

pomodoro_video.addEventListener('mouseover', () => {
    pomodoro_video.play();
});

pomodoro_video.addEventListener('mouseout', () => {
    pomodoro_video.pause();
    pomodoro_video.currentTime = 0;
});

