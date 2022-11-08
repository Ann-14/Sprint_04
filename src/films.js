const movies = require("./data");

// Exercise 1: Get the array of all directors.
function getAllDirectors(array) {
  const result = array.map(film => film.director)
  // console.log("EXERCICE 1 ->", result);
  return result;
}

// Exercise 2: Get the films of a certain director
function getMoviesFromDirector(array, director) {
  const moviesFromDirector = array.filter(mov => mov.director === director)
  return moviesFromDirector
}

// Exercise 3: Calculate the average of the films of a given director.
function moviesAverageOfDirector(array, director) {
  let avgScore = 0
  let strToNum = 0
  let currentScore = 0
  //we save given arr by function in a variable
  const moviesFromDirector = getMoviesFromDirector(array, director)
  const sumScore = moviesFromDirector.reduce((acc, curr) => {
    //avoiding undefined
    currentScore = curr.score = '' || undefined || NaN ? 0 : curr.score
    acc += currentScore;
    return acc
  }, 0)

  avgScore = Number((sumScore / moviesFromDirector.length)).toFixed(2)
  //toFixed gives back a str!
  strToNum = parseFloat(avgScore)
  return strToNum
}

// Exercise 4:  Alphabetic order by title 
function orderAlphabetically(array) {
  const titles = array.map(film => film.title).sort().slice(0, 20)
  console.log(titles);
  return titles
}

// Exercise 5: Order by year, ascending
function orderByYear(array) {
  const arr = array.map(film => ({ ...film }))
  arr.sort((a, b) => {
    if (a.year === b.year) {
      if (a.title < b.title) {
        return -1;
      }
      if (a.title > b.title) {
        return 1;
      }
      return 0;

    } else {
      return a.year - b.year
    }
  })
  return arr
}

// Exercise 6: Calculate the average of the movies in a category
function moviesAverageByCategory(array, genre) {
  const arrFilms = array.map(film => ({...film}))
  let filmByGenre = []
  let total = 0

  //we select movies of one genre
  filmByGenre = arrFilms.filter(film => film.genre.includes(genre)).filter(film => film.score !== '')
  //We put films of a selected genre in a variable and calculate total score

  //  filmByGenre.reduce((acc,curr) => {
  //  total = acc + curr.score
  //  return total
  // },0)
  //  total = filmByGenre.reduce((acc,curr) => acc + curr.score,0) / filmByGenre.length.toFixed(2)

  total = filmByGenre.reduce((acc, curr) => acc + curr.score, 0)
  total = (total / filmByGenre.length).toFixed(2)
  //toFixed gives back a str!
  total = parseFloat(total)
  return total
}

// Exercise 7: Modify the duration of movies to minutes
function hoursToMinutes(array) {
  const arrFilms = array.map(film => ({ ...film }))

  arrFilms.forEach(film => {
    if (film.duration.length === 7){
      film.duration = parseInt(film.duration[0] * 60) + (parseInt(film.duration.slice(3, 4)))
    }
    if (film.duration.length === 8) {
      film.duration = parseInt(film.duration[0] * 60) + (parseInt(film.duration.slice(3, 5)))
    }
    if (film.duration.length === 2) {
      film.duration = parseInt(film.duration[0] * 60)
    }
    return arrFilms
  })
  return arrFilms
}
// Exercise 8: Get the best film of a year
function bestFilmOfYear(array, year) {
  const arrFilms = array.map(film => ({ ...film }))
  let filmsOfYear = []
  let finalArr = []
  let bestFilm = 0

  arrFilms.forEach(film => {
    if (film.year === year) {
      filmsOfYear.push(film)
    }
  })
  filmsOfYear.forEach(film => {
    if (bestFilm < film.score) {
      bestFilm = film
    }
    return bestFilm
  })
  finalArr.push(bestFilm)
  return finalArr;
}

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = {
    getAllDirectors,
    getMoviesFromDirector,
    moviesAverageOfDirector,
    orderAlphabetically,
    orderByYear,
    moviesAverageByCategory,
    hoursToMinutes,
    bestFilmOfYear,
  };
}
