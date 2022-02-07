import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

export const getCash = createAsyncThunk(
  'cash/getCashStatus',
  async () => {
    const response = await fetch(` https://www.nbrb.by/api/exrates/rates?periodicity=0`);
    const data = await response.json();
    return data
  });

export const getCashItem = createAsyncThunk(
  'cash/getCashItemStatus',
  async (current) => {
    const response = await fetch(`https://www.nbrb.by/api/exrates/rates/${current}?parammode=2`);
    const data = await response.json();
    return data
  }
)


export const cashSlice = createSlice({
  name: 'cash',
  initialState: {
    cash: '',
    cashItem: '',
    loading: '',
  },
  reducers: {},
  extraReducers: {
    [getCash.pending]: (state) => {
      state.loading = "loading"
    },
    [getCash.fulfilled]: (state, action) => {
      state.cash = action.payload;
      state.loading = "default"
    },
    [getCashItem.fulfilled]: (state, action) => {
      state.cashItem = action.payload;
    },
  }
})

export default cashSlice.reducer;