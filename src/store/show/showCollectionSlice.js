import {createSlice} from "@reduxjs/toolkit";


export const showCollectionSlice = createSlice({
  name: 'target',
  initialState: {
    showCollection: '',
    showItem: '',
    searchValue: '',
    login: '',
    showForm: '',
    registration: '',
  },
  reducers: {
    targetCollection: (state, action) => {
      state.showCollection = action.payload
    },
    targetItem: (state, action) => {
      state.showItem = action.payload
    },
    searchItem: (state, action) => {
      state.searchItem = action.payload
    },
    handleShowLogin: state => {
      state.login = !state.login
    },
    handleShowForm: (state, action) => {
      state.showForm =action.payload

    },
    handleShowRegistration: state => {
      state.registration = !state.registration
    },
  }
})

export const {
  handleShowForm,
  handleShowRegistration,
  targetCollection,
  targetItem,
  searchItem,
  handleShowLogin
} = showCollectionSlice.actions;
export default showCollectionSlice.reducer;