
import {configureStore} from "@reduxjs/toolkit"
import  movieSlice from "../features/movies/movieSlice"


const store=configureStore({
    reducer:{
        moviesReducer:movieSlice
    }
    
})

export {store}

// STEPS IN USING REDUX TOOLKIT
