import React, { useState } from "react";
import { motion } from "framer-motion";

const Box2 = () => {
  return (
    <div className="box-container">
      <motion.div
        drag
        dragConstraints={{
          left: 0,
          bottom: 0,
          right: 0,
          top: 0,
        }}
        className="box"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      />
    </div>
  );
};

export default Box2;
