import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const Reveal = ({ children, width = "100%", delay = 0, className = "" }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <div ref={ref} className={className} style={{ width, position: "relative", overflow: "hidden" }}>
      <motion.div
        variants={{
          hidden: { opacity: 0, y: 50 },
          visible: { opacity: 1, y: 0 }
        }}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        transition={{ duration: 0.6, delay: delay, ease: "easeOut" }}
        className={className}
      >
        {children}
      </motion.div>
    </div>
  );
};

export default Reveal;
