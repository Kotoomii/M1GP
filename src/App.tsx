import React, { useState } from "react";
import CameraComponent from "./CameraComponent";
import SpeechRecognitionComponent from "./SpeechRecognitionComponent";

const App: React.FC = () => {
  const [startCamera, setStartCamera] = useState(false);

  const handleCommand = (command: string) => {
    if (command.toLowerCase().includes("こんにちは")) {
      setStartCamera(true);
    } else {
      setStartCamera(false);
    }
  };

  return (
    <div>
      <SpeechRecognitionComponent onCommand={handleCommand} />
      <CameraComponent startCamera={startCamera} />
    </div>
  );
};

export default App;
