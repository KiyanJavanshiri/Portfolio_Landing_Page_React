import React, { useState } from "react";
import { createPortal } from "react-dom";
import { useMediaQuery } from "@/hooks/useMediaQuery.ts";
import Container from "@/layout/Container";
import BurgerMenu from "./BurgerMenu";
import InstagramIcon from "@/assets/icons/instagram.svg?react";
import TwitterIcon from "@/assets/icons/twitter.svg?react";
import FacebookIcon from "@/assets/icons/facebook.svg?react";
import MenuIcon from "@/assets/icons/menu.svg?react";
import LogoIcon from "@/assets/icons/logo.svg?react";

const Header = () => {
  const isLarge = useMediaQuery("(min-width: 1024px)");
  const [isActive, setIsActive] = useState(false);
  const paths = [
    {
      title: "Browse",
      link: "#browse",
    },
    {
      title: "Services",
      link: "#services",
    },
    {
      title: "Testimonials",
      link: "#testimonials",
    },
    {
      title: "Contact us",
      link: "#contactus",
    },
  ];
  const socials = [
    {
      icon: <FacebookIcon />,
      link: "#",
    },
    {
      icon: <InstagramIcon />,
      link: "#",
    },
    {
      icon: <TwitterIcon />,
      link: "#",
    },
  ];

  const handleMenu = () => {
    setIsActive(!isActive)
  }
  return (
    <header className="z-1 absolute top-0 right-0 left-0 bg-transparent px-4 py-8 lg:px-12">
      <Container>
        <div className="flex justify-between items-center">
          <picture className="inline-flex">
            <a href="#" className="block">
              <LogoIcon />
            </a>
          </picture>
          {isLarge ? (
            <div className="flex justify-center items-center gap-x-10">
              <nav>
                <ul className="flex justify-center items-center gap-x-10">
                  {paths.map((path, i) => (
                    <li key={i}>
                      <a
                        className="font-inter font-normal text-base text-neutral-0 leading-[24px]"
                        href={path.link}
                      >
                        {path.title}
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>
              <ul className="flex justify-center items-center gap-x-2">
                {socials.map((el, i) => (
                  <li key={i}>
                    <picture>
                      <a href={el.link}>{el.icon}</a>
                    </picture>
                  </li>
                ))}
              </ul>
            </div>
          ) : (
            <button onClick={handleMenu} type="button">
              <MenuIcon />
            </button>
          )}
        </div>
      </Container>
      {isActive && createPortal(<BurgerMenu paths={paths} onDelete={handleMenu} />, document.body)}
    </header>
  );
};

export default Header;
