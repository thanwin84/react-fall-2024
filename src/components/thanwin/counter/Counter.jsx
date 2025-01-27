import { useState } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);
  const countIsNegative = count === 0;
  function handleIncrement() {
    setCount((count) => count + 1);
  }
  function handleDecrement() {
    if (count > 0) {
      setCount((count) => count - 1);
    }
  }
  return (
    <section className="w-full h-[80vh]  bg-zinc-800 px-4 py-10 flex flex-col justify-between">
      <div className="space-y-4">
        <h1 className="text-4xl text-slate-200 text-center font-bold">
          Counter App
        </h1>
        <h2 className={`text-4xl text-center font-bold text-slate-100 `}>
          {count}
        </h2>
        <div className="flex gap-4 w-[60%] mx-auto">
          <button
            className="font-semibold rounded-md w-full py-2 bg-zinc-300 hover:bg-zinc-200 text-slate-800"
            onClick={handleIncrement}
          >
            Increase
          </button>
          <button
            className={`rounded-md w-full py-2 bg-zinc-200 text-slate-800 ${
              countIsNegative ? 'bg-zinc-500 cursor-not-allowed' : ''
            }`}
            onClick={handleDecrement}
          >
            Decrease
          </button>
        </div>
      </div>
      <small className="text-center text-slate-400">
        Counter App By <span className="text-slate-300">Than Win Hline</span>
      </small>
    </section>
  );
};

export default Counter;
