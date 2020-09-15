import React , {useState} from 'react';

function HooksCounterTwo() {
    const initialCount = 0;
  const [count , setCount] = useState(initialCount);
  const incrementFive = () =>{
      for(let i=0;i<5;i++){
          setCount(pervCount=>pervCount+1);
      }
  }  
  
  return(
    <div>
        count : {count}
        <button onClick={()=>setCount(initialCount)}>Reset</button>
        <button onClick={()=>setCount(pervCount=>pervCount+1)}>Increment</button>
        <button onClick={()=>setCount(pervCount=>pervCount-1)}>Decrement</button>
        <button onClick={incrementFive}>Increment by 5</button>
    </div>
)
}

export default HooksCounterTwo;