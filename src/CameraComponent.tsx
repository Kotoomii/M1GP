import React, { useState, useRef, useEffect } from "react";
import Webcam from "react-webcam";
import "regenerator-runtime/runtime";

const CameraComponent: React.FC<{ startCamera: boolean }> = ({ startCamera }) => {
  const [screenshot, setScreenshot] = useState<string | null>(null);
  const webcamRef = useRef<Webcam>(null);

  useEffect(() => {
    if (startCamera) {
      const timer = setTimeout(() => {
        if (webcamRef.current) {
          const imageSrc = webcamRef.current.getScreenshot();
          setScreenshot(imageSrc);
        }
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [startCamera]);

  return (
    <div>
      {startCamera && (
        <Webcam
          audio={false}
          ref={webcamRef}
          screenshotFormat="image/jpeg"
          width={640}
          height={480}
        />
      )}
      {screenshot && <img src={screenshot} alt="Screenshot" />}
    </div>
  );
};

export default CameraComponent;
