/* Задания на урок:

1) Реализовать функционал, что после заполнения формы и нажатия кнопки "Подтвердить" - 
новый фильм добавляется в список. Страница не должна перезагружаться.
Новый фильм должен добавляться в movieDB.movies.
Для получения доступа к значению input - обращаемся к нему как input.value;
P.S. Здесь есть несколько вариантов решения задачи, принимается любой, но рабочий.

2) Если название фильма больше, чем 21 символ - обрезать его и добавить три точки

3) При клике на мусорную корзину - элемент будет удаляться из списка (сложно)

4) Если в форме стоит галочка "Сделать любимым" - в консоль вывести сообщение: 
"Добавляем любимый фильм"

5) Фильмы должны быть отсортированы по алфавиту */

'use strict';

const movieDB = {
    movies: [
        "Логан",
        "Лига справедливости",
        "Ла-ла лэнд",
        "Одержимость",
        "Скотт Пилигрим против...",
    ]
};

const adv = document.querySelector('.promo__adv'),
    genre = document.querySelector('.promo__genre'),
    bg = document.querySelector('.promo__bg'),
    movieList = document.querySelector('.promo__interactive-list'),
    confirmForm = document.querySelector('.confirm'),
    film = document.querySelector('.adding__input'),
    deleteFilm = document.querySelector('.delete');

confirmForm.addEventListener('click', addFilm);
deleteFilm.addEventListener('click', function(){
    console.log('jopa');
});

function addFilm() {
    if (film.value != "") {
        movieDB.movies.push(film.value);
        if (movieDB.movies[movieDB.movies.length - 1].length > 21) {
            film.value = movieDB.movies[movieDB.movies.length - 1].substr(0, 21) + "...";
        }
        movieList.innerHTML += `<li class='promo__interactive-item'>
        ${movieDB.movies.length}. ${film.value}
        <div class='delete'></div>
        </li>`;
        film.value = "";
    }
}

adv.remove();
genre.textContent = "драма";
bg.style = "background: url('../img/bg.jpg')";

movieDB.movies.sort();

movieList.innerHTML = "";

movieDB.movies.forEach(function (film, i) {
    movieList.innerHTML += `<li class='promo__interactive-item'>
    ${i + 1}. ${film}
    <div class='delete'></div>
    </li>`;
});
movieDB.movies.sort();
console.log(movieDB.movies);