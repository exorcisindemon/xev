import Image from "next/image";
import css from "../shared/css/landing/control.module.css";

const {
  default: MoneyPoundCircle,
} = require("../shared/icons/money-pound-circle-line.svg");
const {
  default: ArrowRightStone,
} = require("../shared/icons/arrow-right-line-stone.svg");
const {
  default: ArrowRightSlate,
} = require("../shared/icons/arrow-right-line-slate.svg");
const {
  default: ArrowRightIndigo,
} = require("../shared/icons/arrow-right-line-indigo.svg");

const Pricing = () => {
  return (
    <main
      className={`${css.pricing} flex flex-col w-full h-auto items-center justify-center gap-8 lg:gap-16 px-8 py-16 lg:p-16`}
    >
      <div className="flex flex-col w-full lg:w-[720px]">
        <div className="flex flex-row gap-2 lg:gap-4 items-center justify-start lg:justify-center w-full">
          <Image src={MoneyPoundCircle} width="20" height="20" />
          <p className="text-black text-2xl font-semibold tracking-tight w-auto text-start lg:text-center mt-0">
            Pricing
          </p>
        </div>
        <p className="text-black/80 text-lg font-medium tracking-tight w-full text-start lg:text-center mt-4 lg:mt-8">
          Each tier is crafted to deliver maximum value. No hidden fees, no
          surprises – just transparent and flexible pricing.
        </p>
      </div>
      <div className="flex flex-col lg:grid lg:grid-cols-3 gap-8 lg:gap-16 items-center w-full lg:min-w-[720px] lg:max-w-[1080px] h-full">
        <div className="transition-all bg-stone-400/40 lg:hover:bg-stone-400/60 hover:backdrop-blur-lg ring-1 ring-stone-600 lg:ring-stone-600/20 hover:lg:ring-stone-600 flex flex-col w-full h-full justify-start gap-8 p-4 lg:p-8 rounded-lg">
          <div className="flex flex-col items-start gap-2">
            <button className="transition-all flex flex-row gap-2 hover:gap-4 items-center">
              <p className="text-stone-800 text-lg font-semibold tracking-tight w-full text-start mt-0">
                Standard
              </p>
              <Image src={ArrowRightStone} width="20" height="20" />
            </button>
            <p className="text-stone-800/80 text-sm font-medium tracking-tight w-full text-start mt-0">
              Perfect for Personal Projects
            </p>
          </div>
          <div className="flex flex-col items-start gap-0">
            <p className="text-stone-800 text-lg font-semibold tracking-tight w-full text-start mt-0">
              Features
            </p>
            <p className="text-stone-800/80 text-sm font-medium tracking-tight w-full text-start mt-2">
              • Purchase components individually
            </p>
            <p className="text-stone-800/80 text-sm font-medium tracking-tight w-full text-start mt-2">
              • Purchase layouts section separately
            </p>
            <p className="text-stone-800/80 text-sm font-medium tracking-tight w-full text-start mt-2">
              •{" "}
              <span className="bg-stone-600 text-stone-200 px-2 py-0 rounded-lg">
                React
              </span>{" "}
              hooks not included
            </p>
          </div>
          <div className="flex flex-col items-start gap-0">
            <p className="text-stone-800 text-lg font-semibold tracking-tight w-full text-start mt-0">
              Price
            </p>
            <p className="text-stone-800/80 text-sm font-medium tracking-tight w-full text-start mt-2">
              •{" "}
              <span className="bg-stone-600 text-stone-200 px-2 py-0 rounded-lg">
                $ 0.8
              </span>{" "}
              per Component
            </p>
            <p className="text-stone-800/80 text-sm font-medium tracking-tight w-full text-start mt-2">
              •{" "}
              <span className="bg-stone-600 text-stone-200 px-2 py-0 rounded-lg">
                $ 4
              </span>{" "}
              per Layout Section
            </p>
            <p className="text-stone-800/80 text-sm font-medium tracking-tight w-full text-start mt-2">
              •{" "}
              <span className="bg-stone-600 text-stone-200 px-2 py-0 rounded-lg">
                $ 2
              </span>{" "}
              per Custom Hooks
            </p>
          </div>
        </div>
        <div className="transition-all bg-slate-400/40 lg:hover:bg-slate-400/60 hover:backdrop-blur-lg ring-1 ring-slate-600 lg:ring-slate-600/20 hover:lg:ring-slate-600 flex flex-col w-full h-full justify-start gap-8 p-4 lg:p-8 rounded-lg">
          <div className="flex flex-col items-start gap-2">
            <button className="transition-all flex flex-row gap-2 hover:gap-4 items-center">
              <p className="text-slate-800 text-lg font-semibold tracking-tight w-full text-start mt-0">
                Pro
              </p>
              <Image src={ArrowRightSlate} width="20" height="20" />
            </button>
            <p className="text-slate-800/80 text-sm font-medium tracking-tight w-full text-start mt-0">
              Designed for Small Enterprises
            </p>
          </div>
          <div className="flex flex-col items-start gap-0">
            <p className="text-slate-800 text-lg font-semibold tracking-tight w-full text-start mt-0">
              Features
            </p>
            <p className="text-slate-800/80 text-sm font-medium tracking-tight w-full text-start mt-2">
              • Purchase once and unlock access to 4 components
            </p>
            <p className="text-slate-800/80 text-sm font-medium tracking-tight w-full text-start mt-2">
              • Purchase once and unlock access to 1 layout template
            </p>
            <p className="text-slate-800/80 text-sm font-medium tracking-tight w-full text-start mt-2">
              •{" "}
              <span className="bg-slate-600 text-slate-200 px-2 py-0 rounded-lg">
                React
              </span>{" "}
              hooks included
            </p>
          </div>
          <div className="flex flex-col items-start gap-0">
            <p className="text-slate-800 text-lg font-semibold tracking-tight w-full text-start mt-0">
              Price
            </p>
            <p className="text-slate-800/80 text-sm font-medium tracking-tight w-full text-start mt-2">
              •{" "}
              <span className="bg-slate-600 text-slate-200 px-2 py-0 rounded-lg">
                $ 20
              </span>{" "}
              to unlock Pro Features
            </p>
          </div>
        </div>
        <div className="transition-all bg-indigo-400/40 lg:hover:bg-indigo-400/60 hover:backdrop-blur-lg ring-1 ring-indigo-600 lg:ring-indigo-600/20 hover:lg:ring-indigo-600 flex flex-col w-full h-full justify-start gap-8 p-4 lg:p-8 rounded-lg">
          <div className="flex flex-col items-start gap-2">
            <button className="transition-all flex flex-row gap-2 hover:gap-4 items-center">
              <p className="text-indigo-800 text-lg font-semibold tracking-tight w-full text-start mt-0">
                Ultimate
              </p>
              <Image src={ArrowRightIndigo} width="20" height="20" />
            </button>
            <p className="text-indigo-800/80 text-sm font-medium tracking-tight w-full text-start mt-0">
              Tailored for Growing Enterprises
            </p>
          </div>
          <div className="flex flex-col items-start gap-0">
            <p className="text-indigo-800 text-lg font-semibold tracking-tight w-full text-start mt-0">
              Features
            </p>
            <p className="text-indigo-800/80 text-sm font-medium tracking-tight w-full text-start mt-2">
              • Purchase once and unlock access to 12 components
            </p>
            <p className="text-indigo-800/80 text-sm font-medium tracking-tight w-full text-start mt-2">
              • Purchase once and unlock access to 4 layout template
            </p>
            <p className="text-indigo-800/80 text-sm font-medium tracking-tight w-full text-start mt-2">
              •{" "}
              <span className="bg-indigo-600 text-indigo-200 px-2 py-0 rounded-lg">
                React
              </span>{" "}
              hooks included
            </p>
          </div>
          <div className="flex flex-col items-start gap-0">
            <p className="text-indigo-800 text-lg font-semibold tracking-tight w-full text-start mt-0">
              Price
            </p>
            <p className="text-indigo-800/80 text-sm font-medium tracking-tight w-full text-start mt-2">
              •{" "}
              <span className="bg-indigo-600 text-indigo-200 px-2 py-0 rounded-lg">
                $ 95
              </span>{" "}
              to unlock Ultimate Features
            </p>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Pricing;
