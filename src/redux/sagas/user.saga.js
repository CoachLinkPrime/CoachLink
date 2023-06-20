import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

// worker Saga: will be fired on "FETCH_USER" actions
function* fetchUser() {
  try {
    const config = {
      headers: { 'Content-Type': 'application/json' },
      withCredentials: true,
    };

    // the config includes credentials which
    // allow the server session to recognize the user
    // If a user is logged in, this will return their information
    // from the server session (req.user)
    const response = yield axios.get('/api/user', config);

    // now that the session has given us a user object
    // with an id and username set the client-side user object to let
    // the client-side code know the user is logged in
    yield put({ type: 'SET_USER', payload: response.data });
  } catch (error) {
    console.log('User get request failed', error);
  }
}

function* fetchProfile() {
	try {
		const response = yield axios.get('/api/user/profile');
		yield put({ type: 'SET_PROFILE', payload: response.data });
	} catch {
		console.log('error getting profile response');
	}
}
function* editProfile(action) {
  try {
    const { payload } = action;
    const response = yield axios.put('/api/user/profile/edit', payload);
  } catch (error) {
    console.log('Error saving profile', error);
  }
}


function* userSaga() {
  yield takeLatest('FETCH_USER', fetchUser);
  yield takeLatest('FETCH_PROFILE', fetchProfile);
  yield takeLatest('EDIT_PROFILE', editProfile);
}

export default userSaga;
