import css from "../shared/header/header.module.css";

const Hero = () => {
  return (
    <div
      className={`${css.header} flex flex-col w-full h-screen lg:h-[720px] items-center justify-center p-8`}
    >
      <p className="text-white text-4xl font-semibold tracking-tight w-full text-start lg:text-center mt-0">
        Welcome to XEV – Your Easy Landing Page Builder!
      </p>
      <p className="text-white/80 text-lg font-medium tracking-tight w-full lg:w-[720px] text-start lg:text-center mt-8">
        Creating a stunning landing page has never been this simple. At XEV,
        we're all about making things easy for you. Whether you're a business
        owner, startup, or just want to showcase something awesome, XEV has got
        your back.
      </p>
    </div>
  );
};

export default Hero;
