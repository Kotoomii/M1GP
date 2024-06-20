import React, { useState } from "react";
import SpeechRecognition, { useSpeechRecognition } from "react-speech-recognition";
import "regenerator-runtime/runtime";

interface Props {
  onCommand: (command: string) => void;
}

const SpeechRecognitionComponent: React.FC<Props> = ({ onCommand }) => {
  const {
    listening,
    transcript,
    resetTranscript,
    browserSupportsSpeechRecognition,
  } = useSpeechRecognition();
  const [message, setMessage] = useState("");

  const handleClickStart = () => {
    SpeechRecognition.startListening();
  };

  const handleClickStop = () => {
    SpeechRecognition.stopListening();
    setMessage(transcript);
    onCommand(transcript);
    resetTranscript();
  };

  if (!browserSupportsSpeechRecognition) {
    return <span>Browser doesn't support speech recognition.</span>;
  }

  return (
    <div>
      <p>{message}</p>
      <button onClick={handleClickStart}>Start</button>
      <button onClick={handleClickStop}>Stop</button>
    </div>
  );
};

export default SpeechRecognitionComponent;
