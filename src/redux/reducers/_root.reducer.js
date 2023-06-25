import { combineReducers } from 'redux';
import errors from './errors.reducer';
import { userReducer, profileReducer } from './user.reducer';
import {
	getGigs,
	getCompletedGigs,
	upcomingGigsReducer,
	pendingGigs,
	coaches,
} from './gigs.reducer';

// rootReducer is the primary reducer for our entire project
// It bundles up all of the other reducers so our project can use them.
// This is imported in index.js as rootSaga

// Lets make a bigger object for our store, with the objects from our reducers.
// This is what we get when we use 'state' inside of 'mapStateToProps'
const rootReducer = combineReducers({
	errors, // contains registrationMessage and loginMessage
	user: userReducer, // will have an id and username if someone is logged in
	gigs: getGigs,
	pastGigs: getCompletedGigs,
	upcomingGigs: upcomingGigsReducer,
	pendingGigs: pendingGigs,
	profile: profileReducer,
	coaches: coaches,
});

export default rootReducer;
