import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {collection, doc, getDoc, getDocs, updateDoc,} from "firebase/firestore";
import {db} from "../../firebase";

export const getItems = createAsyncThunk(
  'items/getItemsStatus',
  async () => {
    const querySnapshot = await getDocs(collection(db, "Items"));
    const items = []
    querySnapshot.forEach((doc) => {
      items.push(doc.data())
    });
    return items;
  }
)

export const buyItems = createAsyncThunk(
  'items/buyItemsStatus',
  async (id) => {
    const docRef = doc(db, "Items", id);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      return docSnap.data()
    }
    return null;
  }
)

export const pushItemBasket = createAsyncThunk(
  'item/pushItemBasketStatus',
  async (value) => {
    console.log(value.user)
    const washingtonRef = doc(db, "users", value.user);
    await updateDoc(washingtonRef, {
     buyItem:value.buyItem,
    });
  }
)

export const itemsSlice = createSlice({
  name: 'items',
  initialState: {
    items: [],
    itemByu: [],
    buyItem: '',
  },
  reducers: {},
  extraReducers: {
    // [getItems.pending]: (state, action) => {
    // },
    [getItems.fulfilled]: (state, action) => {
      state.items = action.payload;
    },
    [buyItems.fulfilled]: (state, action) => {
      state.itemByu.push(action.payload)
    },
    [pushItemBasket.fulfilled]: (state, action) => {
      state.buyItem = action.payload
    },
  }
})


export default itemsSlice.reducer;