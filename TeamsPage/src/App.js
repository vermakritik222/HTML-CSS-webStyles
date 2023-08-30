import "./App.css";
import Footer from "./components/shared/Footer/Footer";
import Nav from "./components/shared/Nav/Nav";
import Home from "./pages/Home/Home";

function App() {
  return (
    <div className="App">
      <Nav />
      <Home />
      <Footer />
    </div>
  );
}

export default App;
