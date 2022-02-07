import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {doc, getDoc, setDoc, updateDoc} from "firebase/firestore";
import {auth, db} from "../../firebase";
import {createUserWithEmailAndPassword, updateProfile} from "firebase/auth";


export const getUser = createAsyncThunk(
  'user/getUserStatus',
  async (email) => {
    const docRef = doc(db, 'users', email);
    const docSnap = await getDoc(docRef)
    if (docSnap.exists()) {
      return docSnap.data();
    }
    return null
  }
)

export const setUser = createAsyncThunk(
  'user/setUserStatus',
  async (value) => {
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
        })
      })
  }
)
export const setFieldUser = createAsyncThunk(
  'user/setFieldUserStatus',
  async ({valueField, field, user}) => {
    const itemRef = doc(db, "users", user);
    switch (field) {
      case "First name":
        return await updateDoc(itemRef, {
          firstName: valueField
        });
      case "Last name":
        return await updateDoc(itemRef, {
          lastName: valueField
        });
      case "Email":
        return await updateDoc(itemRef, {
          email: valueField
        });
      case "City":
        return await updateDoc(itemRef, {
          city: valueField
        });
      default:
        return null
    }
  });


export const userSlice = createSlice({
    name: 'user',
    initialState: {
      data: null,
      setData: '',
      fieldUser: '',
      loading: '',
    },

    extraReducers: {
      [getUser.pending]: state => {
        state.loading = "loading"
      },
      [getUser.fulfilled]: (state, action) => {
        state.data = action.payload;
        state.loading = "default"
      },
      [setUser.fulfilled]: (state, action) => {
        state.setData = action.payload;
      },
      [setFieldUser.fulfilled]: (state, action) => {
        state.fieldUser = action.payload;
      },
    }
  }
);
export default userSlice.reducer;