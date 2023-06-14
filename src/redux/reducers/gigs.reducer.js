//this will be used in our store for our gigs variable

const getGigs = (state = [], action) => {
	switch (action.type) {
		case 'SET_GIGS':
			return action.payload;
		default:
			return state;
	}
};

export default getGigs;
