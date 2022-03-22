// 다른 모듈과 이름이 겹치지 않도록 접두사를 붙인다
const SET_DIFF = 'counter/SET_DIFF';
const INCREASE = 'counter/INCREASE';
const DECREASE = 'counter/DECREASE';

// 액션함수는 export 를 붙여 작성
export const setDiff = diff => ({type: SET_DIFF, diff});
export const increase = () => ({type: INCREASE});
export const decrease = () => ({type: DECREASE});

const initialState = {
    number: 0,
    diff: 1
};

export default function counter(state = initialState, action) {
    switch (action.type) {
        case INCREASE:
            return {
                ...state,
                number: state.number + state.diff
            };
        case DECREASE:
            return {
                ...state,
                number: state.number - state.diff
            };
        case SET_DIFF:
            return {
                ...state,
                diff: action.diff
            };
        default:
            return state;
    }
}