const key = 'c5638621bd68f7608b8a1a0e30662f5f'

const requests = {
    requestPopular: `https://api.themoviedb.org/3/movie/popular?api_key=${key}&language=en-US&page=1`,
    requestNetflixOriginals: `https://api.themoviedb.org/3/discover/tv?api_key=${key}&with_networks=213&language=en-US&page=1`,
	requestTopRatedMovies: `https://api.themoviedb.org/3/movie/top_rated?api_key=${key}&language=en-US&page=1`,
	requestActionMovies: `https://api.themoviedb.org/3/discover/movie?api_key=${key}&with_genres=28&language=en-US&page=1`,
	requestComedyMovies: `https://api.themoviedb.org/3/discover/movie?api_key=${key}&with_genres=35&language=en-US&page=1`,
	requestHorrorMovies: `https://api.themoviedb.org/3/discover/movie?api_key=${key}&with_genres=27&language=en-US&page=1`,
	requestRomanceMovies: `https://api.themoviedb.org/3/discover/movie?api_key=${key}&with_genres=10749&language=en-US&page=1`,
	requestDocumentaries: `https://api.themoviedb.org/3/discover/movie?api_key=${key}&with_genres=99&language=en-US&page=1`,
};

export default requests;