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

audio.onended = function() {
  audio.currentTime = 0;
  playAudio();
}

window.onscroll = function() {
  playAudio();
}

window.onwheel = function(event) {
  if (event.button === 1){
    playAudio();
  }
}

function playAudio() {
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

let hiddenText = document.getElementById('hiddenText');
let hiddenText2 = document.getElementById('hiddenText2');
let hiddenText3 = document.getElementById('hiddenText3');
let hiddenText4 = document.getElementById('hiddenText4');
function showLoveText() {

  let fireworkPlayer = document.getElementById("fireworkPlayer");
  fireworkPlayer.volume = 0.2;
  fireworkPlayer.play();

  changeMusic("BTS-MagicShop");
  window.scrollTo(0, 0);

  hiddenText.style.display = 'block';
  hiddenText.innerHTML = '';

  let fullText = 'Meu amor, eu te amo tanto!';
  let index = 0;

  function showChar() {
    if (index < fullText.length) {
      hiddenText.innerHTML += fullText.charAt(index);
      index++;
      setTimeout(showChar, 100);
    } else {
      setTimeout(showLoveText2, 1000)
    }
  }

  showChar();
}

function showLoveText2() {
  
  hiddenText.style.display = 'none';
  hiddenText2.style.display = 'block';
  hiddenText2.innerHTML = '';

  let fullText = 'Obrigado por ser essa mulher incrível.';
  let index = 0;

  function showChar2() {
    if (index < fullText.length) {
      hiddenText2.innerHTML += fullText.charAt(index);
      index++;
      setTimeout(showChar2, 100);
    } else {
      setTimeout(showLoveText3, 1000)
    }
  }

  showChar2();
}

function showLoveText3() {

  hiddenText2.style.display = 'none';
  hiddenText3.style.display = 'block';
  hiddenText3.innerHTML = '';

  let fullText = 'Quero passar o resto da minha vida ao seu lado, criando lindas memórias e colecionando momentos únicos.';
  let index = 0;

  function showChar3() {
    if (index < fullText.length) {
      hiddenText3.innerHTML += fullText.charAt(index);
      index++;
      setTimeout(showChar3, 100);
    } else {
      setTimeout(showLoveText4, 1000)
    }
  }

  showChar3();
}

function showLoveText4() {

  hiddenText3.style.display = 'none';
  hiddenText4.style.display = 'block';
  hiddenText4.innerHTML = '';

  let fullText = 'TE AMO PARA SEMPRE! ❤';
  let index = 0;

  function showChar4() {
    if (index < fullText.length) {
      hiddenText4.innerHTML += fullText.charAt(index);
      index++;
      setTimeout(showChar4, 100);
    } else {
      setTimeout(function () {
        let celebrationModal = document.getElementById('celebrationModal');
        let modal = bootstrap.Modal.getInstance(celebrationModal)
        modal.hide();
        hideLoveText();
      }, 5000)
    }
  }

  showChar4();
}

function hideLoveText() {
  hiddenText.style.display = 'none';
  hiddenText2.style.display = 'none';
  hiddenText3.style.display = 'none';
  hiddenText4.style.display = 'none';
}

const hiddenMenu = document.getElementById('hiddenMenu');
const arrowButton = document.getElementById('arrowButton');

arrowButton.addEventListener('click', () => {
  hiddenMenu.classList.toggle('expanded');
});


const playButton = document.getElementById('playButton');
const pauseButton = document.getElementById('pauseButton');
const muteButton = document.getElementById('muteButton');


playButton.addEventListener('click', () => {
  audio.play();
});

pauseButton.addEventListener('click', () => {
  audio.pause();
});

muteButton.addEventListener('click', () => {
  if (audio.muted) {
    audio.muted = false;
    muteButton.innerHTML = '<img src="./assets/icons/volume-xmark-solid.svg" alt="">';
  } else {
    audio.muted = true;
    muteButton.innerHTML = '<img src="./assets/icons/volume-high-solid.svg" alt="">';
  }
});
