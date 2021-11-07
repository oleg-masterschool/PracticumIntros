import './App.css';
import { useState } from "react";

function App() {
    const [name, setName] = useState('');
    const [greeting, setGreeting] = useState(false);

    function handleSubmit(e) {
        e.preventDefault();
        setGreeting(true);
    }

    return (
        <div className="App">
            <form>
                <label htmlFor="name">Enter your name</label>
                <input type="text" placeholder="Enter name" value={name} id="name"
                       onChange={(e) => setName(e.target.value)}/>
                <button onClick={handleSubmit}>Submit</button>
            </form>

            {greeting && (
                <p>Welcome, {name}!</p>
            )}
        </div>
    );
}

export default App;
