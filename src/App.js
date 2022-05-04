import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";

function App() {
  return (
    <>
      <Navbar title="Text Modify" aboutText="About Us" />
      <div className="container my-3">
        <TextForm heading ="Enter the text to Analyze" />
      </div>
    </>
  );
}

export default App;
