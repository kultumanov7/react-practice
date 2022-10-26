import logo from './logo.svg';
import './App.css';
import Counter from './components/counter/index.js';
import therealcount from './components/counter_therealone';
import Therealcount from './components/counter_therealone';

function App() {
  const num = 10;
  let num2 = 15;
  const arr = ['apple', 'orange', 'melon', 'banana', 'kiwi'];
  const arr2 = [1,2,3,4,5,6,7,8]
  
  const fun2 = (name) => {
    console.log('hello world!', name)
  }

  const obj = {
    name: 'Aldiyar',
    age: 23,
    city: 'Astana',
  }

  const fun = (arr) => {
    return (<div className={"box"}> {arr.map(el => <div className={'element'}
    onClick={()=>fun2(el)}
    >{el}</div>)} </div>)
  }


  return (
    <div className="App">
      <div>Hello World</div>
        <Counter />
        <div>number: {num}</div>
        <div>{num2}</div>
        <ol>
          {arr.map(el => (<li>{el}</li>))}
        </ol>
        {fun(arr)}
        {fun(arr2)}

        <div>{obj.age}</div>
        <br/><br/>
        <Therealcount/>

    </div>
  );
}

export default App;
