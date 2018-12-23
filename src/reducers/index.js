export default (state = {
  place: 'Hoge',
}, action) => {
  switch (action.type) {
    case 'CHANGE_PLACE':
      return Object.assign({}, state, { place: action.place });
    default:
      return state;
  }
};
