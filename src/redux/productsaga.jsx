import { takeEvery, put } from "redux-saga/effects";

function* getProducts() {
  let data = yield fetch("http://localhost:3005/products2");
  data = yield data.json();
  yield put({ type: "setproductlist", data });
  //   console.log(data);
}

function* searchQuery(payload) {
  let data = yield fetch(`http://localhost:3005/products2?q=${payload.query}`);
  data = yield data.json();
  yield put({ type: "setproductlist", data });
  //   console.log(data);
}

function* productSaga() {
  yield takeEvery("productlist", getProducts);
  yield takeEvery("productSearch", searchQuery);
}

export default productSaga;
