import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";


export const getCash = createAsyncThunk(
  'cash/getCashStatus',
  async (cur, {rejectWithValue, dispatch})=> {
    const response = await fetch(`https://www.nbrb.by/api/exrates/rates/${cur}?parammode=2`);
    const data = await response.json();
    dispatch(setCash(data.Cur_OfficialRate))
    // return data.Cur_OfficialRate
  });

const initialState = {
  cash: [0],
}

export const cashSlice = createSlice({
  name: 'cash',
  initialState,
  reducers: {
    setCash: (state, action) => {
      state.cash = action.payload
    }
  },
  extraReducers: {
    [getCash.pending]: (state) => {

    },
    [getCash.fulfilled]: (state, action) => {
      // state.cash = action.payload ;
    },
    [getCash.rejected]: (state, action) => {
    }
  }
})
export const {setCash} = cashSlice.actions;
// export const {handle}=cashSlice.actions;
export default cashSlice.reducer;