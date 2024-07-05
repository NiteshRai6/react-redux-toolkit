import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { decrement, increment } from './features/counter/counterSlice';

function App() {
  const count = useSelector(state => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div className='p-20 flex flex-col gap-5 justify-center items-center text-2xl'>
      <h1>Counter By React - Redux</h1>

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

    </div>
  )
}

export default App;
