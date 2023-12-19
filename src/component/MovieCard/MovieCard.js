import React from 'react'
import {Link} from "react-router-dom"
const MovieCard = ({ element }) => {
  // console.log(element)
  return (
    <div className='tw-bg-[#161f2c] movie-card tw-shadow-xl hover:tw-scale-[1.05] tw-duration-100'>
      <Link to={`/movie/${element.imdbID}`}>
        <div className='tw-w-full '>
          <img src={element.Poster} alt={element.Title} className='tw-w-full tw-h-full tw-object-cover' />
        </div>
        <div className='tw-py-4 tw-px-2 tw-flex tw-flex-col tw-gap-7 tw-justify-between tw-w-full tw-min-h-[170px]'>
          <h1 className='tw-text-white tw-font-[600] tw-text-[21px]'>{element.Title}</h1>
          <p className='tw-text-white tw-text-opacity-[0.7] tw-font-[400] tw-text-[19px]'>{element.Year}</p>
        </div>
      </Link>
    </div>
  )
}

export default MovieCard