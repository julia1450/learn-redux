import React from "react";
import Counter from "../components/Counter";
import { useSelector, useDispatch } from "react-redux";
import { decrease, increase, setDiff } from "../modules/counter";

// 컨테이너 컴포넌트
function CounterContainer () {
    const { number, diff } = useSelector(state => ({
        // useSelector 내부 state는 store.getState로 가져오는 값
        number: state.counter.number,
        diff: state.counter.diff
    }));
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