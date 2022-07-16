import { all, fork } from "redux-saga/effects";

import saga from "../stores/saga";

export default function* rootSaga() {
  yield all([fork(saga)]);
}