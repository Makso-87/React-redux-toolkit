import '../App.css';
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "../slices/counterSlice";

function App() {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div className="App">
      <div>
        <div>
          <button
              aria-label="Increment value"
              onClick={() => dispatch(increment())}
          >
            Прибавить
          </button>
          <span>{count}</span>
          <button
              aria-label="Decrement value"
              onClick={() => dispatch(decrement())}
          >
            Отнять
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
