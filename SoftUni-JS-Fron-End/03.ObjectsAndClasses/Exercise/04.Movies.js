function storesInfoAboutMovies(commands){
    const filmList = [];
    movies = {
        movieName : null,
        movieDirector : null,
        movieDate : null
    }
    availabeCommands = {
        addMove: function(obj, name){
            obj.movieName = name;
        },
        directedBy: function(obj, director){
            obj.movieDirector = director;
        },
        onDate: function(obj, date){
            obj.movieDate = date;
        }
    }
   
}

storesInfoAboutMovies([
    'addMovie FastandFurious',
    'addMovie Godfather'])