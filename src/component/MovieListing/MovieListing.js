import React from 'react'
import MovieCard from "../MovieCard/MovieCard"
import { useSelector } from 'react-redux'
import { getAllMovies } from '../../features/movies/movieSlice';
import "./MovieListing.scss"

const MovieListing = () => {

  const selector = useSelector(getAllMovies);
  console.log("All movies Data in Movie Listing =>", selector)
  let renderMovies;
  renderMovies = selector.Response ?
    (
      <div className='tw-gap-x-[12px] tw-gap-y-[22px] movielist-container'>
        {
          selector.Search.map((element,index)=>{
            return (
              <MovieCard key={index} element={element}/>
            )
          })
        }
      </div>
    ) : (
      <div className=''>
        <div className="shows-error">
          <h3>Error in Movie</h3>
        </div>
      </div>
    )



  return (
    <div className='tw-bg-yellow-30 tw-mb-[100px]'>{
      renderMovies
    }</div>
  )
}

export default MovieListing