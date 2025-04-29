"use client";
import { motion, useSpring } from "framer-motion";
import Image from "next/image";
import React from "react";

const fadeInVariants = {
  hidden: { y: -50, opacity: 0 },
  visible: (index) => ({
    y: 0,
    opacity: 1,
    transition: {
      delay: index * 0.5,
      duration: 0.8,
      ease: "easeOut",
    },
  }),
};

const SectionOne = () => {
  return (
    <div className="mx-auto container lg:mt-8 md:mt-10 mt-5">
      <div className="flex flex-col md:flex-row gap-8 px-3 lg:px-28">
        <motion.div
          className="group overflow-hidden relative"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
          transition={{ delay: 0.1 }}
          variants={fadeInVariants}
          custom={0}
        >
          <Image
            src="/home/1.png"
            alt=""
            width={1260}
            height={590}
            className="rounded-xl transtion duration-300 group-hover:scale-110"
          />
        </motion.div>
        <motion.div
          className="group overflow-hidden relative"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
          transition={{ delay: 0.1 }}
          variants={fadeInVariants}
          custom={1}
        >
          <Image
            src="/home/2.png"
            alt=""
            width={1250}
            height={600}
            className="rounded-xl transtion duration-300 group-hover:scale-110"
          />
        </motion.div>
      </div>
    </div>
  );
};

export default SectionOne;
