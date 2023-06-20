export const userReducer = (state = {}, action) => {
  switch (action.type) {
    case 'SET_USER':
      return action.payload;
    case 'UNSET_USER':
      return {};
    default:
      return state;
  }
};

export const profileReducer = (state = {}, action) => {
  switch (action.type) {
    case 'SET_PROFILE':
      return action.payload[0];
    case 'EDIT_PROFILE':
      return action.payload;
    default:
      return state;
  }
};
// user will be on the redux state at:
// state.user

