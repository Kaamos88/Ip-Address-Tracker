import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const url = 'https://geo.ipify.org/api/v2';
const KEY = 'at_BiPMzUTHjHv5HuJnmkaWSkYDk6CQZ';

export const getGeoIp = createAsyncThunk('search/getGeoIp',
  async (_, thunkAPI) => {
    const {term} = thunkAPI.getState().search;
    try {
      const response = await axios.get(`${url}/country,city`, {
        params: {
          apiKey: KEY,
          domain: term,
        }
      })
      return response.data
    } catch (err) {
      return thunkAPI.rejectWithValue('something was wrong' + err)
    }
  }
);

const initialState = {
  text: '',
  term: '',
  api: [],
  isLoading: true,
}

const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    setText: (state, action) => {
      state.text = action.payload
    },
    searchTerm: (state, action) => {
      state.term = action.payload
    },
  },
  extraReducers: {
    [getGeoIp.pending]: (state) => {
      state.isLoading = true;
    },
    [getGeoIp.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.api = action.payload

    },
    [getGeoIp.rejected]: (state, action) => {
      state.isLoading = false;
      console.log(action.payload)
    }
  },
});

export const { setText, searchTerm } = searchSlice.actions;

export default searchSlice.reducer;