import { put, takeLatest,all} from 'redux-saga/effects'
import {REMOVE_PRODUCT,REMOVE_PRODUCT_SUCCESS,REMOVE_PRODUCT_FAILURE,READ_PRODUCT_LIST,READ_UPDATE,FAILURE_UPDATE,SUCCESS_UPDATE,READ_PRODUCT} from "../constants/contants";
import {readProductList,failureUpdate} from "../actions/index";
//const delay = (ms) => new Promise(res => setTimeout(res, ms));

export function* updateProduct() {
    console.log("Hi update!");
    yield put({ type: FAILURE_UPDATE });
  }
  export function* readProduct() {
    const sGetProductURL = 'http://localhost:4000/products';
    const response =  fetch(sGetProductURL);
    const responseBody = response.json();
    yield put({ type: READ_PRODUCT_LIST },readProductList(responseBody ));
  }
  export function* removeProductSuccess(id) {
    const sRequestUrl = 'http://localhost:4000/products/';
    return (
      fetch(sRequestUrl + id, {
   method: 'DELETE'
   }).then(res => {
       if(!res.ok)
       {
           
       }
       if(res.ok)
       {
           console.log("Success");
       }
   }));
  }


  export function* watchUpdateProduct() {
      console.log("hello");
    yield takeLatest(FAILURE_UPDATE, updateProduct);
  }
  export function* watchDeleteProduct() {
  yield takeLatest(REMOVE_PRODUCT, updateProduct);
}
  export function* watchReadProductList()
  {
    yield takeLatest(READ_PRODUCT_LIST, readProduct);
  }

  export default function* rootSaga() {
    yield all([
      watchUpdateProduct(),
      watchReadProductList()

    ])
  }