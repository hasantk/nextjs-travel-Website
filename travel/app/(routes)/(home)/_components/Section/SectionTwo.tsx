"use client";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import React from "react";
import { TypeAnimation } from "react-type-animation";

const SectionTwo = () => {
  return (
    <div className="bg-red-100">
      <div className="mx-auto container text-center py-16 px-16 lg:px-28">
        <TypeAnimation
          sequence={[
            // Same substring at the start will only be typed out once, initially
            "Welcome To Travel",
            2000, // wait 1s before replacing "Mice" with "Hamsters"
            "Seyahate Hoş Geldiniz",
            2000,
            "Willkommen bei Reisen",
            2000,
            "Добро пожаловать в путешествие",
            2000,
          ]}
          wrapper="span"
          speed={50}
          className="text-3xl lg:text-4xl font-bold text-blue-600 mb-4"
          repeat={Infinity}
        />
        <div className="flex justify-center items-center mb-6">
          <hr className="border-gray-300 w-1/5" />
          <span className="mx-3 text-gray-400 text-xl">&#128064;</span>
          <hr className="border-gray-300 w-1/5" />
        </div>
        <p className="text-gray-600 mb-8 max-w-3xl mx-auto">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio ipsum
          consequatur expedita sint, labore suscipit, dolores voluptatum odit a
          totam dolorum inventore eveniet necessitatibus excepturi rerum! Fuga
          nostrum ipsam qui commodi cupiditate ut dignissimos quas accusamus,
          quibusdam vel in unde non sed! Atque laboriosam dolorum explicabo
          aspernatur hic vero natus.
        </p>
        <p className="text-gray-600 mb-8 max-w-3xl mx-auto">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio ipsum
          consequatur expedita sint, labore suscipit, dolores voluptatum odit a
          totam dolorum inventore eveniet necessitatibus excepturi rerum! Fuga
          nostrum ipsam qui commodi cupiditate ut dignissimos quas accusamus,
          quibusdam vel in unde non sed! Atque laboriosam dolorum explicabo
          aspernatur hic vero natus.
        </p>
        <div className="flex justify-center gap-4">
          <motion.div
            whileTap={{ scale: 0.9, y: 2 }}
            whileHover={{ scale: 1.0 }}
          >
            <Button className="bg-green-500 text-white py-6 px-8 rounded-lg hover:bg-green-600 transition">
              Detail
            </Button>
          </motion.div>
          <motion.div
            whileTap={{ scale: 0.9, rotate: -10 }}
            whileHover={{ scale: 1.0, rotate: 5 }}
          >
            <Button className="bg-red-500 text-white py-6 px-8 rounded-lg hover:bg-red-600 transition">
              Browse
            </Button>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default SectionTwo;
