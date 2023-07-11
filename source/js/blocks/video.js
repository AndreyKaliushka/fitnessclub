const video = document.querySelector('.gym-block__video');
const button = document.querySelector('.gym-block__video-button');

const playVideo = () => {
  if (document.body.contains(document.querySelector('.gym-block'))) {
    button.addEventListener('click', () => {
      video.classList.add('gym-block__video--enabled');
    });
  }
};


export {playVideo};
