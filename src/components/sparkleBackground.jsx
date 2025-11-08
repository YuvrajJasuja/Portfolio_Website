import React, { useEffect } from "react";
import "./SparkleBackground.css";

export default function SparkleBackground() {
  useEffect(() => {
    function createSparkle() {
      const sparkle = document.createElement("div");
      sparkle.className = "sparkle";

      const size = Math.random() * 4 + 2;
      sparkle.style.width = size + "px";
      sparkle.style.height = size + "px";
      sparkle.style.left = Math.random() * 100 + "%";
      sparkle.style.top = Math.random() * 100 + "%";
      sparkle.style.animationDelay = Math.random() * 3 + "s";
      sparkle.style.animationDuration = Math.random() * 2 + 2 + "s";

      document.body.appendChild(sparkle);

      setTimeout(() => sparkle.remove(), 5000);
    }

    const interval = setInterval(createSparkle, 100);
    for (let i = 0; i < 50; i++) setTimeout(createSparkle, i * 50);

    return () => clearInterval(interval); // cleanup when unmounted
  }, []);

  return null; // nothing to render, just background effect
}
