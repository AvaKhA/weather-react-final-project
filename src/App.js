import "./App.css";
import Weather from "./Weather";

function App() {
  return (
    <div className="App">
      <div className="Container">
        <h1>Weather App</h1>
        <Weather />
        <footer>
          This Project was coded by Ava Khalili and is{" "}
          <a
            href="https://github.com/AvaKhA/weather-react-final-project"
            target="_blank"
          >
            open-sourced on GitHub!
          </a>
        </footer>
      </div>
    </div>
  );
}

export default App;
