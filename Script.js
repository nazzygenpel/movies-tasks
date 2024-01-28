// Movie class to represent a movie
class Movie {
    constructor(title, genre, available) {
      this.title = title;
      this.genre = genre;
      this.available = available;
    }
  }
  
  // MovieStore class to manage the movie inventory
  class MovieStore {
    constructor() {
      this.movies = [];
    }
  
    // Add a new movie to the inventory
    addMovie(title, genre, available = true) {
      const newMovie = new Movie(title, genre, available);
      this.movies.push(newMovie);
    }
  
    // Rent a movie if available
    rentMovie(title) {
      const movieIndex = this.movies.findIndex(movie => movie.title === title);
  
      if (movieIndex !== -1 && this.movies[movieIndex].available) {
        this.movies[movieIndex].available = false;
        console.log(`You have successfully rented "${title}". Enjoy your movie!`);
      } else {
        console.log(`Sorry, "${title}" is not available for rent.`);
      }
    }
  
    // Display the list of available movies
    displayAvailableMovies() {
      const availableMovies = this.movies.filter(movie => movie.available);
      
      if (availableMovies.length > 0) {
        console.log("Available Movies:");
        availableMovies.forEach(movie => console.log(`${movie.title} - ${movie.genre}`));
      } else {
        console.log("No movies available at the moment.");
      }
    }
  }
  
  // Example usage:
  const movieStore = new MovieStore();
  
  movieStore.addMovie("Inception", "Sci-Fi");
  movieStore.addMovie("The Shawshank Redemption", "Drama");
  movieStore.addMovie("The Matrix", "Action");
  
  movieStore.displayAvailableMovies();
  
  movieStore.rentMovie("Inception");
  movieStore.displayAvailableMovies();