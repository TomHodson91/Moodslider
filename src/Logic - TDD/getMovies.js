export function getMovies(calmMoodValue, sadMoodValue, wideAwakeMoodValue, fearlessMoodValue, movies) {
    return calmMoodValue >= 50 ?
        movies.filter(movie => (movie.mood === 'Calm')).map(movie => (movie.name)) :
        calmMoodValue < 50 ?
            movies.filter(movie => (movie.mood === 'Agitated')).map(movie => (movie.name)) :
            sadMoodValue >= 50 ?
                movies.filter(movie => (movie.mood === 'Sad')).map(movie => (movie.name)) :
                sadMoodValue < 50 ?
                    movies.filter(movie => (movie.mood === 'Happy')).map(movie => (movie.name)) :
                    wideAwakeMoodValue >= 50 ?
                        movies.filter(movie => (movie.mood === 'Wide Awake')).map(movie => (movie.name)) :
                        wideAwakeMoodValue < 50 ?
                            movies.filter(movie => (movie.mood === 'Tired')).map(movie => (movie.name)) :
                            fearlessMoodValue >= 50 ?
                                movies.filter(movie => (movie.mood === 'Fearless')).map(movie => (movie.name)) :
                                movies.filter(movie => (movie.mood === 'Scared')).map(movie => (movie.name));
};