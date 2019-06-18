import React, { useState, useCallback } from 'react';

// export function XXX (props) {
//   const [count, setCount] = useState(0);
//   return (<div>
//     <p>{count}</p>
//     <button onClick={e => {
//       setCount(count + 1)
//     }}>++</button>
//   </div>)
// }

function useCount() {
  const [value, setValue] = useState(0);
  // useEffect(() => {
  //   setCount(next);
  // }, []);
  const onClick = useCallback(function (){
    setValue(value + 1);
  }, [])
  return {value, onClick};
}


export default function Count () {
  const count = useCount();
    return (<div>
    <p>{count.value}</p>
    <button {...count}>++</button>
  </div>)
}

