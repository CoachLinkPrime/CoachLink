//this will be used in our store for our available gigs variable
export const getGigs = (state = [], action) => {
	switch (action.type) {
		case 'SET_GIGS':
			return action.payload;
		default:
			return state;
	}
};

// this stores the past completed gigs (based on user's id)
export const getCompletedGigs = (state=[], action) => {
	switch (action.type) {
		case 'SET_COMPLETED_GIGS':
		return action.payload;
		default: 
		return state;
	}
}