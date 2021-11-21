import React, { useState } from "react";
import { motion } from "framer-motion";

const Box3 = () => {
  const boxVariants = {
    hidden: {
      x: "-100vw",
    },
    visible: {
      x: 0,
      transition: {
        delay: 0.5,
      },
    },
  };

  const listVariants = {
    hidden: {
      x: -10,
      opacity: 0,
    },
  };

  return (
    <div className="box-container">
      <motion.div
        className="box"
        variants={boxVariants}
        animate="visible"
        initial="hidden"
      >
        {[1, 2, 3].map((box) => (
          <motion.li
            className="box-item"
            variants={listVariants}
            animate={{
              x: 0,
              opacity: 1,
              transition: {
                delay: box * 0.8,
              },
            }}
            initial="hidden"
          />
        ))}
      </motion.div>
    </div>
  );
};

export default Box3;
