import React from "react";
import Counter from "../components/Counter";
import { useSelector, useDispatch, shallowEqual } from "react-redux";
import { decrease, increase, setDiff } from "../modules/counter";

// 컨테이너 컴포넌트
function CounterContainer () {
    // useSelector가 매번 새로운 객체를 만들고 있기 때문에
    // Todos가 변경될 때마다 Counter가 리렌더링 됨
    // 막기 위해 useSelector 두번째 인자로 비교 함수를 사용하거나 shallowEqual 사용함
    // (left, right) => (
    //     left.diff === right.diff && left.number === right.number
    // )
    const { number, diff } = useSelector(state => ({
        // useSelector 내부 state는 store.getState로 가져오는 값
        number: state.counter.number,
        diff: state.counter.diff
    }), shallowEqual);
    const dispatch = useDispatch();

    const onIncrease = () => dispatch(increase());
    const onDecrease = () => dispatch(decrease());
    const onSetDiff = (diff) => dispatch(setDiff(diff));

    return (
        <Counter 
            number={number}
            diff={diff}
            onIncrease={onIncrease}
            onDecrease={onDecrease}
            onSetDiff={onSetDiff}
        ></Counter>
    )
}

export default CounterContainer