import { configureStore } from "@reduxjs/toolkit";

import catsReducer from "./features/cats/catsSlice";

const store = configureStore({
  reducer: {
    cats: catsReducer,
  },
});

export default store;
// import { createStore, applyMiddleware } from "redux";
// import thunkMiddleware from "redux-thunk";
// import { composeWithDevTools } from "redux-devtools-extension";
// import rootReducer from "./reducer";

// const composedEnhancer = composeWithDevTools(applyMiddleware(thunkMiddleware));

// const store = createStore(rootReducer, composedEnhancer);

// export default store;