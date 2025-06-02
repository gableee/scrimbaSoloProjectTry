// Function to display the watchlist
document.addEventListener('DOMContentLoaded', () => {
    const watchlist = JSON.parse(localStorage.getItem('watchlist')) || [];
    const watchlistContainer = document.getElementById('watchlist_container');

    if (watchlist.length === 0) {
        watchlistContainer.innerHTML = '<p>Your watchlist is empty! <a href="./index.html">Search for movies</a></p>';
        return;
    }

    watchlist.forEach(movie => {
        const li = document.createElement('li');
        li.innerHTML = `
        <div class="movie_card">
            <div class="movie_poster_container">
                <img src="${movie.Poster}" alt="${movie.Title} Poster" class="movie_poster">
            </div>

            <div class="movie_info">
                <div class="movie_info_top">
                    <h2 class="movie_title">${movie.Title}</h2>
                    <p class="movie_ratings">⭐ ${movie.imdbRating}</p>
                </div>

                <div class="movie_info_middle">
                    <p class="movie_duration movieText">${movie.Runtime}</p>
                    <p class="movie_genre movieText">${movie.Genre}</p>
                </div>

                <div class="movie_info_bottom">
                    <p class="movie_description movieText">${movie.Plot}</p>
                </div>

                <button class="remove_from_watchlist_btn" data-id="${movie.imdbID}">Remove</button>
            </div>
    
        </div>
        <hr />`;

        watchlistContainer.appendChild(li);

        // Add event listener for the "Remove" button
        const removeFromWatchlistBtn = li.querySelector('.remove_from_watchlist_btn');
        removeFromWatchlistBtn.addEventListener('click', () => {
            removeFromWatchlist(movie.imdbID);
        });
    });
});

// Function to remove a movie from the watchlist
function removeFromWatchlist(imdbID) {
    const watchlist = JSON.parse(localStorage.getItem('watchlist')) || [];
    const updatedWatchlist = watchlist.filter(movie => movie.imdbID !== imdbID);

    // Update localStorage with the new watchlist
    localStorage.setItem('watchlist', JSON.stringify(updatedWatchlist));

    // Reload the page to reflect changes
    location.reload();
}