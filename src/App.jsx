import { useState } from 'react'


import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    
    <div style={{textAlign:'center',marginTop:'50px'}}>
     
      <h1>Count:{count}</h1>
      <div  className="button-container">
         <div className="card">
        <button onClick={() => setCount(count + 1)}>
          Increase
        </button>
        
      </div>
      
      <div className="card">
        <button onClick={() =>setCount(count - 1)}>
          Decrease
          
        </button>
        
      </div>
      
      <div className="card">
        <button onClick={() => setCount(0)} >
          Reset
        </button>
        
      </div>


      </div>
      
     
    </div>


      
    
  
  )
}

export default App
