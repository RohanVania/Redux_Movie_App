
import axios from "axios";
import {APIKEY} from "./movieApiKey"


export const AxiosClient=axios.create({
    baseURL:`http://www.omdbapi.com`
})

export const fetchMovies = async (searchterm) => {
    try {
        return await AxiosClient.get(`?apikey=${APIKEY}&s=${searchterm}&type=movie`)
    } catch (err) {
        console.log("Erroring in Fetching movie data")
        throw new Error('Failed to fetch movies'); // Rethrow with a custom error message
    }
}

export const fetchSeries =async (searchterm) =>{
    try{
        return await AxiosClient.get(`?apikey=${APIKEY}&s=${searchterm}&type=series`)
    }catch(err){
        console.log("Error in Fetching Movie Data");
        throw new Error('Failed to Fetch Movies');
    }
}


