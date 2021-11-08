import './App.css';
import { useState } from "react";

function App() {
    const [name, setName] = useState('');
    const [greeting, setGreeting] = useState(false);

    function onClickHandler(e) {
        e.preventDefault();
        setGreeting(true);
    }

    function changeHandler(e) {
        setName(e.target.value);
    }

    return (
        <div className="App">
            <section>
                <form>
                    <label htmlFor="name">Enter your name</label>
                    <input type="text" id="name" onChange={changeHandler} value={name}/>
                    <button onClick={onClickHandler}>Submit</button>
                </form>

                {greeting && (
                    <p>Welcome, {name}!</p>
                )}
            </section>
        </div>
    );
}

export default App;
