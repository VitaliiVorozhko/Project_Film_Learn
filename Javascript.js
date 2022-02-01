"use strict"

let NumberOfFilms = +prompt("Скільки фільмів ти подивився?", 10);


const objDB = {
    count: NumberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

let a = prompt("Один из последних просмотренных фильмов?", '');
let b = +prompt("На сколько оцените его?", 1);

objDB[a] = b;
console.log(objDB);