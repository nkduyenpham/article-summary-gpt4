import "./App.css";
import About from "./components/About";
import Demo from "./components/Demo";

const App = () => {
    return (
        <main>
            <div className="main">
                <div className="gradient" />
            </div>
            <div className="app">
                <About />
                <Demo />
            </div>
        </main >
    )
}

export default App