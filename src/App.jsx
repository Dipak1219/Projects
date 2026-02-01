import React, { useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { GoArrowDown } from "react-icons/go";
import { motion } from "framer-motion";

const App = () => {
  let [showContent, setShowContent] = useState(false);
  useGSAP(() => {
    const tl = gsap.timeline();

    tl.to(".vi-mask-group", {
      rotate: 10,
      duration: 2,
      ease: "power4.inOut",
      transformOrigin: "50% 50%",
    }).to(
      ".vi-mask-group",
      {
        scale: 10,
        duration: 2,
        delay: -1.5,
        ease: "Expo.easeInOut",
        transformOrigin: "50% 50%",
        opacity: 0,
        onUpdate: function () {
          if (this.progress() >= 0.9) {
            document.querySelector(".svg").remove();
            setShowContent(true);
            this.kill();
          }
        },
      }
      // "-=1.8"
    );
  });

  useGSAP(() => {
    if (!showContent) return;

    gsap.to(".main", {
      scale: 1,
      rotate: 0,
      duration: 2,
      delay: "-1",
      ease: "Expo.easeInOut",
    });
    gsap.to(".sky", {
      scale: 1.1,
      rotate: 0,
      duration: 2,
      delay: "-.8",
      ease: "Expo.easeInOut",
    });
    gsap.to(".bg", {
      scale: 1.1,
      rotate: 0,
      duration: 2,
      delay: "-.8",
      ease: "Expo.easeInOut",
    });
    gsap.to(".character", {
      scale: 0.8,
      x: "-50%",
      bottom: "-55%",
      rotate: 0,
      duration: 2,
      delay: "-.8",
      ease: "Expo.easeInOut",
    });
    gsap.to(".text", {
      scale: 1,
      rotate: 0,
      duration: 1,
      left: "50%",
      delay: "-.8",
      ease: "Expo.easeInOut",
    });

    const main = document.querySelector(".main");
    main?.addEventListener("mousemove", (e) => {
      const xMove = (e.clientX / window.innerWidth - 0.5) * 40; // -0.5 converts to => (-0.5 - 0.5) , after this * 40 => (-20 - 20)
      const yMove = (e.clientY / window.innerHeight - 0.5) * 40; // -0.5 converts to => (-0.5 - 0.5) , after this * 40 => (-20 - 20)
      gsap.to(".main .text", {
        x: `${xMove * 0.5}`,
        y: `${yMove * 0.5}`,
      });
      gsap.to(".sky", {
        x: xMove * 1.7,
        y: yMove * 1.7,
      });
      gsap.to(".bg", {
        x: xMove * 1.9,
        y: yMove * 1.9,
      });
    });
  }, [showContent]);

  return (
    <>
      <div className="svg flex items-center justify-center fixed top-0 left-0 w-full h-screen  overflow-hidden bg-black">
        <svg viewBox="0 0 800 600" preserveAspectRatio="xMidYMid slice">
          <defs>
            <mask id="viMask">
              <rect width="100%" height="100%" fill="black" />
              <g className="vi-mask-group">
                <text
                  x="50%"
                  y="50%"
                  fontSize="200"
                  fill="white"
                  fontFamily="Arial Black"
                  textAnchor="middle"
                  dominantBaseline="middle"
                >
                  VI
                </text>
              </g>
            </mask>
          </defs>
          <image
            xlinkHref="./bg.png"
            width="100%"
            height="100%"
            preserveAspectRatio="xMidYMid slice"
            mask="url(#viMask)"
          />
        </svg>
      </div>
      {showContent && (
        <div className="main w-full  overflow-hidden -rotate-12 scale-140">
          <div className="landing relative overflow-hidden  w-full h-screen bg-black">
            {/* Navbar */}
            {/* Navbar with Framer Motion */}
            <div className="navbar absolute top-0 left-0 w-full py-6 px-6 md:py-10 md:px-10 z-20">
              <div className="logo flex gap-4 items-center">
                {/* 3 Lines Container - Staggered Animation */}
                <motion.div
                  className="lines flex gap-1 flex-col"
                  initial="hidden"
                  whileInView="visible" // Triggers when in view (or use 'animate' to trigger immediately)
                  viewport={{ once: true }}
                  variants={{
                    hidden: { opacity: 0 },
                    visible: {
                      opacity: 1,
                      transition: { staggerChildren: 0.2 }, // Delay between each line
                    },
                  }}
                >
                  {/* Line 1 */}
                  <motion.div
                    variants={{ hidden: { scaleX: 0 }, visible: { scaleX: 1 } }}
                    transition={{ duration: 0.8, ease: "circOut" }}
                    style={{ originX: 0 }} // Ensures line grows from Left to Right
                    className="w-8 md:w-12 h-1 md:h-1.5 bg-white"
                  />

                  {/* Line 2 */}
                  <motion.div
                    variants={{ hidden: { scaleX: 0 }, visible: { scaleX: 1 } }}
                    transition={{ duration: 0.8, ease: "circOut" }}
                    style={{ originX: 0 }}
                    className="w-5 md:w-8 h-1 md:h-1.5 bg-white"
                  />

                  {/* Line 3 */}
                  <motion.div
                    variants={{ hidden: { scaleX: 0 }, visible: { scaleX: 1 } }}
                    transition={{ duration: 0.8, ease: "circOut" }}
                    style={{ originX: 0 }}
                    className="w-3 md:w-5 h-1 md:h-1.5 bg-white"
                  />
                </motion.div>

                {/* Logo Text Animation */}
                <motion.h3
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: 0.6, ease: "easeOut" }} // Delays until lines start appearing
                  className="leading-none text-white text-xl md:text-3xl font-bold uppercase"
                >
                  RockStar
                </motion.h3>
              </div>
            </div>

            {/* Body */}
            <div className="imagesDiv relative overflow-hidden w-full h-screen">
              <img
                className=" absolute scale-[2] -rotate-12 sky top-0 left-0 w-full h-full object-cover"
                src="./sky.png"
                alt=""
              />
              <img
                className=" absolute bg scale-[2] -rotate-3 top-0 left-0 w-full h-full object-cover"
                src="./bg.png"
                alt=""
              />

              {/* text */}

              <div className="text absolute rotate-[-20deg] scale-105 text-white flex flex-col top-5 left-[40%]">
                <h2 className=" text-[100px] leading-none -ml-40">grand</h2>
                <h2 className=" text-[100px] leading-none -ml-10">theft</h2>
                <h2 className=" text-[100px] leading-none ml-30 -mt-1">auto</h2>
              </div>

              <img
                className="absolute character bottom-[-150%] scale-[2] rotate-[-20deg] left-1/2 -translate-x-1/2"
                src="./girlbg.png"
                alt=""
              />
            </div>

            {/* BOttom */}
            <div className="btmBar absolute  bottom-0 right-0 px-10 py-6 w-full bg-linear-to-t from-black to-transparent ">
              <div className="text-white flex gap-2 items-center">
                <motion.div
                  animate={{ y: [-5, 5, -5] }} // Moves up 5px, down 5px, then repeats
                  transition={{
                    duration: 1.5,
                    repeat: Infinity, // Loops forever
                    ease: "easeInOut", // Smooth floating movement
                  }}
                >
                  <GoArrowDown className="text-2xl" />
                </motion.div>
                <h3 className=" font-sans font-medium text-sm md:text-2xl  text-gray-300 leading-relaxed ">
                  Scroll Down
                </h3>
              </div>
              <img
                src="./ps5.png"
                className="h-13 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                alt=""
              />
            </div>
          </div>

          {/* extra page */}

          <div className="w-full h-screen bg-black text-white">
            <div className="  h-full w-full flex items-center justify-center">
              <div className="w-1/2 h-4/5 flex items-center justify-center">
                <img className="h-full scale-125" src="./imag.png" alt="" />
              </div>

              <div className="w-full md:w-1/2 flex flex-col justify-center py-10 md:py-5 px-4 md:px-10 h-auto md:h-screen">
                {/* Header Animation */}
                <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                >
                  <h2 className="text-4xl md:text-7xl font-bold text-amber-600 drop-shadow-md">
                    Welcome to
                  </h2>
                  <h2 className="text-4xl md:text-7xl font-bold text-amber-100 drop-shadow-md">
                    Vice City
                  </h2>
                </motion.div>

                {/* Paragraph 1 */}
                <motion.p
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }} // Animates only once
                  transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                  className="font-sans font-medium text-sm md:text-base mt-6 text-gray-300 leading-relaxed"
                >
                  Enter the world of crime, excess, and opportunity. From the
                  neon-soaked streets of Vice City to the gritty backalleys,
                  every decision shapes your destiny. Build your empire, outrun
                  the law, and trust no one in a city where money talks and
                  power rules.
                </motion.p>

                {/* Paragraph 2 */}
                <motion.p
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }} // 0.4s Delay
                  className="font-sans font-medium mt-4 text-sm md:text-base text-gray-300 leading-relaxed"
                >
                  Experience the next evolution of open-world gameplay with
                  immersive heists, high-speed chases, and a living, breathing
                  ecosystem. The wait is over. Are you ready to take what's
                  yours?
                </motion.p>

                {/* Paragraph 3 */}
                <motion.p
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }} // 0.6s Delay
                  className="font-sans font-medium mt-4 text-sm md:text-base text-gray-300 leading-relaxed"
                >
                  Explore a massive, evolving map that pushes the boundaries of
                  immersion. Whether you're cruising down the strip at sunset or
                  planning the ultimate score with your crew, Grand Theft Auto
                  VI delivers an experience unlike anything before.
                </motion.p>

                {/* Button Animation */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.8 }}
                  className="mt-8"
                >
                  <button className="text-lg md:text-2xl px-6 py-3 md:px-8 md:py-4 cursor-pointer font-bold text-black bg-yellow-500 hover:bg-yellow-400 transition-colors rounded-sm">
                    Pre-Order Now
                  </button>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default App;
