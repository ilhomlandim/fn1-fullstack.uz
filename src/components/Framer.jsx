"use client";
import { motion, useInView } from "framer-motion";
import React, { useRef } from "react";

const Framer = ({
  delay = 0,
  children,
  animate = { y: 0, opacity: 1 },
  initial = { y: 200, opacity: 0 },
  classes = "",
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.div
      className={classes}
      ref={ref}
      initial={initial}
      animate={isInView ? animate : {}}
      transition={{ duration: 0.7, delay }}
    >
      {children}
    </motion.div>
  );
};

export default Framer;
