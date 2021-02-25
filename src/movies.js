// import { movies } from './data.js'

// Iteration 1: All directors? - Get the array of all directors.
function getAllDirectors(movies) {
    let allDirectors = movies.map(function(movie) {
        return movie.director;
    });
    return allDirectors;
}

// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors. How could you "clean" a bit this array and make it unified (without duplicates)?
function uniqueDirectors(movies) {
    let allDirectors = getAllDirectors(movies);
    let uniqueDirectors = allDirectors.filter(function(director,index,arr){
        return arr.indexOf(director) == index;
    });
    return uniqueDirectors
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(movies) {
    let spielbergDramas = movies.filter(function(movie) {
        return movie.director === "Steven Spielberg" && movie.genre.includes("Drama");
    });
    return spielbergDramas.length;
}

// Iteration 3: All rates average - Get the average of all rates with 2 decimals
function ratesAverage(movies) {
	if (movies.length > 0) {
    let sumRates = movies.reduce(function(acc,movie) {
				if(movie.rate) {
        	return acc + movie.rate;
				} else {
					return acc + 0;
				};
    }, 0);
	 	let averageRates = sumRates / movies.length;
    return Math.round(averageRates * 100) / 100;
	 } else
	 	return 0;
};

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
    let sortedByYear = movies.slice().sort(function(a,b){
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
function orderAlphabetically(movies) {
    let sortedByTitle = movies.slice().sort(function(a,b){
        if(a.title < b.title) { return -1; }
        if(a.title > b.title) { return 1; }
        return 0;
    });
    let first20Movies = sortedByTitle.slice(0,20);
    let titleName = first20Movies.map(function(movie) {
			return movie.title
		});
		return titleName
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(movies) {
    let copyMovies = movies.map(obj => ({...obj})); // cloning movies array into new one
    copyMovies.forEach(function(movie) {
        movie.duration = movie.duration.replace(/[^\d.-]/g, ''); // extract numbers
				if (movie.duration.length === 1) {
					let hours = parseInt(movie.duration); // select hours
        	movie.duration = (hours * 60); // convert hours and add minutes
				} else if (movie.duration.length === 2) {
					let minutes = parseInt(movie.duration);
					movie.duration = minutes;
				} else {
					let minutes = parseInt(movie.duration.slice(-2)); // select minutes
        	let hours = parseInt(movie.duration[0]); // select hours
        	movie.duration = (hours * 60) + minutes; // convert hours and add minutes
				}
    });
		return copyMovies
}

// BONUS - Iteration 8: Best yearly rate average - Best yearly rate average
function bestYearAvg(movies) {
	if (movies.length === 0) return null;
    // Calculate the sums and group data (while tracking count)
    let moviesByYear = movies.reduce(function(m, d){
        if(!m[d.year]){
            m[d.year] = {...d, count: 1};
            return m;
        }
        m[d.year].rate += d.rate;
        m[d.year].count += 1;
        return m;
    },[]);

    // Calculate average per year
    moviesByYear.forEach(function(movie) {
            movie.average = Math.round((movie.rate / movie.count) * 100) / 100;
    });

    moviesByYear.sort(function(a,b) {
        if (a.average > b.average) {return -1}
        else if (a.average < b.average) {return 1}
        return 0;
    });

    let BestYear = moviesByYear[0];
    return `The best year was ${BestYear.year} with an average rate of  ${BestYear.average}`
}
