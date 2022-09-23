const API_KEY = process.env.API_KEY;

export default {
    fetchTrending: {
        title: 'Trending',
        url: `/trending/all/week?api_key=${API_KEY}&language=en=US`
    },
    fetchTopRated: {
        title: "Top Rated",
        url: `/movie/top_rated?api_key=${API_KEY}&language=en=US`
    },
    fetchComedyMovies: {
        title: "Comedy",
        url: `/discover/movie?api_key=${API_KEY}&with_generes=35`
    },
    fetchHorrorMovies: {
        title: "Horror",
        url: `/discover/movie?api_key=${API_KEY}&with_generes=27`
    },
    fetchRomanceMovies: {
        title: "Romance",
        url: `/discover/movie?api_key=${API_KEY}&with_generes=10749`
    },
    fetchMysteryMovies: {
        title: "Mystery",
        url: `/discover/movie?api_key=${API_KEY}&with_generes=9648`
    },
    fetchScifiMovies:{
        title:"Sci-fi",
        url:`/discover/movie?api_key=${API_KEY}&with_genres=878`
    },
    fetchAnimatedMovies:{
        title:"Animated",
        url:`/discover/movie?api_key=${API_KEY}&with_genres=16`
    },
    fetchTV:{
        title:"TV Movies",
        url:`/discover/movie?api_key=${API_KEY}&with_genres=10770`
    },
}