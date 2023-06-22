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
export const getCompletedGigs = (state = [], action) => {
	switch (action.type) {
		case 'SET_COMPLETED_GIGS':
			return action.payload;
		default:
			return state;
	}
};

// this stores the upcoming gigs (based on user's id)
export const upcomingGigsReducer = (state = [], action) => {
	switch (action.type) {
		case 'SET_UPCOMING_GIGS':
			return action.payload;
		default:
			return state;
	}
};

export const pendingGigs = (state = [], action) => {
	switch (action.type) {
		case 'SET_PENDING_GIGS':
			return action.payload;
		default:
			return state;
	}
};
