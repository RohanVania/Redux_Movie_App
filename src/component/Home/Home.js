import React, { useEffect } from 'react'
import MovieListing from "../MovieListing/MovieListing"
import {fetchAsyncMovies,fetchAsycnSeries} from "../../features/movies/movieSlice"
import {useDispatch} from "react-redux"
import {fetchMovies} from  "../../common/api/movieApi"

const Home = () => {
  
  const dispatch=useDispatch();



  useEffect(()=>{
      dispatch(fetchAsyncMovies())
      dispatch(fetchAsycnSeries())
  },[])

  return (
    <div className=''>
      <div className='banner-im '></div>
      <MovieListing/>
    </div>
  )
}

export default Home