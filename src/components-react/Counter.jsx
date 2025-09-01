import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0)

  return (
    <div className="flex gap-4 justify-center items-center">
      <p>ʕ ·(エ)· ʔ</p>
      <p>clicky</p>
      <button className="btn btn-accent" type="button" onClick={(e)=>setCount(count+1)}>{count}</button>
    </div>
  )
}
export default Counter;