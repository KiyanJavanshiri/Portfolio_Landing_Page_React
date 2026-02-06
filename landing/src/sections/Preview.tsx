import Container from "@/layout/Container.tsx";
import ArrowDown from "@/assets/icons/arrow-down.svg?react";

const Preview = () => {
  return (
    <section className="relative pt-[127px] pb-[281px] lg:pt-[191px] lg:pb-[338px]">
      <picture className="absolute inset-0">
        <source
          media="(min-width:1024px)"
          srcSet="/images/preview-desktop.png"
        />
        <img
          className="w-full h-full object-cover"
          src="/images/preview-desktop.png"
          alt="preview"
        />
      </picture>
      <Container>
        <div className="px-4 text-center relative z-2 lg:px-0 lg:mx-auto lg:max-w-[776px]">
          <h1 className="mb-4 font-cormorant text-large leading-16 -tracking-[2%] font-bold text-primary-500">
            Discover your perfect Italian wedding venue
          </h1>
          <p className="mb-14 font-inter font-normal text-base leading-6 text-primary-400 lg:max-w-[512px] lg:mx-auto">
            Sagittis adipiscing posuere id adipiscing aliquam posuere. Aliquet
            faucibus duis accumsan aliquet tempor diam dignissim suscipit. Nibh
            urna ut diam fames.
          </p>
          <a
            className="mx-auto inline-flex justify-center items-center flex-col gap-y-2"
            href="#browse"
          >
            <ArrowDown />
            <span className="text-small font-medium font-inter leading-5.5 text-primary-400">
              Scroll
            </span>
          </a>
        </div>
      </Container>
      <div className="clip w-full bg-white absolute bottom-0 h-[82px] lg:h-[75px]"></div>
    </section>
  );
};

export default Preview;
