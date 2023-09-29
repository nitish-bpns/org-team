import React, { useState } from "react";
import QrReader from "reactjs-qr-reader";

function Testing() {
  const delay = 500;

  const previewStyle = {
    height: 240,
    width: 320,
  };

  const [result, setResult] = useState("No result");

  const handleScan = (result) => {
    if (result) {
      setResult(result);
    }
  };

  const handleError = (error) => {
    console.log(error);
  };

  return (
    <div className="App">
      <center>
        <QrReader
          facingMode="environment"
          delay={delay}
          style={previewStyle}
          onError={handleError}
          onScan={handleScan}
        />
        <p>{result}</p>
      </center>
    </div>
  );
}

export default Testing;
