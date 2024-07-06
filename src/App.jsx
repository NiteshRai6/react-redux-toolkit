import './App.css';
import { useAppDispatch, useAppSelector } from './redux/hooks';
import { decrement, increment } from './redux/slices/counter/counterSlice';
import Test from './Test';

function App() {
  const count = useAppSelector(state => state.counter.value);
  const dispatch = useAppDispatch();

  return (
    <div className='p-20 flex flex-col gap-5 justify-center items-center text-2xl'>
      <h1>Counter By React - Redux</h1>

      <h2>Count : <span className='text-[magenta]'>{count}</span></h2>
      <div className='flex gap-10'>
        <button
          className='bg-green-500 text-white px-3 py-1 rounded-xl'
          onClick={() => dispatch(increment())}
        >Increment
        </button>

        <button
          className='bg-red-500 text-white px-3 py-1 rounded-xl'
          onClick={() => dispatch(decrement())}
        >Decrement
        </button>
      </div>

      <Test />
    </div>
  )
}

export default App;
