import Image from "next/image";
import css from "../shared/header/header.module.css";

const {
  default: GitPullRequest,
} = require("../shared/icons/git-pull-request-line.svg");
const { default: Apple } = require("../shared/icons/apple-circle.svg");
const { default: GitHub } = require("../shared/icons/github-circle.svg");
const { default: Instagram } = require("../shared/icons/instagram-circle.svg");

const Hero = () => {
  return (
    <header
      className={`${css.header} flex flex-col w-full h-screen lg:h-[720px] items-center justify-center p-6 lg:p-16`}
    >
      <button className="transition-all bg-green-600/20 hover:bg-green-600/40 ring-1 ring-green-600 flex flex-row gap-2 items-center w-fit px-8 py-2 mt-0 rounded-full">
        <Image src={GitPullRequest} width="16" height="16" />
        <p className="text-green-200 text-sm font-semibold tracking-tight w-full text-start lg:text-center">
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
        we&rsquo;re all about making things easy for you. Whether you&rsquo;re a
        business owner, startup, or just want to showcase something awesome, XEV
        has got your back.
      </h2>
      <div className="flex flex-row gap-4 items-center w-full lg:w-auto mt-16">
        <button className="transition-all bg-stone-600/20 hover:bg-stone-600/40 ring-1 ring-stone-600 flex flex-row gap-2 items-center w-fit px-4 py-2 mt-0 rounded-full">
          <Image src={Apple} width="16" height="16" />
          <p className="text-green-200 text-sm font-semibold tracking-tight w-full text-start lg:text-center">
          Apple
        </p>
        </button>
        <button className="transition-all bg-slate-600/20 hover:bg-slate-600/40 ring-1 ring-slate-600 flex flex-row gap-2 items-center w-fit px-4 py-2 mt-0 rounded-full">
          <Image src={GitHub} width="16" height="16" />
          <p className="text-green-200 text-sm font-semibold tracking-tight w-full text-start lg:text-center">
          GitHub
        </p>
        </button>
        <button className="transition-all bg-red-600/20 hover:bg-red-600/40 ring-1 ring-red-600 flex flex-row gap-2 items-center w-fit px-4 py-2 mt-0 rounded-full">
          <Image src={Instagram} width="16" height="16" />
          <p className="text-green-200 text-sm font-semibold tracking-tight w-full text-start lg:text-center">
          Instagram
        </p>
        </button>
      </div>
    </header>
  );
};

export default Hero;
