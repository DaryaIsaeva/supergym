const playButton = document.querySelector('[data-video="play"]');
const iframe = document.querySelector('[data-video="iframe"]');

const onPlayClick = () => {
  if (playButton && iframe) {
    playButton.addEventListener('click', () => {
      playButton.style.display = 'none';
      iframe.style.display = 'block';
      iframe.src += '?autoplay=1';
    });
  }
};

export {onPlayClick};
