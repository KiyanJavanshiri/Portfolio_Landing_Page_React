import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import Container from "@/layout/Container";
import SwiperNavButtons from "./SwiperNavButtons/SwiperNavButtons";
import "swiper/css";
import "swiper/css/navigation";

const Featured = () => {
  const venues = [
    {
      id: 1,
      title: "Château de Chambord",
      location: "Loire Valley, France",
      description: `One of the most recognizable châteaux in the world due to its 
    distinctive French Renaissance architecture, Chambord was originally built 
    as a hunting lodge for King Francis I. Its grand double-helix staircase 
    and vast parkland make it a magical venue.`,
      highlight: `The château’s vast grounds and surrounding forests create a 
    romantic, fairy-tale atmosphere, perfect for weddings and cultural events.`,
      image: "/images/venue.png",
    },
    {
      id: 2,
      title: "Castello di Amorosa",
      location: "Napa Valley, California",
      description: `A medieval-style Tuscan castle and winery built using 
    authentic European craftsmanship. Castello di Amorosa offers sprawling 
    courtyards, vineyards, and stone halls that immerse guests in an old-world 
    Italian setting.`,
      highlight: `The castle’s authentic details, including hand-carved 
    woodwork and ironwork, provide a truly unique atmosphere for gatherings.`,
      image: "/images/venue.png",
    },
    {
      id: 3,
      title: "Ashford Castle",
      location: "County Mayo, Ireland",
      description: `Dating back to 1228, Ashford Castle is a five-star hotel 
    steeped in history and luxury. Surrounded by woodlands and Lake Corrib, 
    it combines medieval charm with modern hospitality.`,
      highlight: `Its expansive gardens, grand dining halls, and breathtaking 
    lake views make it a world-class venue for events and celebrations.`,
      image: "/images/venue.png",
    },
  ];
  const [active, setActive] = useState(0);
  return (
    <section className="mb-22.5">
      <Container>
        <div className="md:mx-auto md:max-w-[800px] lg:max-w-[1040px]">
          <h2 className="text-[20px] leading-7 font-inter font-semibold text-primary-400 mb-4">
            Featured venues
          </h2>
          <div className="">
            <Swiper
              modules={[Navigation]}
              onSlideChange={(swiper) => {
                setActive(swiper.activeIndex);
              }}
            >
              {venues.map((el, i) => (
                <SwiperSlide className="p-2" key={i}>
                  <div className="rounded-b-[8px] shadow-[0_4px_10px_rgba(0,0,0,10%)] bg-neutral-0 lg:grid lg:grid-cols-[auto_minmax(0,1fr)]">
                    <picture className="h-[229px] block lg:h-full lg:max-w-[361px]">
                      <img
                        className="rounded-t-[8px] object-cover w-full h-full lg:rounded-t-none lg:rounded-l-[8px]"
                        src={el.image}
                        alt={el.location}
                      />
                    </picture>
                    <div className="px-6 py-8 lg:px-12 lg:py-8">
                      <p className="text-2xl leading-8 -tracking-[2%] font-bold font-cormorant text-primary-300 mb-6">
                        <span className="text-2xl leading-8 -tracking-[2%] font-bold font-cormorant text-primary-500">
                          {el.id}
                        </span>{" "}
                        /{venues.length}
                      </p>
                      <h3 className="text-[32px] leading-10 font-bold font-cormorant -tracking-[2%] mb-1 text-primary-500">
                        {el.title}
                      </h3>
                      <p className="text-small leading-5.5 font-normal font-inter mb-1 text-primary-400">
                        {el.location}
                      </p>
                      <p className="text-neutral-40 text-small leading-5.5 font-normal font-inter mt-4 line-clamp-6 h-[132px] lg:line-clamp-3 lg:h-[66px]">
                        {el.description}
                      </p>
                      <p className="text-neutral-40 text-small leading-5.5 font-normal font-inter mt-6 line-clamp-7 h-[140px] lg:line-clamp-3 lg:h-[66px]">
                        {el.highlight}{" "}
                        <span className="block lg:inline-block">
                          <a
                            className="text-primary-500 text-small leading-5.5 font-medium font-inter"
                            href="#"
                          >
                            View more
                          </a>
                        </span>
                      </p>
                      <SwiperNavButtons index={active} />
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Featured;
