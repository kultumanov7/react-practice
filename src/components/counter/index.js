import {useState} from "react";
import './counter.css'


const Counter = (a, b) => {
    const [input, setInput] = useState('')

    const handleOnClick = value => () => {
        setInput(input + value)
    }



    return(<div>
        <div className="res"> {input} </div>
        <div className="calc">
            <button className='oper'> C </button>
            <button className='oper'> +/- </button>
            <button className='oper' onClick={handleOnClick('/')}> / </button>
            <button className='oper' onClick={handleOnClick('*')}> * </button>
            <button className='oper' onClick={handleOnClick(7)} > 7 </button>
            <button className='oper' onClick={handleOnClick(8)}> 8 </button>
            <button className='oper' onClick={handleOnClick(9)}> 9 </button>
            <button className='oper' onClick={handleOnClick('-')}> - </button>
            <button className='oper' onClick={handleOnClick(4)}> 4 </button>
            <button className='oper' onClick={handleOnClick(5)}> 5 </button>
            <button className='oper' onClick={handleOnClick(6)}> 6 </button>
            <button className='oper' onClick={handleOnClick('+')}> + </button>
            <button className='oper' onClick={handleOnClick(1)}> 1 </button>
            <button className='oper' onClick={handleOnClick(2)}> 2 </button>
            <button className='oper' onClick={handleOnClick(3)}> 3 </button>
            <button className='oper' onClick={handleOnClick('=')}> = </button>
            <button className='oper' onClick={handleOnClick(0)}> 0 </button>
            <button className='oper' onClick={handleOnClick('.')}> . </button>
            <button className='oper'> DEL </button>
            <button className='oper' onClick={handleOnClick('=')}> = </button>
        </div>

        


    </div>)
}

export default Counter;