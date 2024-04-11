import { createStore, applyMiddleware } from "redux";
import { rootReducer } from "./redux/rootReducer";
import thunk from "redux-thunk";

// Create the Redux store using the rootReducer and apply middleware (thunk for async actions)
const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
