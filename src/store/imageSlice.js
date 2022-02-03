import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import { db, storage} from "../firebase";
import {addDoc, collection, doc, setDoc} from "firebase/firestore";
import {getDownloadURL, ref, uploadBytes} from "firebase/storage";
import {v4 as uuidv4} from "uuid";

export const addImage=createAsyncThunk(
  'image/addImageStatus',
async (file)=> {

  const storageRef = ref(storage, uuidv4());
  uploadBytes(storageRef, file).then(async (snapshot) => {
    const downloadURL = await getDownloadURL(snapshot.ref)
    addDoc(collection(db, 'image'), {
      photo: downloadURL,

    })
    // console.log(downloadURL)
    // this.setState({
    //   image: downloadURL,
    // })

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
        state.image = action.payload;
      },

    }
  }
);
export default imageSlice.reducer;