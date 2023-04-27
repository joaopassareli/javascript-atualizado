function playSound(keyAudio) {
    const element = document.querySelector(keyAudio);

    if (element === null && element.localName === 'audio') {
        alert('Instrumento não existe'); 
        return;
    }
    element.play();
}

const keys = document.querySelectorAll('.tecla');


for (let i  =0; i < keys.length; i++) {
    const key =  keys[i];
    const instrument = key.classList[1];

    key.onclick = function () {
        playSound(`#som_${instrument}`);
    }

    key.onkeydown = function (event) {
        if (event.code == 'Enter' || event.code == 'Space') {
            key.classList.add('ativa');
        }
    }
}
