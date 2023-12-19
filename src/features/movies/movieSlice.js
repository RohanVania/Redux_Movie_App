import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { fetchMovies, fetchSeries } from "../../common/api/movieApi"


export const fetchAsyncMovies = createAsyncThunk('movies/fetchAsyncMovies', async () => {
    try {
        const searchterm = "harry";
        const { data } = await fetchMovies(searchterm);
        return data;
    } catch (err) {
        console.log("Error in Fetching Async Movies ! ", err)
    }
})

export const fetchAsycnSeries = createAsyncThunk('series/fetchAsyncSeries', async () => {
    try {
        const searchterm = "harry";
        const { data } = await fetchSeries(searchterm);
        return data;
    } catch (err) {
        console.log("Error occured in Fetching Asysn Series ! ", err)
    }
})

const initialState = {
    movies: {},
    series: {},
}

const movieSlice = createSlice({
    name: 'movies',
    initialState,

    reducers: {
        addMovie: (state, { payload }) => {
            state.movies = payload
        }
    },

    extraReducers: (builder) => {
        builder.addCase(fetchAsyncMovies.pending, (state, action) => {
            console.log("Pending State =>", state, " Action =>", action);
        })

        builder.addCase(fetchAsyncMovies.fulfilled, (state, { payload }) => {
            console.log("Fulfilled =>", payload);
            return { ...state, movies: payload }
        })

        builder.addCase(fetchAsycnSeries.pending, (state, action) => {
            console.log("Pending State =>", state, " Action =>", action);
        })

        builder.addCase(fetchAsycnSeries.fulfilled, (state, { payload }) => {
            console.log("Fulfilled =>", payload);
            return { ...state, series: payload }
        })

    }
})

export const { addMovie } = movieSlice.actions;
export const getAllMovies = (state) => state.moviesReducer.movies
export const getAllSeries =(state)=>state.moviesReducer.series

export default movieSlice.reducer;
