const API_KEY="4cda23a0c67b2b22653e49e188e28be8";

const requests={
    fetchTrending: `trending/all/week?api_key=${API_KEY}&language=en-US`,
fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
fetchNetflixOriginalsTV: `discover/tv?api_key=${API_KEY}&with_networks=213`,
fetchActionMovies:`/discover/movie?api_key=${API_KEY}&with_genres=28`,
fetchComedyMovies:`/discover/movie?api_key=${API_KEY}&with_genres=35`,
fetchHorrorMovies:`/discover/movie?api_key=${API_KEY}&with_genres=27`,
fetchRomanceMovies:`/discover/movie?api_key=${API_KEY}&with_genres=10749`,
fetchDocumentaryMovies:`/discover/movie?api_key=${API_KEY}&with_genres=99`,
fetchAdventureMovies:`/discover/movie?api_key=${API_KEY}&with_genres=12`,
fetchAnimationMovies:`/discover/movie?api_key=${API_KEY}&with_genres=16`,
fetchCrimeMovies:`/discover/movie?api_key=${API_KEY}&with_genres=80`,
fetchDramaMovies:`/discover/movie?api_key=${API_KEY}&with_genres=18`,
fetchFamilyMovies:`/discover/movie?api_key=${API_KEY}&with_genres=10751`,
fetchFantasyMovies:`/discover/movie?api_key=${API_KEY}&with_genres=14`,
fetchHistoryMovies:`/discover/movie?api_key=${API_KEY}&with_genres=36`,
fetchMusicMovies:`/discover/movie?api_key=${API_KEY}&with_genres=10402`,
fetchMysteryMovies:`/discover/movie?api_key=${API_KEY}&with_genres=9648`,
fetchScienceFictionMovies:`/discover/movie?api_key=${API_KEY}&with_genres=878`,
fetchTVMoviesMovies:`/discover/movie?api_key=${API_KEY}&with_genres=10770`,
fetchThrillerMovies:`/discover/movie?api_key=${API_KEY}&with_genres=53`,
fetchWarovies:`/discover/movie?api_key=${API_KEY}&with_genres=10752`,
fetchWesternMovies:`/discover/movie?api_key=${API_KEY}&with_genres=37`,
}

export default requests;
