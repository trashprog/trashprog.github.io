// code for html page
// Add event listeners to all videos with the class 'preview-video'
document.querySelectorAll('.preview-video').forEach(video => {
    video.addEventListener('mouseover', () => {
        video.play();
    });

    video.addEventListener('mouseout', () => {
        video.pause();
        video.currentTime = 0;
    });
});