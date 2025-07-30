import React from "react";

function ExampleCarouselImage({ text }) {
  return (
    <div
      style={{
        width: "100%",
        height: "300px",
        background: "#ffe4ec",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontSize: "2rem",
        color: "#a05278",
        borderRadius: "10px",
      }}
    >
      {text}
    </div>
  );
}

export default ExampleCarouselImage;
