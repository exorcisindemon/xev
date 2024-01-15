import Image from "next/image";
import css from "../shared/css/header.module.css";

const { default: Command } = require("../shared/icons/command-line.svg");
const { default: ThumbUp } = require("../shared/icons/thumb-up-line.svg");

const Hero = () => {
  return (
    <header
      className={`${css.header} flex flex-col w-full h-screen lg:h-[720px] items-center justify-center p-4 lg:p-16`}
    >
      <div className="flex flex-row flex-wrap gap-4 items-center">
        <button className="transition-all bg-green-600/20 hover:bg-green-600/40 ring-1 ring-green-600 flex flex-row gap-2 items-center w-fit px-8 py-2 mt-0 rounded-full">
          <Image src={Command} width="16" height="16" />
          <p className="text-green-800 text-sm font-medium tracking-tight w-full text-start lg:text-center">
            Discover the latest changes! -{" "}
            <span className="font-bold">03d30f</span>
          </p>
        </button>
        <button className="transition-all bg-amber-600/20 hover:bg-amber-600/40 ring-1 ring-amber-600 flex flex-row gap-2 items-center w-fit px-4 py-2 mt-0 rounded-full">
          <Image src={ThumbUp} width="16" height="16" />
          <p className="text-amber-800 text-sm font-medium tracking-tight w-full text-start lg:text-center">
            0
          </p>
        </button>
      </div>
      <h1 className="text-black text-4xl font-semibold tracking-tight w-full lg:w-[720px] text-start lg:text-center mt-16">
        Introducing, <span className="text-blue-600">XEV</span> – Your React.js
        Web & Components Crafter!
      </h1>
      <h2 className="text-black/80 text-lg font-medium tracking-tight w-full lg:w-[720px] text-start lg:text-center mt-8">
        Meet XEV, your ultimate companion in the world of React.js web
        development. Whether you&rsquo;re a seasoned developer or just diving
        into the realm of front-end design, XEV is here to simplify and amplify
        your creative journey.
      </h2>
    </header>
  );
};

export default Hero;
