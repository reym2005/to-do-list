import React, { useState } from 'react';
export const State =() =>
{
const [count, setCount] = useState(0);

const handleClick =() =>
{
    setCount(count+1);
}

return(
    <>
    <h1>
      {count}
    </h1>
    <button onClick={handleClick}>
        Click Me
    </button>
    </>
)
}