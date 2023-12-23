$(function () {

  window.sr = ScrollReveal();

  if ($(window).width() < 768) {

    if ($('.timeline-content').hasClass('js--fadeInLeft')) {
      $('.timeline-content').removeClass('js--fadeInLeft').addClass('js--fadeInRight');
    }

    sr.reveal('.js--fadeInRight', {
      origin: 'right',
      distance: '300px',
      easing: 'ease-in-out',
      duration: 800,
    });

  } else {

    sr.reveal('.js--fadeInLeft', {
      origin: 'left',
      distance: '300px',
      easing: 'ease-in-out',
      duration: 800,
    });

    sr.reveal('.js--fadeInRight', {
      origin: 'right',
      distance: '300px',
      easing: 'ease-in-out',
      duration: 800,
    });

  }

  sr.reveal('.js--fadeInLeft', {
    origin: 'left',
    distance: '300px',
    easing: 'ease-in-out',
    duration: 800,
  });

  sr.reveal('.js--fadeInRight', {
    origin: 'right',
    distance: '300px',
    easing: 'ease-in-out',
    duration: 800,
  });


});


let audio = document.getElementById("audioPlayer");
audio.play();

audio.onended = function() {
  audio.currentTime = 0;
  audio.play();
}

function changeMusic(musicName) {
  audio.setAttribute("src", `./assets/audio/${musicName}.mp3`);
  audio.load();
  audio.play();
}

setDefaultAudioVolume();
function setDefaultAudioVolume() {
  audio.volume = 0.3;
}

$('#new-item-content').click(function() {
  changeMusic("Jungkook-MyYou");
});

$('#us-title').click(function(){
  changeMusic("BTS-MagicShop");
});

let position = 0;
let isAnimating = false;
function onClickTest(btn) {
  if (!isAnimating) {
    isAnimating = true;
    position = position === 0 ? 70 : 0;
    btn.style.transform = `translate(-${position}px, 0px)`;
    btn.style.transition = "all 0.2s ease";

    setTimeout(function () {
      isAnimating = false;
    }, 200);
  }
}
function onMouseOverTest(btn) {
  if (!isAnimating) {
    isAnimating = true;
    position = position === 0 ? 70 : 0;
    btn.style.transform = `translate(-${position}px, 0px)`;
    btn.style.transition = "all 0.2s ease";

    setTimeout(function () {
      isAnimating = false;
    }, 200);
  }
}