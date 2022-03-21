import { createStore } from "redux";

const initialState = {
    counter: 0,
    text: '',
    list: []
};

// 액션 타입 정의
const INCREASE = 'INCREASE';
const DECREASE = 'DECREASE';
const CHANGE_TEXT = 'CHANGE_TEXT';
const ADD_TO_LIST = 'ADD_TO_LIST';

// 액션 생성 함수
const increase = () => ({
    type: INCREASE
});

const decrease = () => ({
    type: DECREASE
});

const changeText = (text) => ({
    type: CHANGE_TEXT,
    text
});

const addToList = (item) => ({
    type: ADD_TO_LIST,
    item
});

// reducer 생성
function reducer (state = initialState, action) {
    switch(action.type) {
        case INCREASE:
            return {
                ...state,
                counter: state.counter + 1
            };
        case DECREASE:
            return {
                ...state,
                counter: state.counter - 1
            };
        case CHANGE_TEXT: 
            return {
                ...state,
                text: action.text
            };
        case ADD_TO_LIST:
            return {
                ...state,
                list: state.list.concat(action.item)
            }
        default:
            return state;
    }
}

// store 생성
const store = createStore(reducer);
console.log(store.getState());

// store 구독하는 listener를 등록
const listener = () => {
    // 액션이 dispatch 될때마다 호출되는 함수
    const state = store.getState();
    console.log(state)
};
// 구독하는 방법
const unsubscribe = store.subscribe(listener);
// 구독 해지하는 방법
// unsubscribe();

store.dispatch(increase());
// store.dispatch({type: 'INCREASE'}); 와 동일
store.dispatch(decrease());
store.dispatch(changeText('안녕하세요'));
store.dispatch(addToList({id: 1, text: '와우'}));