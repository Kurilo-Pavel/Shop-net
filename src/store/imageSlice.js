import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {db, storage} from "../firebase";
import {addDoc, collection, doc, setDoc, updateDoc} from "firebase/firestore";
import {getDownloadURL, ref, uploadBytes} from "firebase/storage";
import {v4 as uuidv4} from "uuid";

export const addImage = createAsyncThunk(
  'image/addImageStatus',
  async ({file, userName}) => {
    const storageRef = ref(storage, uuidv4());
    uploadBytes(storageRef, file).then(async (snapshot) => {
      const downloadURL = await getDownloadURL(snapshot.ref)
      const imageRef = doc(db, "users", userName);
      await updateDoc(imageRef, {
        image: downloadURL
      })
    })
  }
)

export const imageSlice = createSlice({
    name: 'image',
    initialState: {
      image: null,
    },

    extraReducers: {
      [addImage.fulfilled]: (state, action) => {
        state.image = action.payload;
      },
      [addImage.pending]: (state, action) => {
        // state.image = action.payload;
      },

    }
  }
);
export default imageSlice.reducer;