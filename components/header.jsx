import Image from "next/image";
import css from "../shared/header/header.module.css";
const {
  default: GitPullRequest,
} = require("../shared/icons/git-pull-request-line.svg");

const Hero = () => {
  return (
    <header
      className={`${css.header} flex flex-col w-full h-screen lg:h-[720px] items-center justify-center p-6 lg:p-16`}
    >
      <button className="transition-all bg-green-600/20 hover:bg-green-600/40 ring-1 ring-green-600 flex flex-row gap-2 items-center w-fit px-8 py-2 mt-0 rounded-full">
        <Image src={GitPullRequest} width="16" height="16" />
        <p className="text-green-200 text-sm font-medium tracking-tight w-full text-start lg:text-center">
          Discover the latest changes! -{" "}
          <span className="font-bold">03d30f</span>
        </p>
      </button>
      <h1 className="text-white text-4xl font-semibold tracking-tight w-full text-start lg:text-center mt-16">
        Introducing, <span className="text-blue-400">XEV</span> – Your Easy
        Landing Page Builder!
      </h1>
      <h2 className="text-white/80 text-lg font-medium tracking-tight w-full lg:w-[720px] text-start lg:text-center mt-8">
        Creating a stunning landing page has never been this simple. At XEV,
        we&rsquo;re all about making things easy for you. Whether you&rsquo;re a business
        owner, startup, or just want to showcase something awesome, XEV has got
        your back.
      </h2>
    </header>
  );
};

export default Hero;
