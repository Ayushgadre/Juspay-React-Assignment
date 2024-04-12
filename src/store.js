// import { createStore, applyMiddleware } from "redux";
// import { rootReducer } from "./redux/rootReducer"; // Updated import for rootReducer
// import thunk from "redux-thunk"; // Correct import for thunk

// // Create the Redux store using the rootReducer and apply middleware (thunk for async actions)
// const store = createStore(rootReducer, applyMiddleware(thunk));

// export default store;
// import { configureStore } from "@reduxjs/toolkit";
// import rootReducer from "./reducers"; // Your combined reducers
// import { rootReducer } from "./reducers";

// const store = configureStore({
//   reducer: rootReducer,
//   // Other middleware and options if needed
// });

// export default store;

import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./reducers"; // Import rootReducer only once

const store = configureStore({
  reducer: rootReducer,
  // Other middleware and options if needed
});

export default store;
