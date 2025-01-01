const initalState = {
  modal: {
    isShow: false,
  },
};

export const TOGGLE_MODAL = 'TOGGLE_MODAL';

/**
 * 루트 리듀서
 * @param {*} state : 현재 상태
 * @param {*} action : 액션 객체(함수를 호출하는 주문)
 * @returns
 */

const rootReducer = (state = initalState, action) => {
  switch (action.type) {
    case 'TOGGLE_MODAL':
      return {
        ...state,
        modal: {
          isShow: !state.modal.isShow,
        },
      };

    default:
      return state;
  }
};
export default rootReducer;
