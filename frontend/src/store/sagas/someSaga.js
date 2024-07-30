import { takeEvery, call, put } from 'redux-saga/effects';
import { fetchFlights } from '../actions/FlightActions';
import { getAllFlights} from '../../services/api';

function* fetchSomeData() {
  try {
    const data = yield call(getAllFlights);
    yield put({ type: 'SOME_ACTION_SUCCESS', payload: data });
  } catch (error) {
    yield put({ type: 'SOME_ACTION_FAILURE', error });
  }
}
export function* watchSomeAction() {
  yield takeEvery(fetchFlights, fetchSomeData);
}
