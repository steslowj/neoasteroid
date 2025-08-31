import React, { useEffect, useState } from "react";

// https://www.youtube.com/watch?v=5ZdHfJVAY-s Random Color tutorial included

const RandomColor = () => {
  const [color, setColor] = useState("transparent");

  function randomColorUtility(length) {
    return Math.floor(Math.random() * length);
  }

  function handleCreateRandomHexColor() {
    const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
    let hexColor = "#";

    for (let i = 0; i < 6; i++) {
      hexColor += hex[randomColorUtility(hex.length)];
    }
    setColor(hexColor);
  }

  function handleCreateRandomRgbColor() {
    const r = randomColorUtility(256);
    const g = randomColorUtility(256);
    const b = randomColorUtility(256);

    setColor(`rgb(${r},${g},${b})`);
  }

  return (
    <div
      style={{
        background: color,
        height: "100%",
        width: "100%",
        padding: "1em",
        borderRadius: "8px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "1em",
          marginBottom: "0.5em",
          flexWrap: "wrap",
        }}
      >
        <button
          id="hexClrBtn"
          className="btn btn-sm btn-primary"
          onClick={handleCreateRandomHexColor}
        >
          HEX
        </button>
        <button
          id="rgbClrBtn"
          className="btn btn-sm btn-secondary"
          onClick={handleCreateRandomRgbColor}
        >
          RGB
        </button>
        <button
          className="btn btn-sm btn-neutral"
          onClick={() => setColor("transparent")}
        >
          null
        </button>
      </div>
      <div
        style={{
          margin: "0 auto",
          color: "var(--color-base-content)",
          height: "4rem",
        }}
      >
        {color === "transparent" ? (
          <h4
            style={{
              background: "transparent",
              padding: "0.4em 0.5em",
            }}
          ></h4>
        ) : (
          <h4
            style={{
              background: "var(--color-base-100)",
              padding: "0.4em 0.5em",
            }}
          >
            {color}
          </h4>
        )}
      </div>
    </div>
  );
};

export default RandomColor;
