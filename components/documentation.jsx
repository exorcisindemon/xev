import Image from "next/image";
import css from "../shared/css/documentation.module.css";

const { default: BookOpen } = require("../shared/icons/book-open-line.svg");
const { default: ArrowRightGreen } = require("../shared/icons/arrow-right-line-green.svg");
const { default: ArrowRightBlue } = require("../shared/icons/arrow-right-line-blue.svg");
const { default: ArrowRightPurple } = require("../shared/icons/arrow-right-line-purple.svg");
const {
  default: ArrowRightUp,
} = require("../shared/icons/arrow-right-up-line.svg");

const Documentation = () => {
  return (
    <main
      className={`${css.documentation} flex flex-col w-full h-auto lg:h-[720px] items-center justify-center gap-8 lg:gap-16 px-4 py-16 lg:p-16`}
    >
      <div className="flex flex-col w-full lg:w-[720px]">
        <div className="flex flex-row gap-2 lg:gap-4 items-center justify-start lg:justify-center w-full">
          <Image src={BookOpen} width="20" height="20" />
          <p className="text-black text-2xl font-semibold tracking-tight w-auto text-start lg:text-center mt-0">
            Documentation
          </p>
        </div>
        <p className="text-black/80 text-lg font-medium tracking-tight w-full text-start lg:text-center mt-4 lg:mt-8">
          Welcome to our &rsquo;Documentations&rsquo; hub – your go-to resource
          for unlocking the full potential of your landing page creation
          journey.
        </p>
      </div>
      <div className="flex flex-col lg:grid lg:grid-cols-4 gap-8 lg:gap-16 items-center w-full h-full">
        <div className="transition-all bg-white/60 lg:hover:bg-green-400/60 ring-1 ring-green-600 lg:ring-black/20 hover:lg:ring-green-600 flex flex-col w-full h-full justify-between gap-16 p-4 lg:p-8 rounded-lg">
          <div className="flex flex-col items-start gap-4">
            <p className="text-black text-lg font-semibold tracking-tight w-full text-start mt-0">
              Introduction
            </p>
            <p className="text-black/80 text-sm font-medium tracking-tight w-full text-start mt-0">
              &undefined
            </p>
          </div>
          <button className="transition-all bg-green-600/20 hover:bg-green-600/40 ring-1 ring-green-600 flex flex-row-reverse gap-2 items-center w-fit px-8 py-2 mt-0 rounded-full">
            <Image src={ArrowRightGreen} width="16" height="16" />
            <p className="text-green-800 text-sm font-medium tracking-tight w-full text-start lg:text-center">
              Read <span className="font-bold">Introduction</span>
            </p>
          </button>
        </div>
        <div className="transition-all bg-white/60 lg:hover:bg-blue-400/60 ring-1 ring-blue-600 lg:ring-black/20 hover:lg:ring-blue-600 flex flex-col w-full h-full justify-between gap-16 p-4 lg:p-8 rounded-lg">
          <div className="flex flex-col items-start gap-4">
            <p className="text-black text-lg font-semibold tracking-tight w-full text-start mt-0">
              Getting Started
            </p>
            <p className="text-black/80 text-sm font-medium tracking-tight w-full text-start mt-0">
              &undefined
            </p>
          </div>
          <button className="transition-all bg-blue-600/20 hover:bg-blue-600/40 ring-1 ring-blue-600 flex flex-row-reverse gap-2 items-center w-fit px-8 py-2 mt-0 rounded-full">
            <Image src={ArrowRightBlue} width="16" height="16" />
            <p className="text-blue-800 text-sm font-medium tracking-tight w-full text-start lg:text-center">
              Read <span className="font-bold">Getting Started</span>
            </p>
          </button>
        </div>
        <div className="transition-all bg-white/60 lg:hover:bg-purple-400/60 ring-1 ring-purple-600 lg:ring-black/20 hover:lg:ring-purple-600 flex flex-col w-full h-full justify-between gap-16 p-4 lg:p-8 rounded-lg">
          <div className="flex flex-col items-start gap-4">
            <p className="text-black text-lg font-semibold tracking-tight w-full text-start mt-0">
              Knowing Specification
            </p>
            <p className="text-black/80 text-sm font-medium tracking-tight w-full text-start mt-0">
              &undefined
            </p>
          </div>
          <button className="transition-all bg-purple-600/20 hover:bg-purple-600/40 ring-1 ring-purple-600 flex flex-row-reverse gap-2 items-center w-fit px-8 py-2 mt-0 rounded-full">
            <Image src={ArrowRightPurple} width="16" height="16" />
            <p className="text-purple-800 text-sm font-medium tracking-tight w-full text-start lg:text-center">
              Read <span className="font-bold">Knowing Specification</span>
            </p>
          </button>
        </div>
        <div className="flex flex-col w-full">
          <div className="flex flex-row gap-2 lg:gap-4 items-center w-full">
            <p className="text-black text-2xl font-semibold tracking-tight w-auto text-start mt-0">
              See Full Documentation
            </p>
            <Image src={ArrowRightUp} width="20" height="20" />
          </div>
          <p className="text-black/80 text-lg font-medium tracking-tight w-full text-start mt-4 lg:mt-8">
            Welcome to our &rsquo;Documentations&rsquo; hub – your go-to
            resource for unlocking the full potential of your landing page
            creation journey.
          </p>
        </div>
      </div>
    </main>
  );
};

export default Documentation;
