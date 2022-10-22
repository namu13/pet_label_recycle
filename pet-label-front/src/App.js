import "./App.css";
import Nav from "./components/nav";

function App() {
  return (
    <>
      <Nav />
      <div className="buttons">
        <div className="camera-btn">QR code 찍기</div>
        <div className="point-container"></div>
      </div>
    </>
  );
}

export default App;
