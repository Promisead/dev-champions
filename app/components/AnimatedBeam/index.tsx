import { AnimatedBeamMultipleOutputDemo } from "@/components/demos/animated-beam-demo";
import Image from "next/image";
import BoxRevealDemo from "@/components/demos/box-reveal-demo";
import { Link as ScrollLink, Element } from "react-scroll";

const AnimatedBeam = () => {
  return (
    <div>
      <Element name="process" id="process">
        <main className="px-4  md:px-0 mx-20 md:mx-auto">
          <h1 className="text-3xl md:text-5xl md:text-center font-medium flex flex-col md:flex-row items-center gap-x-2 mx-auto justify-center">
            Our{" "}
            <span className="text-blue-500 flex gap-x-1 items-center">
              {" "}
              <Image
                src={"/icons/squiggle.svg"}
                width={10000}
                height={10000}
                className="w-6"
                alt="image"
              />
              Creative
              <Image
                src={"/icons/star.svg"}
                width={10000}
                height={10000}
                className="w-6 mb-1 md:mb-8"
                alt="image"
              />
            </span>{" "}
            Process
          </h1>

          <p
            className="text-center 
          py-4 md:w-1/2 mx-auto 
          text-xl md:text-2xl text-gray-500"
          >
            All of our services are designed to help your business to get
            noticed.
          </p>
          <div className="flex flex-col md:flex-row justify-center items-center ">
            <div className="w-full md:w-1/2 h-full md:h-auto order-2 md:order-1">
              <AnimatedBeamMultipleOutputDemo />
            </div>
            <div className="w-full md:w-1/2 h-full md:h-auto order-1 md:order-2">
              <BoxRevealDemo />
            </div>
          </div>

          <div className="flex flex-col md:flex-row items-center justify-center w-full md:w-1/2 mx-auto">
            <div className="w-full md:w-1/2 order-2 md:order-1"></div>
            <div className="w-full md:w-1/2 order-1 md:order-2 md:ml-0"></div>
          </div>
        </main>
      </Element>
    </div>
  );
};

export default AnimatedBeam;
