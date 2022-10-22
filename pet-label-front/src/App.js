import { useEffect, useState } from "react";
import "./App.css";
import { Html5Qrcode } from "html5-qrcode";
import axios from "axios";

import Nav from "./components/nav";

function App() {
  const [point, setPoint] = useState(0);
  const cameraStart = () => {
    Html5Qrcode.getCameras()
      .then((devices) => {
        if (devices && devices.length) {
          var cameraId = devices[0].id;
          const html5QrCode = new Html5Qrcode("camera-btn", "reader");
          html5QrCode
            .start(
              cameraId,
              {
                fps: 10,
                qrbox: { width: 250, height: 250 },
              },
              (decodedText, decodedResult) => {
                if (decodedText) {
                  html5QrCode.stop().then((ignore) => {
                    // QR Code scanning is stopped.
                  });
                  axios
                    .post("/user", {
                      qrData: decodedText,
                    })
                    .then(axios.get("/point").then((res) => setPoint(res)));
                }
              },
              (errorMessage) => {
                // parse error, ignore it.
              }
            )
            .catch((err) => {
              // Start failed, handle it.
            });
        }
      })
      .catch((err) => {
        // handle err
      });
  };

  return (
    <>
      <Nav />
      <div id="camera-btn"></div>
      <div className="buttons">
        <div className="camera-btn" onClick={cameraStart}>
          QR code 찍기
        </div>
        <div className="point-container">
          <span className="title">내 포인트</span>
          <span className="number">{point}</span>
        </div>
      </div>
    </>
  );
}

export default App;
