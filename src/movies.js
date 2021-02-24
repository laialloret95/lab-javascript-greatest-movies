import { movies } from './data.js'

// Iteration 1: All directors? - Get the array of all directors.
function getAllDirectors(movies) {
    let allDirectors = movies.map(function(movie) {
        return movie.director;
    });
    return allDirectors;
}

// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors. How could you "clean" a bit this array and make it unified (without duplicates)?

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(movies) {
    let spielbergDramas = movies.filter(function(movie) {
        return movie.director === "Steven Spielberg" && movie.genre.includes("Drama");
    });
    return spielbergDramas;
}

// Iteration 3: All rates average - Get the average of all rates with 2 decimals
function ratesAverage(movies) {
    let sumRates = movies.reduce(function(acc,movie) {
        return acc + movie.rate;
    }, 0);
    
    let averageRates = sumRates / movies.length;
    return Math.round(averageRates * 100) / 100;
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesRate(movies) {
    let dramaMovies = movies.filter(function(movie) {
        return movie.genre.includes("Drama");
    });
    let dramaMoviesAverage = ratesAverage(dramaMovies);
    return dramaMoviesAverage;
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(movies) {
    let sortedByYear = movies.sort(function(a,b){
        if (a.year < b.year) { return -1 } 
        else if (a.year > b.year){ return 1} 
        else { // if years are the same order aphabetically by title
            if(a.title < b.title) { return -1; }
            if(a.title > b.title) { return 1; }
            return 0;
        }
    });
    return sortedByYear
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes

// BONUS - Iteration 8: Best yearly rate average - Best yearly rate average
