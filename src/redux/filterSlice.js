import { createSlice } from "@reduxjs/toolkit";


const filtersInitialState = {
    value: ''
  };

const filterSlice = createSlice({
    name: 'filter',
    initialState:filtersInitialState,
    reducers:{
        changeFilter: {
            reducer(state, action){
                state.value = action.payload
            }
        }
    }
})

export const { changeFilter } = filterSlice.actions;
export const filterReducer = filterSlice.reducer;