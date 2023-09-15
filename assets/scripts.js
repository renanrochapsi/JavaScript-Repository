document.body.style.fontSize = '50px';
document.body.style.display = 'flex';

const div = document.querySelector('#mainDiv');
div.style.textAling = 'center';
div.style.margin = 'auto' ;





const clickRed = document.querySelector('#clickRed');
clickRed.addEventListener('click', function(){
    document.body.style.backgroundColor = 'red';
});

const clickWhite = document.querySelector('#clickWhite');
clickWhite.addEventListener('click', function(){
    document.body.style.backgroundColor = 'white';
});

