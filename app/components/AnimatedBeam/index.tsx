import { AnimatedBeamMultipleOutputDemo } from "@/components/demos/animated-beam-demo";
import Image from "next/image";
import BoxRevealDemo from "@/components/demos/box-reveal-demo";
import { Link as ScrollLink, Element } from "react-scroll";

const AnimatedBeam = () => {
  return (
    <div id="process">
      <main className="md:px-0 md:mx-auto items-center justify-center ">
        <h1 className="text-3xl md:text-5xl md:text-center font-medium flex flex-col md:flex-row items-center gap-x-2 mx-auto justify-center z-9">
          Our{" "}
          <span className="text-blue-500 flex gap-x-1 items-center">
            {" "}
            <Image
              src={"/icons/squiggle.svg"}
              width={1000}
              height={1000}
              className="w-6"
              alt="image"
              unoptimized
            />
            Creative
            <Image
              src={"/icons/star.svg"}
              width={10000}
              height={10000}
              className="w-6 mb-1 md:mb-8"
              alt="image"
              unoptimized
            />
          </span>{" "}
          Process
        </h1>

        <p
          className="text-center 
          py-4 md:w-1/2 mx-auto px-4
          text-xl md:text-2xl text-gray-500"
        >
          All of our services are designed to help your business to get noticed.
        </p>
        <div className="grid  grid-cols-1 md:grid-cols-2  justify-center items-center py-2 md:ml-60">
          {/* COLUMN-1 */}
          <div className=" order-2 md:order-1 my-3 py-3">
            <AnimatedBeamMultipleOutputDemo />
          </div>

          {/* COLUMN-2 */}
          <div className="relative order-1 md:order-2">
            <BoxRevealDemo />
          </div>
        </div>
      </main>
    </div>
  );
};

export default AnimatedBeam;
