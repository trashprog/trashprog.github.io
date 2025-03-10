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

// code for the space shooter game
const space_video = document.getElementById('SpaceShooterVideo');

space_video.addEventListener('mouseover', () => {
    space_video.play();
});

space_video.addEventListener('mouseout', () => {
    space_video.pause();
    space_video.currentTime = 0;
});





