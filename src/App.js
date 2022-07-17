import "./App.css";
import Dictionary from "./Dictionary.js";

function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">Online Dictionary</header>
        <Dictionary defaultKeyword="sunset" />

        <footer className="App-footer">
          Coded by{" "}
          <a
            href="https://objective-einstein-d849c5.netlify.app"
            target="_blank"
            rel="noreferrer"
          >
            Laura Purser
          </a>{" "}
          and is{" "}
          <a
            href="https://github.com/laurapurser/project-dictionary-app"
            target="_blank"
            rel="noreferrer"
          >
            open-sourced on Github
          </a>{" "}
          and{" "}
          <a
            href="https://timely-cuchufli-86fe4b.netlify.app/"
            target="_blank"
            rel="noreferrer"
          >
            hosted on Netlify
          </a>
        </footer>
      </div>
    </div>
  );
}

export default App;
