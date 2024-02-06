import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { plus } from "./redux/modules/calculator";
import { minus } from "./redux/modules/calculator";

function App() {
  const dispatch = useDispatch();
  const number = useSelector((state) => state.calculator.number);

  const [num, setNum] = useState(0);

  const onChangeHandler = (e) => {
    const { value } = e.target;
    setNum(+value);
  };

  const onClickAddNumberHandler = () => {
    dispatch(plus(num));
  };

  const onClickMinusNumberHandler = () => {
    dispatch(minus(num));
  };
  return (
    <div className="App">
      <h1>덧셈과 뺄셈이 가능한 앱 만들기</h1>
      <div>
        <input type="number" onChange={onChangeHandler} /> 만큼을
        <button onClick={onClickAddNumberHandler}>더할게요</button>
        <div>
          <button onClick={onClickMinusNumberHandler}>뺄게요</button>
        </div>
      </div>
      <hr />
      <div>
        <h3>결과 : {number} </h3>
        <p>0</p>
      </div>
    </div>
  );
}

export default App;
