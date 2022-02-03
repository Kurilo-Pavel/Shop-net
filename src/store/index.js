import {configureStore} from "@reduxjs/toolkit";

import authReducer from "./auth/authSlice";
import userReducer from "./user/userSlice";
import cashReducer from "./cash/cashSlice";
import itemsReducer from "./items/itemsSlice";
import showCollectionReducer from "./show/showCollectionSlice"
import filterItemReducer from "./items/filterItemSlice";
import searchReducer from "./show/showCollectionSlice";
import imageReducer from "./imageSlice";

export default configureStore({
  reducer: {
    auth: authReducer,
    user: userReducer,
    cash: cashReducer,
    items: itemsReducer,
    showCollection: showCollectionReducer,
    filterItem: filterItemReducer,
    searchItem: searchReducer,
    image: imageReducer,

  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
