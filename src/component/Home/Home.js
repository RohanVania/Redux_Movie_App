import React, { useEffect } from 'react'
import MovieListing from "../MovieListing/MovieListing"
import {AxiosClient} from  "../../common/api/movieApi"
import { APIKEY } from '../../common/api/movieApiKey'
import {addMovie,getAllMovies} from "../../features/movies/movieSlice"
import {useDispatch,useSelector} from "react-redux"

const Home = () => {
  
  const dispatch=useDispatch();
  const fetchMovies=async (searchterm)=>{
     try{
      return await AxiosClient.get(`?apikey=${APIKEY}&s=${searchterm}&type=movie`)
    }catch(err){
        console.log("Erroring in Fetching movie data")
        throw new Error('Failed to fetch movies'); // Rethrow with a custom error message
    }
  } 

  useEffect(()=>{
      const searchterm='harry'
      const fetchdata=async ()=>{
        try{
          const {data}=await fetchMovies(searchterm)  // You also have to catch the error throwed by fetchMovies
          dispatch(addMovie(data))

        }catch(error){
          console.log('Error in fetchData:', error);
        }
      }
      fetchdata();
  },[])

  return (
    <div className=''>
      <div className='banner-img tw-text-[30px] tw-text-[#829fcf] tw-my-3'>
        Movies
      </div>
      <MovieListing/>
    </div>
  )
}

export default Home