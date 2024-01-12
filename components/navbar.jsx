"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

const { default: ArrowDown } = require("../shared/icons/arrow-down-line.svg");
const { default: BookOpen } = require("../shared/icons/book-open-line.svg");
const {
  default: MoneyPoundCircle,
} = require("../shared/icons/money-pound-circle-line.svg");
const { default: FileList } = require("../shared/icons/file-list-line.svg");
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
    <nav className="flex flex-col lg:flex-row gap-4 items-center justify-center w-full p-6">
      <div className="flex flex-row gap-4 items-center justify-between w-full lg:w-auto">
        <Link
          href="/"
          className="transition-all bg-transparent lg:hover:bg-black/10 px-4 py-2 lg:rounded-lg flex flex-row items-center justify-between w-auto gap-4 lg:gap-2"
        >
          <p className="text-black text-lg font-bold tracking-tight w-full lg:w-auto text-start lg:text-center mt-0">
            XEV
          </p>
        </Link>
        <button
          className="flex flex-row items-center justify-center lg:hidden w-auto gap-2 bg-black/10 px-4 py-2 rounded-lg"
          onClick={handlerNavbar}
        >
          <p className="flex lg:hidden text-black/80 text-sm font-medium tracking-tight w-auto text-center mt-0">
            {expandNavbar ? "Collapse" : "Expand"}
          </p>
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
      <div className="hidden lg:flex flex-col lg:flex-row gap-4 items-start lg:items-center w-full lg:w-auto">
        <label className="text-black text-lg font-bold tracking-tight w-full lg:w-auto text-start lg:text-center mt-0">
          |
        </label>
      </div>
      {expandNavbar && (
        <div className="flex flex-col lg:flex-row gap-4 items-start lg:items-center w-full lg:w-auto">
          <Link
            href="/"
            className="transition-all bg-transparent hover:bg-black/10 px-4 py-2 rounded-lg flex flex-row-reverse lg:flex-row items-center justify-between w-full lg:w-auto gap-2"
          >
            <Image
              className="hidden lg:flex"
              src={BookOpen}
              width="16"
              height="16"
            />
            <Image
              className="flex lg:hidden"
              src={BookOpen}
              width="20"
              height="20"
            />
            <div className="flex flex-col gap-0 w-auto">
              <p className="text-black text-lg font-medium tracking-tight w-full lg:w-auto text-start lg:text-center mt-0">
                Documentation
              </p>
              <p className="flex lg:hidden text-black/80 text-sm font-medium tracking-tight w-full lg:w-auto text-start lg:text-center mt-0">
                Welcome to our "Documentations" hub – your go-to resource for
                unlocking the full potential of your landing page creation
                journey.
              </p>
            </div>
          </Link>
          <Link
            href="/"
            className="transition-all bg-transparent hover:bg-black/10 px-4 py-2 rounded-lg flex flex-row-reverse lg:flex-row items-center justify-between w-full lg:w-auto gap-2"
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
              <p className="text-black text-lg font-medium tracking-tight w-full lg:w-auto text-start lg:text-center mt-0">
                Pricing
              </p>
              <p className="flex lg:hidden text-black/80 text-sm font-medium tracking-tight w-full lg:w-auto text-start lg:text-center mt-0">
                Welcome to our "Documentations" hub – your go-to resource for
                unlocking the full potential of your landing page creation
                journey.
              </p>
            </div>
          </Link>
          <Link
            href="/"
            className="transition-all bg-transparent hover:bg-black/10 px-4 py-2 rounded-lg flex flex-row-reverse lg:flex-row items-center justify-between w-full lg:w-auto gap-2"
          >
            <Image
              className="hidden lg:flex"
              src={FileList}
              width="16"
              height="16"
            />
            <Image
              className="flex lg:hidden"
              src={FileList}
              width="20"
              height="20"
            />
            <div className="flex flex-col gap-0 w-auto">
              <p className="text-black text-lg font-medium tracking-tight w-full lg:w-auto text-start lg:text-center mt-0">
                Projects
              </p>
              <p className="flex lg:hidden text-black/80 text-sm font-medium tracking-tight w-full lg:w-auto text-start lg:text-center mt-0">
                Explore a gallery that showcases the diversity of my work, from
                design masterpieces to impactful campaigns.
              </p>
            </div>
          </Link>
          <Link
            href="/"
            className="transition-all bg-transparent hover:bg-black/10 px-4 py-2 rounded-lg flex flex-row-reverse lg:flex-row items-center justify-between w-full lg:w-auto gap-2"
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
              <p className="text-black text-lg font-medium tracking-tight w-full lg:w-auto text-start lg:text-center mt-0">
                Contact
              </p>
              <p className="flex lg:hidden text-black/80 text-sm font-medium tracking-tight w-full lg:w-auto text-start lg:text-center mt-0">
                Whether you have inquiries, partnership proposals, or just want
                to say hello. The space where connections are forged.
              </p>
            </div>
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
