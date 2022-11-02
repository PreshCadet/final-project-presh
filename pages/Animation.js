import React, { useEffect, useState } from "react";
import { motion, AnimateSharedLayout, AnimatePresence } from "framer-motion";
import Image from 'next/image'
import mypic from '../public/Sapatos.svg'

export default function Animation() {
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);

    return () => {
      setIsLoading(false);
    };
  }, []);
  return (
    <div className="Home" >
      <AnimateSharedLayout>
        <AnimatePresence>
          {isLoading && (
            <motion.div
              className="loading"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{
                duration: 0.5
              }}
              exit={{ opacity: 0, background: "red", scale: 5 }}
            >
              <Image src={mypic} 
              width={230}
              height={250}
              
                  />
              <br/>
              <motion.div exit={{ opacity: 0, background: "red", scale: 5 }}>
                <p style={{color: "white", fontFamily:"monospace", left: 100}}>S A P A T O S | S H O E S . P H </p>
                <motion.div
                  initial={{ x: -100 }}
                  animate={{ x: 100 }}
                  transition={{
                    flip: Infinity,
                    duration: 1
                  }}
                  style={{
                    background: "var(--primary)",
                    height: 6,
                    width: 100
                  }}
                ></motion.div>
                <motion.div
                  initial={{ x: -180 }}
                  animate={{ x: 180 }}
                  transition={{
                    flip: Infinity,
                    duration: 1.2
                  }}
                  style={{
                    background: "var(--danger)",
                    height: 8,
                    width: 20
                  }}
                ></motion.div>
                <motion.div
                  initial={{ x: -180 }}
                  animate={{ x: 180 }}
                  transition={{
                    flip: Infinity,
                    duration: 1.5
                  }}
                  style={{
                    background: "var(--yellow)",
                    height: 4,
                    width: 200
                  }}
                ></motion.div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </AnimateSharedLayout>
    </div>
  );
}

const images = ["1000", "1001", "1002", "1003", "1004", "1005", "1006", "1008"];
