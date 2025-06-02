const url = "http://www.omdbapi.com/?apikey=8fb26870&"
const imgUrl = `https://img.omdbapi.com/?apikey=8fb26870&`


document.getElementById('search_button').addEventListener('click', async ()=> {
    const searchValue = document.getElementById('search_input').value.trim()
    console.log(searchValue)
    // Show the placeholder again if input is empty
    if (!searchValue) {
        document.querySelector('.movie_container').style.display = 'flex'
        document.getElementById('movie_list').innerHTML = ''
        return
    }

    // Hide the placeholder if search value is present
    document.querySelector('.movie_container').style.display = 'none'

    try {
        const res = await fetch(`${url}s=${searchValue}`) // Use 's' for searching multiple movies
        const data = await res.json()
        console.log(data)
        const movies = data.Search
        const movieList = document.getElementById('movie_list')
        movieList.innerHTML = ''

        if (movies) {
            for(const movie of movies) {
                const detailRes = await fetch(`${url}i=${movie.imdbID}`) // Use 'i' for getting details of each movie
                const detailData = await detailRes.json()

                const li = document.createElement('li')
                li.innerHTML = `
                <div class="movie_card">
                    <div class="movie_poster_container">
                        <img src="${detailData.Poster}" alt="${detailData.Title} Poster" class="movie_poster">
                    </div>

                    <div class="movie_info">
                        <div class="movie_info_top">
                            <h2 class="movie_title">${detailData.Title}</h2>
                            <p class="movie_ratings">⭐ ${detailData.imdbRating}</p>
                        </div>

                        <div class="movie_info_middle">
                            <p class="movie_duration movieText">${detailData.Runtime}</p>
                            <p class="movie_genre movieText">${detailData.Genre}</p>

                            <div class="watchlistBtn_Text movieText">
                                 <button class="add_to_watchlist_btn" data-id="${detailData.imdbID}">+</button>Watchlist
                            </div>
                        </div>

                        <div class="movie_info_bottom">
                            <p class="movie_description movieText">${detailData.Plot}</p>
                        </div>
                    </div>
                </div>
                <hr />`
                movieList.appendChild(li);

            // Add event listener for the "Add to Watchlist" button
        const addToWatchlistBtn = li.querySelector('.add_to_watchlist_btn');
        addToWatchlistBtn.addEventListener('click', () => {
            addToWatchlist(detailData);
        });
    }
        } else {
            movieList.innerHTML = '<li>No movies found</li>'
        }
    } catch (error) {
        console.error('Error fetching data:', error)
        alert('Something went wrong. Please try again later.')
    }
})

// Function to add a movie to the watchlist
function addToWatchlist(movie) {
    const watchlist = JSON.parse(localStorage.getItem('watchlist')) || [];
    console.log('Adding movie to watchlist:', movie); // Debugging log

    if (watchlist.some(item => item.imdbID === movie.imdbID)) {
        alert('This movie is already in your watchlist!');
        return;
    }

    watchlist.push({
        imdbID: movie.imdbID,
        Title: movie.Title,
        Poster: movie.Poster,
        Runtime: movie.Runtime,
        Genre: movie.Genre,
        Plot: movie.Plot,
        imdbRating: movie.imdbRating
    });

    localStorage.setItem('watchlist', JSON.stringify(watchlist));
    alert('Movie added to your watchlist!');
}

