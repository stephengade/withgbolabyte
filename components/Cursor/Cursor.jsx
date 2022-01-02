import React from "react";
import dynamic from "next/dynamic";

function Cursor() {
  const AnimatedCursor = dynamic(() => import("react-animated-cursor"), {
    ssr: false,
  });
  return (
    <>
      <AnimatedCursor
        innerSize={20}
        outerSize={25}
        color="255, 0, 0"
        outerAlpha={0.4}
        innerScale={0.7}
        outerScale={3}
      />
    </>
  );
}

export default Cursor;
