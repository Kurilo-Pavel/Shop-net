import {createSlice} from "@reduxjs/toolkit";

export const showCollectionSlice = createSlice({
  name: 'showCollection',
  initialState: {
    showCollection: '',
    showItem: '',
    searchValue: '',
    login: '',
    showForm: '',
    registration: '',
    targetItem:'',
    inputField:'',
  },
  reducers: {
    targetCollection: (state, action) => {
      state.showCollection = action.payload
    },
    targetItem: (state, action) => {
      state.showItem = action.payload
    },
    searchItem: (state, action) => {
      state.searchValue = action.payload
    },
    handleShowLogin: state => {
      state.login = !state.login
    },
    handleShowForm: (state)=> {
      state.showForm =!state.showForm
    },
    handleShowRegistration: state => {
      state.registration = !state.registration
    },
    handleScaleImage:(state,action) => {
      state.targetImage=action.payload
    },
    inputField: (state, action) => {
      state.inputField = action.payload
    },
  }
})

export const {
  inputField,
  handleScaleImage,
  handleShowForm,
  handleShowRegistration,
  targetCollection,
  targetItem,
  searchItem,
  handleShowLogin
} = showCollectionSlice.actions;
export default showCollectionSlice.reducer;