import "./App.css";
// import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";

function App() {
  return (
    <>
      <Navbar title="Text Modify" aboutText="About Us" />
      <div className="container my-3">
        <TextForm heading ="Upload or enter the text" />
      </div>
      {/* <About/> */}
      
    </>
  );
}

export default App;
