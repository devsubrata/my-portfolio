import "./App.css";

function App() {
    return (
        <div className="App">
            <div className="profile_pic">
                <img src="https://picsum.photos/300/300" />
            </div>
            <h1>Hi, I'm Jane Doe</h1>
            <p>I'm a Frontend Developer skilled in React and TypeScript.</p>
            <ul>
                <li>
                    <a href="https://github.com/devsubrata" target="_blank">
                        GitHub
                    </a>
                </li>
                <li>
                    <a href="mailto:you@example.com">Email Me</a>
                </li>
            </ul>
        </div>
    );
}

export default App;
