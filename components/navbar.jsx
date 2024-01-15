"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

const { default: ArrowDown } = require("../shared/icons/arrow-down-line.svg");
const { default: BookOpenBlack } = require("../shared/icons/book-open-line-black.svg");
const { default: Layout } = require("../shared/icons/layout-line.svg");
const { default: Function } = require("../shared/icons/function-line.svg");
const {
  default: MoneyPoundCircle,
} = require("../shared/icons/money-pound-circle-line.svg");
const { default: Phone } = require("../shared/icons/phone-line.svg");

const Navbar = () => {
  const [expandNavbar, setExpandNavbar] = useState(false);

  const handlerNavbar = () => {
    setExpandNavbar(!expandNavbar);
  };

  useEffect(() => {
    const handlerBreakpoint = window.innerWidth <= 765;
    setExpandNavbar(!handlerBreakpoint);
  }, []);

  return (
    <main
      className={`${
        expandNavbar ? "h-screen lg:h-auto" : "h-auto"
      } bg-white flex flex-col lg:flex-row gap-4 items-center justify-between lg:justify-center w-full p-4`}
    >
      <div className="flex flex-row gap-4 items-center justify-between w-full lg:w-auto">
        <Link
          href="/"
          className="transition-all bg-transparent lg:hover:bg-black/20 lg:hover:ring-1 lg:hover:ring-black/40 lg:px-4 lg:py-2 lg:rounded-lg flex flex-col lg:flex-row items-center justify-between w-auto gap-0 lg:gap-2"
        >
          <p className="text-black text-base font-bold tracking-tight w-full lg:w-auto text-start lg:text-center mt-0">
            XEV
          </p>
          <p className="text-black/80 text-xs lg:text-base font-medium tracking-tight w-full lg:w-auto text-start lg:text-center mt-0">
            Mathilda Release
          </p>
        </Link>
        <button
          className="transition-all bg-black/10 ring-1 ring-black/40 flex flex-row items-center justify-center lg:hidden w-auto gap-2 p-2 rounded-lg"
          onClick={handlerNavbar}
        >
          <Image
            className={`${
              expandNavbar ? "rotate-180" : "rotate-0"
            } transition-all flex lg:hidden`}
            src={ArrowDown}
            width="20"
            height="20"
          />
        </button>
      </div>
      {expandNavbar && (
        <div className="hidden lg:flex flex-col lg:flex-row gap-4 items-start lg:items-center w-full lg:w-auto">
          <label className="text-black text-base font-bold tracking-tight w-full lg:w-auto text-start lg:text-center mt-0">
            |
          </label>
        </div>
      )}
      {expandNavbar && (
        <div className="flex flex-col lg:flex-row gap-0 lg:gap-4 items-start lg:items-center w-full lg:w-auto">
          <Link
            href="#documentation"
            className="transition-all bg-transparent hover:bg-black/20 hover:ring-1 hover:ring-black/40 p-4 lg:px-4 lg:py-2 rounded-lg flex flex-row-reverse lg:flex-row items-center justify-between w-full lg:w-auto gap-2"
          >
            <Image
              className="hidden lg:flex"
              src={BookOpenBlack}
              width="16"
              height="16"
            />
            <Image
              className="flex lg:hidden"
              src={BookOpenBlack}
              width="20"
              height="20"
            />
            <div className="flex flex-col gap-0 w-auto">
              <p className="text-black text-base font-medium tracking-tight w-full lg:w-auto text-start lg:text-center mt-0">
                Documentation
              </p>
              <p className="flex lg:hidden text-black/80 text-xs font-medium tracking-tight w-full lg:w-auto text-start lg:text-center mt-2">
                Explore our documentation, and let&rsquo;s empower your mastery
                of our platform or product. Clarity awaits – welcome to a
                resourceful journey of discovery and expertise!
              </p>
            </div>
          </Link>
          <Link
            href="/"
            className="transition-all bg-transparent hover:bg-black/20 hover:ring-1 hover:ring-black/40 p-4 lg:px-4 lg:py-2 rounded-lg flex flex-row-reverse lg:flex-row items-center justify-between w-full lg:w-auto gap-2"
          >
            <Image
              className="hidden lg:flex"
              src={Layout}
              width="16"
              height="16"
            />
            <Image
              className="flex lg:hidden"
              src={Layout}
              width="20"
              height="20"
            />
            <div className="flex flex-col gap-0 w-auto">
              <p className="text-black text-base font-medium tracking-tight w-full lg:w-auto text-start lg:text-center mt-0">
                Layouts
              </p>
              <p className="flex lg:hidden text-black/80 text-xs font-medium tracking-tight w-full lg:w-auto text-start lg:text-center mt-2">
                Built with the power of React.js, seamlessly combines
                functionality with a sleek and responsive design, offering a
                user-friendly exploration of content.
              </p>
            </div>
          </Link>
          <Link
            href="/"
            className="transition-all bg-transparent hover:bg-black/20 hover:ring-1 hover:ring-black/40 p-4 lg:px-4 lg:py-2 rounded-lg flex flex-row-reverse lg:flex-row items-center justify-between w-full lg:w-auto gap-2"
          >
            <Image
              className="hidden lg:flex"
              src={Function}
              width="16"
              height="16"
            />
            <Image
              className="flex lg:hidden"
              src={Function}
              width="20"
              height="20"
            />
            <div className="flex flex-col gap-0 w-auto">
              <p className="text-black text-base font-medium tracking-tight w-full lg:w-auto text-start lg:text-center mt-0">
                Components
              </p>
              <p className="flex lg:hidden text-black/80 text-xs font-medium tracking-tight w-full lg:w-auto text-start lg:text-center mt-2">
                Dive into the showcase to find versatile and functional React.js
                components, designed to seamlessly integrate into your projects.
              </p>
            </div>
          </Link>
          <Link
            href="#pricing"
            className="transition-all bg-transparent hover:bg-black/20 hover:ring-1 hover:ring-black/40 p-4 lg:px-4 lg:py-2 rounded-lg flex flex-row-reverse lg:flex-row items-center justify-between w-full lg:w-auto gap-2"
          >
            <Image
              className="hidden lg:flex"
              src={MoneyPoundCircle}
              width="16"
              height="16"
            />
            <Image
              className="flex lg:hidden"
              src={MoneyPoundCircle}
              width="20"
              height="20"
            />
            <div className="flex flex-col gap-0 w-auto">
              <p className="text-black text-base font-medium tracking-tight w-full lg:w-auto text-start lg:text-center mt-0">
                Pricing
              </p>
              <p className="flex lg:hidden text-black/80 text-xs font-medium tracking-tight w-full lg:w-auto text-start lg:text-center mt-2">
                Each tier is crafted to deliver maximum value. No hidden fees,
                no surprises – just transparent and flexible pricing.
              </p>
            </div>
          </Link>
          <Link
            href="/"
            className="transition-all bg-transparent hover:bg-black/20 hover:ring-1 hover:ring-black/40 p-4 lg:px-4 lg:py-2 rounded-lg flex flex-row-reverse lg:flex-row items-center justify-between w-full lg:w-auto gap-2"
          >
            <Image
              className="hidden lg:flex"
              src={Phone}
              width="16"
              height="16"
            />
            <Image
              className="flex lg:hidden"
              src={Phone}
              width="20"
              height="20"
            />
            <div className="flex flex-col gap-0 w-auto">
              <p className="text-black text-base font-medium tracking-tight w-full lg:w-auto text-start lg:text-center mt-0">
                Contact
              </p>
              <p className="flex lg:hidden text-black/80 text-xs font-medium tracking-tight w-full lg:w-auto text-start lg:text-center mt-2">
                Whether you have inquiries, partnership proposals, or just want
                to say hello. The space where connections are forged.
              </p>
            </div>
          </Link>
        </div>
      )}
    </main>
  );
};

export default Navbar;
