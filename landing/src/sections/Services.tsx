import { useMediaQuery } from "@/hooks/useMediaQuery";
import DecorativeVector from "@/assets/icons/section-vector.svg?react";
import DecorativeVectorDesktop from "@/assets/icons/section-vector-desk.svg?react";

const Services = () => {
  const isLarge = useMediaQuery("(min-width: 1024px)");
  const services = [
    {
      title: "Photography",
      image: "/images/services.png",
    },
    {
      title: "Ceremony",
      image: "/images/services.png",
    },
    {
      title: "Wedding Design",
      image: "/images/services.png",
    },
  ];

  return (
    <section className="relative mb-12 lg:mb-14" id="services">
      <div className="lg:max-w-[1100px] lg:mx-auto lg:rounded-[8px] bg-neutral-10 px-8 pt-6 pb-8 lg:relative">
        <div className="max-w-[362px] mx-auto lg:max-w-none lg:mx-0 md:max-w-[800px]">
          <div className="lg:pb-[201px]">
            <h2 className="font-cormorant text-primary-500 text-[32px] leading-10 -tracking-[2%] font-bold mb-1">
              Services
            </h2>
            <p className="font-normal text-base leading-6 font-inter text-primary-300 max-w-[214px]">
              to plan and orchestrate your special occasion
            </p>
          </div>
          <ul className="px-10 mt-6 flex justify-center items-center flex-col gap-y-4 relative z-2 lg:flex-row lg: gap-x-4 lg:gap-y-0 lg:p-0 lg:px-8 lg:absolute lg:m-0 lg:right-0 lg:-bottom-[27px]">
            {services.map((service, i) => (
              <li
                className="text-center bg-neutral-0 rounded-[8px] shadow-[0_4px_10px_rgba(0,0,0,10%)] px-3 pt-3 pb-4.5 lg:max-w-[240px]"
                key={i}
              >
                <picture className="h-[210px] block">
                  <img
                    className="w-full h-full object-cover rounded-t-[8px]"
                    src={service.image}
                    alt={service.title}
                  />
                </picture>
                <p className="mt-4 font-inter text-primary-400 font-medium text-base leading-6">
                  {service.title}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <picture className="absolute top-[104px] z-1 left-1/2 -translate-x-1/2  lg:-top-10">
        {isLarge ? (
          <DecorativeVectorDesktop className="w-screen" />
        ) : (
          <DecorativeVector className="w-screen" />
        )}
      </picture>
    </section>
  );
};

export default Services;
