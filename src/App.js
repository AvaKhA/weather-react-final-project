import "./App.css";
import Weather from "./Weather";

function App() {
  return (
    <div className="App">
      <div className="Container">
        <Weather defaultCity="Tehran" />
        <footer className="text-center">
          This Project was coded by Ava Khalili and is{" "}
          <a
            href="https://github.com/AvaKhA/weather-react-final-project"
            target="_blank"
            rel="noreferrer"
          >
            open-sourced on GitHub!
          </a>
        </footer>
      </div>
    </div>
  );
}

export default App;
