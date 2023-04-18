import './App.css';
import { useState } from 'react';

function App() {
  const [name, setName] = useState('');
  console.log(name)
  const updateInput = (e) => {
    const newName = e.target.value
    // setTimeout(() => {
      setName(newName)
    // }, 20)
  }

  return (
    <div className="App">
      <header className="App-header">
        <form>
          <label htmlFor="name">
            Name: 
            <input type="text" name="name"
              onChange={updateInput} value={name}/>
          </label>
        </form>
      </header>
    </div>
  );
}

export default App;
