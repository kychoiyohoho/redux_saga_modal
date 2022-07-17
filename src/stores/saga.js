import axios from 'axios';
import { takeEvery, put, call, takeLatest } from 'redux-saga/effects';
import api from '../api';
import { actionTypes } from './action';



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

function* regisSpecDocSaga(action) {
    console.log("regisSpecDocSaga 왔습니다",JSON.stringify({...action.SpecDocData[0]}));
   
    try{
       
        // const  {data}  = yield call(axios.post('http://localhost:8282/specdoc/register'),
        // JSON.stringify({...action.SpecDocData}),{  headers:{ "Content-Type": `application/json`}}
        //   );
         const  {data}  = yield call(axios.post("http://localhost:8282/specdoc/register",JSON.stringify({...action.SpecDocData[0]}),
         { headers:{
            "Content-Type":"application/json"
        },}
         )
      
         
        
          );
       console.log("등록된data",{data});
        yield put(null);
    }catch(error){
       // yield put(allAction.loadCourierFail(error));
    }
}

export default function* SpecDocsaga(){
  yield takeLatest(actionTypes.REGISTER_SPECDOCS, regisSpecDocSaga);
}

