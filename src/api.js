const API_KEY = '896d602b957e8b1143086fd8f40318e2';

const categories = [
    {
        name: "trending",
        title: "Em alta",
        path: `/trending/all/week?api_key=${API_KEY}&language=pt_BR`,
    },
    {
        name: "netflixOriginals",
        title: "Originais Netflix",
        path: `/discover/tv?api_key=${API_KEY}&with_networks=213`,
    },
    {
        name: "topRated",
        title: "Populares",
        path: `/movie/top_rated?api_key=${API_KEY}&language=pt_BR`,
    },
    {
        name: "comedy",
        title: "Comédias",
        path: `/discover/tv?api_key=${API_KEY}&with_networks=35`,
    },
    {
        name: "romances",
        title: "Romances",
        path: `/discover/tv?api_key=${API_KEY}&with_networks=10749`,
    },
    {
        name: "documentaries",
        title: "Documentários",
        path: `/discover/tv?api_key=${API_KEY}&with_networks=99`,
    },
];

export const getMovies = async (path) => {

try{
    let url = `https://api.themoviedb.org/3${path}`;
    const response = await fetch(url);
    return await response.json();

    } catch (error){
        console.log("error getMovies: ", error);
    }
};

export default categories;
