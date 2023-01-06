import { useState } from 'react';
const TestComponent = (props: any) => {
  const [count, setCount] = useState(props.test as number)
console.log(props.test, props);
  return (
    <div className="info">
      <button className="info" onClick={() => setCount((count) => count + 1)}>
        count is {count}
      </button>
    </div>
  )
}

export default TestComponent;
