
import { useState } from 'react';
import './App.css';

function App() {
  const [height,setHeight] = useState(185);
  const [age,setAge] = useState(30);
  const [name,setName] = useState("Guillaume");
  
  const ageUp = () => {
    setAge(age+1);
  }
  const heightUp = () => {
    setHeight (height+1);
  }
  const changeName = (event) => {
    setName(event.target.value);
  }

  return (
    <div className="App">
      <div className="child1">
        <span className="text">{name}</span>
        <input value={name} onChange={changeName} />
      </div>

      <div className="child2" onClick={heightUp}>
        <span className="text">{height}cm</span>
      </div>

      <div className="child3" onClick={ageUp}>
        <span className="text">{age}</span>
      </div>

    </div >
  );
}

export default App;
