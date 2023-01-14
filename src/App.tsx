import "./App.css";

function App() {
  return (
    <div className="App">
      <h1>Landing Page</h1>
      <div className="card">
        <a href={import.meta.env.VITE_LOGIN_URL || ""}>
          <button>Login</button>
        </a>
      </div>
    </div>
  );
}

export default App;
