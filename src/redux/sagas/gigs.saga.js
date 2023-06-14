import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

//this issues our call to the server to where we will get our gigs array, we then send it away to the reducer to hold in our store
function* fetchGigs() {
	try {
		const response = yield axios.get('/api/gig/available');
		yield put({ type: 'SET_GIGS', payload: response.data });
	} catch {
		console.log('error getting gig response');
	}
}


function* postGigs(action) {
    try{
        const dbResponse = yield axios.post('/api/gig', action.payload)
        console.log ('got the req', action.payload);

        yield put({type: 'FETCH_GIGS'})
    } catch {
        console.log('error in posting');
    }
}

function* gigsSaga() {
	yield takeLatest('FETCH_GIGS', fetchGigs);
	yield takeLatest('POST_GIG', postGigs);
}

export default gigsSaga;
