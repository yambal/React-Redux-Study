import { geocode } from '../domain/Geocoder';

export const setPlace = place => dispatch => dispatch({ type: 'CHANGE_PLACE', place });

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
          this.setErrorMessage('結果が見つかりませんでした');
          break;
        }
        default: {
          // this.setErrorMessage('結果が見つかりませんでした');
        }
      }
    })
    .catch((error) => {
      this.setErrorMessage(`通信に失敗しました：${JSON.stringify(error)}`);
    });
};
