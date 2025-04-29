"use client";
import { Button } from "@/components/ui/button";
import React, { useEffect, useRef } from "react";
import TravelStats from "./_components/TravelStats";
import CompanyLogos from "./_components/CompanyLogos";
// import { animate, stagger } from "animejs";

const AboutPage = () => {
  // const titleRef = useRef(null);
  // const paragraphRef1 = useRef(null);
  // const paragraphRef2 = useRef(null);
  // const buttonsRef = useRef(null);

  // useEffect(() => {
  //   animate({
  //     targets: titleRef.current,
  //     translateY: [-50, 0],
  //     opacity: [0, 1],
  //     easing: "easeOutExpo",
  //     duration: 1000,
  //     delay: 200,
  //   });

  //   animate({
  //     targets: [paragraphRef1.current, paragraphRef2.current],
  //     translateY: [30, 0],
  //     opacity: [0, 1],
  //     easing: "easeOutExpo",
  //     duration: 800,
  //     delay: stagger(200),
  //   });

  //   animate({
  //     targets: buttonsRef.current?.children,
  //     translateY: [30, 0],
  //     opacity: [0, 1],
  //     easing: "easeOutExpo",
  //     duration: 800,
  //     delay: stagger(300),
  //   });
  // }, []);
  return (
    <div>
      <div className="bg-red-100">
        <div className="mx-auto container text-center py-16 px-16 lg:px-28">
          <h2
            // ref={titleRef}
            className="text-2xl lg:text-4xl font-bold text-blue-600 mb-4"
          >
            Welcome To Travel
          </h2>
          <div className="flex justify-center items-center mb-6">
            <hr className="border-gray-300 w-1/5" />
            <span className="mx-3 text-gray-400 text-xl">&#128064;</span>
            <hr className="border-gray-300 w-1/5" />
          </div>
          <p
            // ref={paragraphRef1}
            className="text-gray-600 mb-8 max-w-3xl mx-auto"
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio ipsum
            consequatur expedita sint, labore suscipit, dolores voluptatum odit
            a totam dolorum inventore eveniet necessitatibus excepturi rerum!
            Fuga nostrum ipsam qui commodi cupiditate ut dignissimos quas
            accusamus, quibusdam vel in unde non sed! Atque laboriosam dolorum
            explicabo aspernatur hic vero natus.
          </p>
          <p
            //  ref={paragraphRef2}
            className="text-gray-600 mb-8 max-w-3xl mx-auto"
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio ipsum
            consequatur expedita sint, labore suscipit, dolores voluptatum odit
            a totam dolorum inventore eveniet necessitatibus excepturi rerum!
            Fuga nostrum ipsam qui commodi cupiditate ut dignissimos quas
            accusamus, quibusdam vel in unde non sed! Atque laboriosam dolorum
            explicabo aspernatur hic vero natus.
          </p>
          <div
            //  ref={buttonsRef}
            className="flex justify-center gap-4"
          >
            <Button className="bg-green-500 text-white py-6 px-8 rounded-lg hover:bg-green-600 transition">
              Detail
            </Button>
            <Button className="bg-red-500 text-white py-6 px-8 rounded-lg hover:bg-red-600 transition">
              Browse
            </Button>
          </div>
        </div>
      </div>
      <TravelStats />
      <CompanyLogos />
      <div className="min-h-[310]"></div>
    </div>
  );
};

export default AboutPage;
