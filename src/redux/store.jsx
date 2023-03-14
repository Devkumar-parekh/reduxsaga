import rootReducer from "./rootreducer";
import { configureStore } from "@reduxjs/toolkit";
import productSaga from "./productsaga";
import createSagaMiddleware from "@redux-saga/core";

const sagaMiddleware = createSagaMiddleware();
const store = configureStore({
  reducer: rootReducer,
  middleware: () => [sagaMiddleware],
});

sagaMiddleware.run(productSaga);

export default store;
