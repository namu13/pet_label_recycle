import { useState } from "react";
import "./App.css";
import Nav from "./components/nav";

function App() {
  const [point, setPoint] = useState(0);
  return (
    <>
      <Nav />
      <div className="buttons">
        <div className="camera-btn">QR code 찍기</div>
        <div className="point-container">
          <span className="title">내 포인트</span>
          <span className="number">{point}</span>
        </div>
      </div>
    </>
  );
}

export default App;
