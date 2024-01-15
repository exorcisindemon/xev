import Image from "next/image";
import css from "../shared/css/landing/control.module.css";

const {
  default: BookOpenWhite,
} = require("../shared/icons/book-open-line-white.svg");
const {
  default: ArrowRightGreen,
} = require("../shared/icons/arrow-right-line-green.svg");
const {
  default: ArrowRightBlue,
} = require("../shared/icons/arrow-right-line-blue.svg");
const {
  default: ArrowRightPurple,
} = require("../shared/icons/arrow-right-line-purple.svg");
const {
  default: ArrowRightUpWhite,
} = require("../shared/icons/arrow-right-up-line-white.svg");

const Documentation = () => {
  return (
    <main
      className={`${css.documentation} flex flex-col w-full h-auto items-center justify-center gap-8 lg:gap-16 px-8 py-16 lg:p-16`}
    >
      <div className="flex flex-col w-full lg:w-[720px]">
        <div className="flex flex-row gap-2 lg:gap-4 items-center justify-start lg:justify-center w-full">
          <Image src={BookOpenWhite} width="20" height="20" />
          <p className="text-white text-2xl font-semibold tracking-tight w-auto text-start lg:text-center mt-0">
            Documentation
          </p>
        </div>
        <p className="text-white/80 text-lg font-medium tracking-tight w-full text-start lg:text-center mt-4 lg:mt-8">
          Explore our documentation, and let&rsquo;s empower your mastery of our
          platform or product. Clarity awaits – welcome to a resourceful journey
          of discovery and expertise!
        </p>
      </div>
      <div className="flex flex-col lg:grid lg:grid-cols-4 gap-8 lg:gap-16 items-center w-full h-full">
        <div className="transition-all bg-green-400/60 lg:bg-black/60 lg:hover:bg-green-400/60 hover:backdrop-blur-lg ring-1 ring-green-600 lg:ring-black/20 hover:lg:ring-green-600 flex flex-col w-full h-full justify-between gap-16 p-4 lg:p-8 rounded-lg">
          <div className="flex flex-col items-start gap-4">
            <p className="text-white text-lg font-semibold tracking-tight w-full text-start mt-0">
              Introduction
            </p>
            <p className="text-white/80 text-sm font-medium tracking-tight w-full text-start mt-0">
              XEV empowers developers and designers alike to unleash their
              creativity, offering an intuitive and flexible environment for
              building exquisite user interfaces. From dynamic single-page
              applications to modular components, XEV redefines the art of web
              development.
            </p>
            <p className="text-white/80 text-sm font-medium tracking-tight w-full text-start mt-0">
              Bid farewell to the complexities of traditional development
              processes. XEV streamlines your workflow, providing a robust set
              of tools that accelerate development without compromising on
              quality.
            </p>
          </div>
          <button className="transition-all bg-green-600/20 hover:bg-green-600/40 ring-1 ring-green-600 flex flex-row-reverse gap-2 items-center w-fit px-8 py-2 mt-0 rounded-full">
            <Image src={ArrowRightGreen} width="16" height="16" />
            <p className="text-green-200 text-sm font-medium tracking-tight w-full text-start">
              Read <span className="font-bold">Introduction</span>
            </p>
          </button>
        </div>
        <div className="transition-all bg-blue-400/60 lg:bg-black/60 lg:hover:bg-blue-400/60 hover:backdrop-blur-lg ring-1 ring-blue-600 lg:ring-black/20 hover:lg:ring-blue-600 flex flex-col w-full h-full justify-between gap-16 p-4 lg:p-8 rounded-lg">
          <div className="flex flex-col items-start gap-4">
            <p className="text-white text-lg font-semibold tracking-tight w-full text-start mt-0">
              Getting Started
            </p>
            <p className="text-white/80 text-sm font-medium tracking-tight w-full text-start mt-0">
              Welcome aboard the XEV journey! Whether you&rsquo;re a seasoned
              developer or a curious beginner, diving into the world of XEV is
              your gateway to efficient and creative React.js web development.
            </p>
          </div>
          <button className="transition-all bg-blue-600/20 hover:bg-blue-600/40 ring-1 ring-blue-600 flex flex-row-reverse gap-2 items-center w-fit px-8 py-2 mt-0 rounded-full">
            <Image src={ArrowRightBlue} width="16" height="16" />
            <p className="text-blue-200 text-sm font-medium tracking-tight w-full text-start">
              Read <span className="font-bold">Getting Started</span>
            </p>
          </button>
        </div>
        <div className="transition-all bg-purple-400/60 lg:bg-black/60 lg:hover:bg-purple-400/60 hover:backdrop-blur-lg ring-1 ring-purple-600 lg:ring-black/20 hover:lg:ring-purple-600 flex flex-col w-full h-full justify-between gap-16 p-4 lg:p-8 rounded-lg">
          <div className="flex flex-col items-start gap-4">
            <p className="text-white text-lg font-semibold tracking-tight w-full text-start mt-0">
              Knowing Specification
            </p>
            <p className="text-white/80 text-sm font-medium tracking-tight w-full text-start mt-0">
              XEV is built around the principles of component-driven
              development. Understand the fundamentals of React.js component
              architecture, where UI elements are modular and reusable. Leverage
              XEV&rsquo;s extensive library of pre-designed components or create your
              own to build scalable and maintainable user interfaces.
            </p>
          </div>
          <button className="transition-all bg-purple-600/20 hover:bg-purple-600/40 ring-1 ring-purple-600 flex flex-row-reverse gap-2 items-center w-fit px-8 py-2 mt-0 rounded-full">
            <Image src={ArrowRightPurple} width="16" height="16" />
            <p className="text-purple-200 text-sm font-medium tracking-tight w-full text-start">
              Read <span className="font-bold">Knowing Specification</span>
            </p>
          </button>
        </div>
        <div className="flex flex-col w-full">
          <div className="flex flex-row gap-2 lg:gap-4 items-center w-full">
            <p className="text-white text-2xl font-semibold tracking-tight w-auto text-start mt-0">
              See Full Documentation
            </p>
            <Image src={ArrowRightUpWhite} width="20" height="20" />
          </div>
          <p className="text-white/80 text-lg font-medium tracking-tight w-full text-start mt-4 lg:mt-8">
            Ready to unlock the full potential of XEV? Dive into the
            comprehensive documentation to illuminate your path to mastery.
            Discover in-depth insights, step-by-step guides, and a wealth of
            resources that will empower you to harness every facet of
            XEV&rsquo;s capabilities.
          </p>
        </div>
      </div>
    </main>
  );
};

export default Documentation;
