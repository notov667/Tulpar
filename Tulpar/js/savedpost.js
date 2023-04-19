'use stick'
let cards_favorites = document.querySelector('.cards_favorites');
let cards_mines = document.querySelector('.cards_mines');
let favorites = document.getElementById('favorites');
let mines = document.getElementById('mines');

document.addEventListener('DOMContentLoaded', function(){

    favorites.addEventListener('click', () =>{
        favorites.classList.add('_selected');
        cards_favorites.classList.remove('_invis');
        mines.classList.remove('_selected');
        cards_mines.classList.add('_invis');
    });
    mines.addEventListener('click', () =>{
        mines.classList.add('_selected');
        cards_mines.classList.remove('_invis');
        favorites.classList.remove('_selected');
        cards_favorites.classList.add('_invis');
    });

});