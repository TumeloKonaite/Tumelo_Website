import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "AI-Powered Products",
          "Full-Stack Engineering",
          "LLM & RAG Applications",
          "Secure API Platforms",
          "Cloud Deployment",
        ],
        autoStart: true,
        loop: true,
        delay: 55,
        deleteSpeed: 28,
        pauseFor: 1800,
      }}
    />
  );
}

export default Type;
