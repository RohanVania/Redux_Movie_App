import React from 'react'
import MovieCard from "../MovieCard/MovieCard"
import { useSelector } from 'react-redux'
import { getAllMovies,getAllSeries } from '../../features/movies/movieSlice';
import "./MovieListing.scss"

const MovieListing = () => {

  const movies = useSelector(getAllMovies);
  const series=useSelector(getAllSeries);

  // console.log("All movies Data in Movie Listing =>", selector)

  let renderMovies, renderSeries;
  renderMovies = movies.Response ?
    (<div className=''>
        Movies
      <div className='tw-gap-x-[12px] tw-gap-y-[22px] movielist-container  tw-w-full'>
        {
          movies.Search.map((element, index) => {
            return (
              <MovieCard key={index} element={element} />
            )
          })
        }
      </div>
    </div>
    ) : (
      <div className=''>
        <div className="shows-error">
          <h3>Error in Movie</h3>
        </div>
      </div>
    )

    renderSeries = series.Response ?
    (
      <div className='tw-gap-x-[12px] tw-gap-y-[22px] movielist-container  tw-w-full'>
        {
          series.Search.map((element, index) => {
            return (
              <MovieCard key={index} element={element} />
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
    <>
      <div className='tw-bg-yellow-30 '>
        <div className='tw-text-[30px] tw-text-[#829fcf] tw-mt-10 tw-mb-4'>
          Movies
        </div>
        <div className='tw-mb-10'>
          {
            renderMovies
          }
        </div>
      </div>
      <div className='tw-text-[30px] tw-text-[#829fcf]  tw-mb-10'>
          Series
        </div>
      <div className='tw-mb-[100px]'>
        {
          renderSeries
        }
      </div>
    </>
  )
}

export default MovieListing