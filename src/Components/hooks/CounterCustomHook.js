import {useState} from 'react';
const useCounterCustomHook = (initialCount ,value) =>{
const [count , setCount] = useState(initialCount=0);
const increment = ()=>{
    setCount(prevcount=>prevcount+value);
}
const decrement = ()=>{
    setCount(prevcount=>prevcount-value);
}
const reset = ()=>{
    setCount(initialCount);
}
return [count , increment,decrement,reset]

}
export default useCounterCustomHook;