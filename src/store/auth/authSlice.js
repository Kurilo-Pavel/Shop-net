import {createSlice} from '@reduxjs/toolkit';

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    currentUser: '',
  },
  reducers: {
    setUser:(state, action)=>{
      state.currentUser=action.payload;
    },
  },
});
export const {setUser} = authSlice.actions;
export default authSlice.reducer;

