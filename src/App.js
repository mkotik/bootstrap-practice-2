import logo from "./logo.svg";
import "./App.css";
import Navbar from "./Header";
import "bootstrap/dist/css/bootstrap.min.css";
import Showcase from "./Showcase.js";
function App() {
  return (
    <div className="App">
      <Navbar />
      <Showcase />
    </div>
  );
}

export default App;
