import Image from "next/image";
import css from "../shared/documentation/documentation.module.css";

const { default: BookOpen } = require("../shared/icons/book-open-line.svg");
const { default: ArrowRight } = require("../shared/icons/arrow-right-line.svg");

const Documentation = () => {
  return (
    <main
      className={`${css.documentation} flex flex-col lg:grid lg:grid-cols-4 w-full h-auto lg:h-[480px] items-center justify-center gap-8 lg:gap-16 p-6 lg:p-16`}
    >
      <div className="flex flex-col w-full">
        <div className="flex flex-row gap-2 lg:gap-4 items-center w-full">
          <Image src={BookOpen} width="20" height="20" />
          <p className="text-black text-2xl font-semibold tracking-tight w-auto text-start mt-0">
            Documentation
          </p>
        </div>
        <p className="text-black/80 text-lg font-medium tracking-tight w-full text-start mt-4 lg:mt-8">
          Welcome to our &rsquo;Documentations&rsquo; hub – your go-to resource
          for unlocking the full potential of your landing page creation
          journey.
        </p>
      </div>
      <div className="flex flex-col w-full h-full justify-center p-4 border">
        <p className="text-black text-lg lg:text-2xl font-semibold tracking-tight w-full text-start mt-0">
          Getting Started
        </p>
        <p className="text-black/80 text-sm lg:text-lg font-medium tracking-tight w-full text-start mt-4 lg:mt-8">
          &undefined
        </p>
      </div>
      <div className="flex flex-col w-full h-full justify-center p-4 border">
        <p className="text-black text-lg lg:text-2xl font-semibold tracking-tight w-full text-start mt-0">
          Knowing Specification
        </p>
        <p className="text-black/80 text-sm lg:text-lg font-medium tracking-tight w-full text-start mt-4 lg:mt-8">
          &undefined
        </p>
      </div>
      <div className="flex flex-col w-full">
        <div className="flex flex-row gap-2 lg:gap-4 items-center w-full">
          <p className="text-black text-2xl font-semibold tracking-tight w-auto text-start mt-0">
            See Full Documentation
          </p>
          <Image src={ArrowRight} width="20" height="20" />
        </div>
        <p className="text-black/80 text-lg font-medium tracking-tight w-full text-start mt-4 lg:mt-8">
          Welcome to our &rsquo;Documentations&rsquo; hub – your go-to resource
          for unlocking the full potential of your landing page creation
          journey.
        </p>
      </div>
    </main>
  );
};

export default Documentation;
