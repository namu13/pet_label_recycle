import { useEffect, useState } from "react";
import "./App.css";
import { Html5Qrcode } from "html5-qrcode";

import Nav from "./components/nav";

function App() {
  const [point, setPoint] = useState(0);
  const cameraStart = () => {
    // This method will trigger user permissions
    Html5Qrcode.getCameras()
      .then((devices) => {
        /**
         * devices would be an array of objects of type:
         * { id: "id", label: "label" }
         */
        if (devices && devices.length) {
          var cameraId = devices[0].id;
          // .. use this to start scanning.
          const html5QrCode = new Html5Qrcode("camera-btn", "reader");
          html5QrCode
            .start(
              cameraId,
              {
                fps: 10, // Optional, frame per seconds for qr code scanning
                qrbox: { width: 250, height: 250 }, // Optional, if you want bounded box UI
              },
              (decodedText, decodedResult) => {
                console.log(decodedText);
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
