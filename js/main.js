let wcards = document.querySelectorAll(".wrapper")

wcards.forEach(wcard => wcard.addEventListener('mousemove', function(e){
    let card = wcard.querySelector('.card');
    card.style.transform = 'rotateX(0deg) rotateY(180deg)';
}));

wcards.forEach(wcard => wcard.addEventListener('mouseleave', function(e){
    let card = wcard.querySelector('.card');
    card.style.transform = 'rotateX(0deg) rotateY(0deg)';
}));