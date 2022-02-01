"use strict"

let NumberOfFilms = +prompt("Скільки фільмів ти подивився?", 10);

let MovieQuestion = prompt("Один из последних просмотренных фильмов?", '');
let MovieBall = +prompt("На сколько оцените его?", 1);
const obj = {
    count: NumberOfFilms,
    movies: {MovieQuestion, MovieBall},
    actors: {},
    genres: [],
    privat: false
};


console.log(obj.movies);