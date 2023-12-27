import axios from "axios";

const movieDB = axios.create({
    baseURL: 'https://api.themoviedb.org/3/movie',
    params: {
        api_key: '277a482ec740e613820240dca14c09ea',
        language: 'es-ES'
    }
})

export default movieDB;