import { takeEvery, put, call, takeLatest } from 'redux-saga/effects';
import { ADD_ONE_ROW } from './action';


function* getOneVoidRow() {
    console.log("saga로 왔습니다");
    try{
        //const { data } = yield call(api.searchCourier);
       // console.log(data);
        yield put(null);
    }catch(error){
       // yield put(allAction.loadCourierFail(error));
    }
}

export default function* getOneVoidRowSaga(){
   // ADD_ONE_ROW => axios 필요치 않음 yield takeLatest(ADD_ONE_ROW, getOneVoidRow);
}

