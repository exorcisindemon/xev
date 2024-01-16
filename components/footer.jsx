import Image from "next/image";
import Link from "next/link";

const {
  default: ArrowLeftUpWhite,
} = require("../shared/icons/arrow-left-up-line-white.svg");
const {
  default: ArrowRightUpWhite,
} = require("../shared/icons/arrow-right-up-line-white.svg");

const Footer = () => {
  return (
    <main className="bg-black flex flex-col w-full h-auto items-start justify-center px-8 py-16 lg:p-16 gap-8 lg:gap-16">
      <div className="flex flex-col lg:grid lg:grid-cols-5 gap-8 lg:gap-16">
        <div className="flex flex-col items-start gap-0 p-0 w-full">
          <p className="text-white text-lg font-semibold tracking-tight w-full text-start mt-0">
            About XEV
          </p>
          <p className="text-stone-200/80 text-sm font-medium tracking-tight w-full text-justify mt-4 lg:mt-8">
            XEV envisions a future where web development is not just a technical
            process but an artistic expression. We are driven by the belief that
            each line of code contributes to a digital masterpiece. With a focus
            on user-centric design and seamless functionality, XEV strives to
            redefine the boundaries of what&rsquo;s possible in the React.js
            ecosystem.
          </p>
          <p className="text-stone-200/80 text-sm font-bold tracking-tight w-full text-justify mt-4 lg:mt-8">
            Semarang, Central Java, Indonesia.
          </p>
        </div>
        <div className="flex flex-col items-start gap-0 p-0 w-full">
          <p className="text-white text-lg font-semibold tracking-tight w-full text-start mt-0">
            Quick Links
          </p>
          <Link
            href="#header"
            className="transition-all text-white/80 hover:opacity-80 text-sm font-medium tracking-tight flex flex-row gap-4 w-full justify-between text-start mt-4 lg:mt-8"
          >
            Introducing, XEV
            <Image src={ArrowLeftUpWhite} width="20" height="20" />
          </Link>
          <Link
            href="#documentation"
            className="transition-all text-white/80 hover:opacity-80 text-sm font-medium tracking-tight flex flex-row gap-4 w-full justify-between text-start mt-2"
          >
            Documentation
            <Image src={ArrowLeftUpWhite} width="20" height="20" />
          </Link>
          <Link
            href="#pricing"
            className="transition-all text-white/80 hover:opacity-80 text-sm font-medium tracking-tight flex flex-row gap-4 w-full justify-between text-start mt-2"
          >
            Pricing
            <Image src={ArrowLeftUpWhite} width="20" height="20" />
          </Link>
          <Link
            href="/"
            className="transition-all text-white/80 hover:opacity-80 text-sm font-medium tracking-tight flex flex-row gap-4 w-full justify-between text-start mt-2"
          >
            Layouts
            <Image src={ArrowRightUpWhite} width="20" height="20" />
          </Link>
          <Link
            href="/"
            className="transition-all text-white/80 hover:opacity-80 text-sm font-medium tracking-tight flex flex-row gap-4 w-full justify-between text-start mt-2"
          >
            Components
            <Image src={ArrowRightUpWhite} width="20" height="20" />
          </Link>
        </div>
        <div className="flex flex-col items-start gap-0 p-0 w-full">
          <p className="text-white text-lg font-semibold tracking-tight w-full text-start mt-0">
            Recent Update
          </p>
          <Link
            href="#header"
            className="transition-all text-white/80 hover:opacity-80 text-sm font-medium tracking-tight flex flex-row gap-4 w-full justify-between text-start mt-4 lg:mt-8"
          >
            Mathilda Release - 03d30f
            <Image src={ArrowRightUpWhite} width="20" height="20" />
          </Link>
        </div>
        <div className="flex flex-col items-start gap-0 p-0 w-full">
          <p className="text-white text-lg font-semibold tracking-tight w-full text-start mt-0">
            XEV Web Development
          </p>
          <Link
            href="https://react.dev/"
            className="transition-all text-white/80 hover:opacity-80 text-sm font-medium tracking-tight flex flex-row gap-4 w-full justify-between text-start mt-4 lg:mt-8"
          >
            Library (React.js)
            <Image src={ArrowRightUpWhite} width="20" height="20" />
          </Link>
          <Link
            href="https://nextjs.org/"
            className="transition-all text-white/80 hover:opacity-80 text-sm font-medium tracking-tight flex flex-row gap-4 w-full justify-between text-start mt-2"
          >
            Framework (Next.js JSX)
            <Image src={ArrowRightUpWhite} width="20" height="20" />
          </Link>
          <Link
            href="https://tailwindcss.com/"
            className="transition-all text-white/80 hover:opacity-80 text-sm font-medium tracking-tight flex flex-row gap-4 w-full justify-between text-start mt-2"
          >
            CSS Framework (Tailwind CSS)
            <Image src={ArrowRightUpWhite} width="20" height="20" />
          </Link>
          <Link
            href="https://www.figma.com/community/file/895264632479192383/remix-icons-2-5-0-line-fill"
            className="transition-all text-white/80 hover:opacity-80 text-sm font-medium tracking-tight flex flex-row gap-4 w-full justify-between text-start mt-2"
          >
            Remix Icons 2.5.0 - Line & Fill (Community)
            <Image src={ArrowRightUpWhite} width="20" height="20" />
          </Link>
          <Link
            href="https://www.figma.com/community/file/1106207129726694107/abstract-shapes-liquid-2"
            className="transition-all text-white/80 hover:opacity-80 text-sm font-medium tracking-tight flex flex-row gap-4 w-full justify-between text-start mt-2"
          >
            Abstract shapes (liquid 2) (Community)
            <Image src={ArrowRightUpWhite} width="20" height="20" />
          </Link>
        </div>
        <div className="flex flex-col items-start gap-0 p-0 w-full">
          <p className="text-white text-lg font-semibold tracking-tight w-full text-start mt-0">
            Special Attribution To
          </p>
          <p className="text-stone-200/80 text-sm font-medium tracking-tight w-full text-justify mt-4 lg:mt-8">
            React.js, Next.js JSX, and Tailwind CSS for making our development
            smooth and stylish. Kudos to the Remix Icons community for Remix
            Icons 2.5.0 - Line & Fill, adding flair to our interfaces. Cheers to
            the community contributors for Abstract Shapes (Liquid 2), bringing
            a modern touch to our designs.
          </p>
        </div>
      </div>
      <div className="flex flex-col lg:flex-row items-center gap-0 lg:gap-8 p-0 w-full">
        <p className="text-white text-lg font-semibold tracking-tight w-auto text-start mt-0">
          Follow Us to Receive More Update
        </p>
        <div className="flex flex-row gap-4 mt-4 lg:mt-0">
          <p className="text-stone-200/80 text-sm font-medium tracking-tight w-auto text-start mt-0">
            GitHub
          </p>
          <p className="text-stone-200/80 text-sm font-medium tracking-tight w-auto text-start mt-0">
            Instagram
          </p>
          <p className="text-stone-200/80 text-sm font-medium tracking-tight w-auto text-start mt-0">
            X
          </p>
        </div>
      </div>
    </main>
  );
};

export default Footer;
