import { createSlice} from "@reduxjs/toolkit";

const initialState = {
  term: ''
}

const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    searchTerm: (state, action) => {
      state.term = action.payload
    }
  }
});

export const { searchTerm } = searchSlice.actions;

export default searchSlice.reducer;