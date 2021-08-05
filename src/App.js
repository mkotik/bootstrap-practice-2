import logo from "./logo.svg";
import "./App.css";
import Navbar from "./Header";
import "bootstrap/dist/css/bootstrap.min.css";
import Showcase from "./Showcase.js";
import Newsletter from "./Newsletter.js";
import Boxes from "./Boxes.js";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Showcase />
      <Newsletter />
      <Boxes />
    </div>
  );
}

export default App;
