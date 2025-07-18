import React, { useState, useRef } from "react";
import { QRCodeCanvas } from "qrcode.react";
import "./App.css";

function App() {
  const [text, setText] = useState("https://example.com");
  const qrRef = useRef(null);

  const handleDownload = () => {
    const canvas = qrRef.current.querySelector("canvas");
    const url = canvas.toDataURL("image/png");

    const a = document.createElement("a");
    a.href = url;
    a.download = "qrcode.png";
    a.click();
  };

  return (
    <div className="app-container">
      <div className="glass-card">
        <h2 className="title">✨ QR Code Generator</h2>
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="🔗 Enter text or URL"
          className="input-box"
        />
        <div ref={qrRef} className="qr-wrapper">
          <QRCodeCanvas value={text} size={220} />
        </div>
        <button onClick={handleDownload} className="download-btn">
          ⬇ Download QR Code
        </button>
      </div>
    </div>
  );
}

export default App;
