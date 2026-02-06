import Container from "@/layout/Container";
import ArrowLink from "@/assets/icons/arrow-link.svg?react";

const Locations = () => {
  const places = [
    {
      name: "Florence",
      img: "/images/place.png",
    },
    {
      name: "San Gamignano",
      img: "/images/place.png",
    },
    {
      name: "Volterra",
      img: "/images/place.png",
    },
    {
      name: "Chianti",
      img: "/images/place.png",
    },
    {
      name: "Val d’Orcia",
      img: "/images/place.png",
    },
    {
      name: "Siena",
      img: "/images/place.png",
    },
    {
      name: "Lucca",
      img: "/images/place.png",
    },
  ];
  return (
    <section className="mb-18 lg:mb-12" id="browse">
      <Container>
        <div className="md:mx-auto md:max-w-[800px] lg:max-w-[1040px]">
          <h2 className="font-cormorant text-primary-500 text-[32px] leading-10 -tracking-[2%] font-bold text-center mb-1">Locations</h2>
          <p className="font-inter font-normal leading-6 text-base text-primary-300 text-center">that you will remember forever</p>
          <ul className="grid grid-cols-2 gap-2 mt-6 md:grid-cols-3 lg:grid-cols-4 lg:gap-4">
            {places.map((place, i) => (
              <li className="relative" key={i}>
                <picture>
                  <img className="rounded-[8px] w-full h-full object-cover" src={place.img} alt={place.name} />
                </picture>
                <p className="absolute z-1 bottom-2 left-2 text-base font-medium font-inter text-neutral-0 leading-6 lg:bottom-2.5 lg:left-3.5">{place.name}</p>
              </li>
            ))}
            <li className="rounded-[8px] bg-primary-500 relative">
              <picture className="absolute top-1.5 right-2">
                <a href="#">
                  <ArrowLink />
                </a>
              </picture>
              <p className="absolute z-1 bottom-2 left-2 text-base font-medium font-inter text-neutral-0 leading-6">Browse more</p>
            </li>
          </ul>
        </div>
      </Container>
    </section>
  );
};

export default Locations;