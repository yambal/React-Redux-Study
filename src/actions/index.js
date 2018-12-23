import { geocode } from '../domain/Geocoder';

export const setPlace = place => dispatch => dispatch({ type: 'CHANGE_PLACE', place });

export const setErrorMessage = message => dispatch => dispatch({
  type: 'CHANGE_ERROR_MESSAGE',
  message,
});

export const startSearch = () => (dispatch, getState) => {
  geocode(getState().place)
    .then(({ status, address, location }) => {
      switch (status) {
        case 'OK': {
          dispatch({
            type: 'GEOCODE_FETCHE',
            address,
            location,
          });
          break;
        }
        case 'ZERO_RESULTS': {
          dispatch(setErrorMessage('結果が見つかりませんでした'));
          break;
        }
        default: {
          dispatch(setErrorMessage('結果が見つかりませんでした'));
        }
      }
    })
    .catch((error) => {
      dispatch(setErrorMessage(`通信に失敗しました：${JSON.stringify(error)}`));
    });
};
