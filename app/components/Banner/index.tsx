import Image from "next/image";
import { AnimatedShinyTextDemo } from "@/components/demos/animated-shiny-text-demo";
import { Cover } from "@/components/ui/cover";

const Banner = () => {
  return (
    <div className="mx-auto max-w-7xl  sm:py-10 px-6 lg:px-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 my-0">
        {/* COLUMN-1 */}

        <div className="mx-auto sm:mx-0">
          <div className="py-3 text-center lg:text-start">
            <Cover>
              <button className="z-1 text-blue bg-lightblue hover:shadow-xl text-sm md:text-lg font-bold px-6 py-1 rounded-3xl tracking-wider hover:text-white hover:bg-black">
                DESIGN SOLUTION
              </button>
            </Cover>
          </div>
          <div className="py-3 md:py-10 lg:py-10 text-center lg:text-start">
            <h1 className="text-6xl lg:text-80xl font-bold text-darkpurple">
              Solution to <br /> bring your <br /> ideas to life.
            </h1>
          </div>
          <div className="my-2 text-center lg:text-start">
            <a
              href="https://calendly.com/dev-champions-info/30min"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="text-sm md:text-xl font-semibold hover:shadow-xl bg-blue text-white py-3 px-6 md:py-5 md:px-14 rounded-full hover:bg-hoblue">
                Get Started
              </button>
            </a>
          </div>
        </div>

        {/* COLUMN-2 */}

        <div className="lg:-m-24 lg:pt-20 hidden lg:block">
          <Image
            src="/images/banner/banner2.jpg"
            alt="hero-image"
            width={800}
            height={642}
            unoptimized
          />
        </div>
      </div>
    </div>
  );
};

export default Banner;
