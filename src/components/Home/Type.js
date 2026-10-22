import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Backend & API Engineering",
          "Full-Stack Product Delivery",
          "Cloud-Native Systems",
          "Applied AI & RAG",
          "Machine Learning & Data",
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
