import { configureStore, createSlice } from '@reduxjs/toolkit';

const initialState = { userToken: "", tabChosen: "home", resultsFound: [], albumsFound: [] }


const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        login: (state, action) => {
            state.userToken = action.payload

        },
        logout: (state) => {
            state.userToken = ""

        },

        chooseTab: (state, action) => {
            state.tabChosen = action.payload
            console.log(action.payload)
        },

        getResults: (state, action) => {
            state.resultsFound = action.payload
        },

        getAlbums: (state, action) => {
            state.albumsFound = action.payload
            console.log(action.payload)
        }

    },
});


export const { login, logout, chooseTab, getResults, getAlbums } = userSlice.actions


export const store = configureStore({
    reducer: {
        user: userSlice.reducer,
    }
})