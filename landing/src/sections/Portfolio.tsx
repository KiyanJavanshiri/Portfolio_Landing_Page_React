import Container from "@/layout/Container";

const Portfolio = () => {
  const portfolios = [
    {
      couples: "Joy & Jordan",
      img: "/images/portfolio.png",
    },
    {
      couples: "Dianne & Michael",
      img: "/images/portfolio.png",
    },
    {
      couples: "Gabrielle & Simon",
      img: "/images/portfolio.png",
    },
    {
      couples: "Zee & Adrian",
      img: "/images/portfolio.png",
    },
  ];
  return (
    <section className="mb-18 lg:mb-26">
      <Container>
        <div className="md:mx-auto md:max-w-[800px] lg:max-w-[1040px]">
          <h2 className="text-[20px] leading-7 font-inter font-semibold text-primary-400 mb-4">
            Our portfolios
          </h2>
          <ul className="grid grid-cols-1 gap-y-4 md:grid-cols-2 md:gap-x-4">
            {portfolios.map((el, i) => (
              <li key={i} className="relative">
                <picture>
                  <img className="w-full h-full object-cover rounded-[8px]" src={el.img} alt={el.couples} />
                </picture>
                <div className="absolute bottom-3 left-1/2 -translate-x-1/2 text-center lg:bottom-4.5">
                  <p className="font-inter text-neutral-20 font-normal leading-5.5 text-small uppercase">THE WEDDING OF</p>
                  <p className="font-cormorant text-neutral-0 font-bold text-2xl leading-8 -tracking-[2%]">{el.couples}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  );
};

export default Portfolio;
