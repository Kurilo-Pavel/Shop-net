import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {collection, doc, getDoc, getDocs, updateDoc, deleteField} from "firebase/firestore";
import {db} from "../../firebase";

export const getItems = createAsyncThunk(
  'items/getItemsStatus',
  async () => {
    const querySnapshot = await getDocs(collection(db, "Items")); //получить все
    const items = []
    querySnapshot.forEach((doc) => {
      items.push(doc.data())
    });
    return items;
  }
)

export const buyItems = createAsyncThunk( //получить
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

export const pushItemBasket = createAsyncThunk( //обновить
  'item/pushItemBasketStatus',
  async (value) => {
    const itemRef = doc(db, "users", value.user);
    await updateDoc(itemRef, {
      buyItem: value.buyItem,
    });
  }
)
export const deleteItemCart = createAsyncThunk(
  'items/deleteItemCartStatus',
  async (value) => {
    const cityRef = doc(db, value.user, `buyItem.${value.id}`);
    await updateDoc(cityRef, {
      capital: deleteField()
    });
  }
)

export const itemsSlice = createSlice({
  name: 'items',
  initialState: {
    items: [],
    itemByu: [],
    buyItem: '',
    deleteItem: '',
    loading: '',
  },
  reducers: {
  },
  extraReducers: {
    [getItems.pending]: state => {
      state.loading = "loading"
    },
    [getItems.fulfilled]: (state, action) => {
      state.items = action.payload;
      state.loading = "default"
    },
    [buyItems.fulfilled]: (state, action) => {
      state.itemByu.push(action.payload)
      state.loading = "default"
    },
    [buyItems.pending]: state => {
      state.loading = "loading"
    },
    [pushItemBasket.fulfilled]: (state, action) => {
      state.buyItem = action.payload
      state.loading = "default"
    },
    [pushItemBasket.pending]: state => {
      state.loading = "loading"
    },
    [deleteItemCart.fulfilled]: (state, action) => {
      state.itemBuy = action.payload
    },
  }
})

export const{filterItem}= itemsSlice.actions;
export default itemsSlice.reducer;