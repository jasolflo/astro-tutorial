   import { useState } from 'react';

   function ReactCounter() {
    console.log("ReactCounter using React", useState);
     const [count, setCount] = useState(0);

     return (
       <div style={{ textAlign: 'center' }}>
         <h2>Counter: {count}</h2>
         <button onClick={() => setCount(count + 1)}>Increase</button>
         <button onClick={() => setCount(count - 1)}>Decrease</button>
       </div>
     );
   }

   export default ReactCounter;
