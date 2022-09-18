const modal = document.getElementsByClassName('black-bg')[0];

// console.log(modal);

function openModal(){
    modal.style.display = "block";
    const scrollY = document.documentElement.style.getPropertyValue('--scroll-y');
    const body = document.body;
    body.style.height = '100vh';
    body.style.overflowY = 'hidden';
    modal.style.overflowY = 'scroll'
    // window.scrollTo(0, parseInt(scrollY || '0') * -1);
    // document.getElementsByClassName('cart-modal').style.overflow = "auto";

}


const vid = document.querySelector('.sample-video');
// let vid = document.getElementsByClassName('cooking-vid')[0];

function playPauseVideo() {
      if (!vid.paused) {
        vid.pause();
        document.querySelector('.play-pause-effect').style.display = 'block';
      } else {
        vid.play();
        document.querySelector('.play-pause-effect').style.display= 'none';
      }
    }