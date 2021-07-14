window.onload = (ev) =>{

    const cards = document.querySelectorAll('.card-conatiner>div');

    var audio = new Audio('pliok.wav');
    function playMySound() {
        audio.play();
        
    }

    for (let i= 0; i < cards.length; i++) {
        cards[i].addEventListener('click',playMySound)
        cards[i].addEventListener('click',()=>{
            cards[i].classList.add('red-buttoned-card')
        }
    }
}