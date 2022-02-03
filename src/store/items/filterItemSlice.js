// import {createSlice} from "@reduxjs/toolkit";
//
// export const filterItems = ({items,value}) => {
//   return items.filter(item => {
//       return item.name.toLowerCase().includes(value.toLowerCase())
//     }
//   )
// }
//
// export const filterItemsSlice = createSlice({
//   name: 'item',
//   initialState: {
//     filterItem: '',
//   },
//   reducers: {
//     filterItems: (state, action) => {
//       state.filterItem = action.payload
//     }
//   },
//
// })
//
// // export const {filterItems} = filterItemsSlice.actions;
// export default filterItemsSlice.reducer;