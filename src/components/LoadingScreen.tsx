// src/components/LoadingScreen.tsx
import { useEffect, useState } from "react";

const messages = [
  "Booting up the mainframe...",
  "Connecting to the grid...",
  "Initializing neural network...",
  "Compiling quantum algorithms...",
  "Loading digital portfolio...",
];

const LoadingScreen = (): JSX.Element => {
  const [currentMessageIndex, setCurrentMessageIndex] = useState(0);
  const [dots, setDots] = useState("");

  useEffect(() => {
    const messageInterval = setInterval(() => {
      setCurrentMessageIndex((prevIndex) => (prevIndex + 1) % messages.length);
    }, 2000);

    const dotsInterval = setInterval(() => {
      setDots((prevDots) => (prevDots.length >= 3 ? "" : prevDots + "."));
    }, 500);

    return () => {
      clearInterval(messageInterval);
      clearInterval(dotsInterval);
    };
  }, []);

  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-background text-foreground font-mono">
      <div className="w-full max-w-md text-center">
        <div className="text-lg text-primary mb-4">
          <span className="text-accent">$</span> {messages[currentMessageIndex]}
          <span className="animate-pulse">{dots}</span>
        </div>
        <div className="relative w-full h-1 bg-border overflow-hidden rounded-sm">
          <div className="absolute top-0 left-0 h-full bg-primary animate-pulse" style={{ width: '100%' }}></div>
        </div>
        <div className="mt-4 text-sm text-muted-foreground flex justify-between">
          <span>[SYSTEM]</span>
          <span>INITIATING...</span>
        </div>
      </div>
      <div className="absolute bottom-4 right-4 text-xs text-muted-foreground">
        <p>PIYUSH SINGH // PORTFOLIO v1.0</p>
      </div>
    </div>
  );
};

export default LoadingScreen;