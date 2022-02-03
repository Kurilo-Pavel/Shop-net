import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {doc, getDoc, setDoc} from "firebase/firestore";
import {auth, db} from "../../firebase";
import {createUserWithEmailAndPassword, updateProfile} from "firebase/auth";


export const getUser = createAsyncThunk(
  'user/getUserStatus',
  async (email) => {
    const docRef = doc(db, 'users', email);

    const docSnap = await getDoc(docRef)
    if (docSnap.exists()) {
    return   docSnap.data();
    }
    return  null
  }
)

export const setUser=createAsyncThunk(
  'user/setUserStatus',
  async (value)=>{
    createUserWithEmailAndPassword(auth, value.email, value.password)
      .then(async () => {
        await updateProfile(auth.currentUser, {displayName: value.email});
        setDoc(doc(db, 'users', value.email), {
          id: auth.currentUser.uid,
          username: value.firstName,
          firstName: value.firstName,
          lastName: value.lastName,
          email: value.email,
          telNumber: value.telNumber,
          password: value.password,
          gender: value.gender,
          city: value.city,
          photo: value.photo,
        })
      })
  }
)

export const userSlice = createSlice({
    name: 'user',
    initialState: {
      data: null,
      setData:'',
    },

    extraReducers: {
      [getUser.pending]: (state, action) => {
        state.data = action.payload;
      },
      [getUser.fulfilled]: (state, action) => {
        state.data = action.payload;
      },
      [setUser.fulfilled]:(state,action)=>{
        state.setData=action.payload;
      },

    }
  }
);
export default userSlice.reducer;