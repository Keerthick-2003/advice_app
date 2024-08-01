import React, { useState, useEffect } from 'react'

const AdviceApp = () => {

    const [advice, setAdvice] = useState("Click button to get advice");
    const [count, setCount] = useState(0);

    async function getAdvice() {
        const AdviceAPI = await fetch("https://api.adviceslip.com/advice");
        const data = await AdviceAPI.json();
        const getAdviceFromAPI=await data.slip.advice;
        setAdvice(getAdviceFromAPI);
        setCount((c)=>c + 1);
    }

    useEffect(()=>{
        getAdvice()
    }, [])

  return (
    <div>
      <h2>{advice}</h2>
      <button onClick={getAdvice}>Get Advice</button>
      <Counter count={count}/>
    </div>
  )

  function Counter(props) {
    return (
    <p>You have read <b>{props.count}</b> advice</p>
    )
  }
}

export default AdviceApp
