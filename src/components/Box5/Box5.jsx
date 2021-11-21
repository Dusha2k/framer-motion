import React from "react";
import { motion, useAnimation } from "framer-motion";

const Box2 = () => {
  const control = useAnimation();

  return (
    <div className="box-container">
      <button
        onClick={() => {
          control.start({
            x: 1400,
            transition: { duration: 2 },
          });
        }}
      >
        Move Right
      </button>
      <button
        onClick={() => {
          control.start({
            x: 0,
            transition: { duration: 2 },
          });
        }}
      >
        Move Left
      </button>
      <button
        onClick={() => {
          control.start({ borderRadius: "50%", transition: { duration: 1 } });
        }}
      >
        Circle
      </button>
      <button
        onClick={() => {
          control.start({ borderRadius: "5%", transition: { duration: 1 } });
        }}
      >
        Square
      </button>
      <button onClick={() => control.stop()}>Stop</button>
      <motion.div animate={control} className="box" />
    </div>
  );
};

export default Box2;
