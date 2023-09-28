import { useAppSelector, useAppDispatch } from "./redux/hooks/hooks";
import { decrement, increment } from "./redux/Fetures/Slice";
import { useSelector } from "react-redux";
import { RootState } from "./redux/store";
import Navbar from "./components/Navbar/Navbar";

function App() {
  const count = useAppSelector((state) => state.counter.value);
  const dispatch = useAppDispatch();
  const { theme } = useSelector((state: RootState) => state.theme);
  return (
    <>
      <div
        className={`${
          theme === "light"
            ? "bg-slate-100 text-slate-800"
            : "bg-slate-900 text-slate-100"
        }`}
      >
        <div className="p-48">
          <Navbar />
        </div>
      </div>
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
      <button
        aria-label="Increment value"
        onClick={() => dispatch(increment())}
      >
        Increment
      </button>
      <span>{count}</span>
      <button
        aria-label="Decrement value"
        onClick={() => dispatch(decrement())}
      >
        Decrement
      </button>
    </>
  );
}

export default App;
