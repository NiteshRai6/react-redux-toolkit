import React from 'react'
import { useAppSelector } from './redux/hooks'

export default function Test() {
    const count = useAppSelector(state => state.counter.value);

    return (
        <div className='flex flex-col justify-center items-center gap-5 text-2xl mt-10'>
            <div>Test Component</div>

            <h5>Count in Test : <span className='text-[blue]'>{count}</span></h5>
        </div>
    )
}
