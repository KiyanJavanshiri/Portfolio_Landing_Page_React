import Container from "@/layout/Container";
import LogoIcon from "@/assets/icons/logo.svg?react";
import InstagramIcon from "@/assets/icons/instagram.svg?react";
import TwitterIcon from "@/assets/icons/twitter.svg?react";
import FacebookIcon from "@/assets/icons/facebook.svg?react";

const Footer = () => {
  const paths = [
    {
      title: "About us",
      path: "#",
    },
    {
      title: "Terms of Service",
      path: "#",
    },
    {
      title: "Privacy Policy",
      path: "#",
    },
    {
      title: "FAQ",
      path: "#",
    },
  ];

  const socials = [
    {
      icon: <FacebookIcon className="white-stroke" />,
      link: "#",
    },
    {
      icon: <InstagramIcon className="white-stroke" />,
      link: "#",
    },
    {
      icon: <TwitterIcon className="white-stroke" />,
      link: "#",
    },
  ];

  return (
    <footer className="px-4 pt-12 pb-18.5 bg-neutral-50 lg:py-4.5 lg:px-0">
      <Container>
        <div className="flex flex-col gap-y-12 lg:flex-row lg:justify-between lg:items-center lg:max-w-[1040px] lg:mx-auto">
          <picture>
            <a href="#">
              <LogoIcon />
            </a>
          </picture>
          <ul className="flex flex-col justify-start gap-y-4 lg:flex-row lg:gap-x-10">
            {paths.map((el, i) => (
              <li key={i}>
                <a
                  className="text-base font-normal text-neutral-40 font-inter leading-6"
                  href={el.path}
                >
                  {el.title}
                </a>
              </li>
            ))}
          </ul>
          <ul className="flex justify-start items-center gap-x-2">
            {socials.map((el, i) => (
              <li key={i}>
                <a href={el.link}>{el.icon}</a>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
