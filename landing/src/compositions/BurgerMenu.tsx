import React from "react";
import Container from "@/layout/Container";
import ExitIcon from "@/assets/icons/exit.svg?react";

interface BurgerMenuProps {
  paths: {
    title: string;
    link: string;
  }[];
  onDelete: () => void
}

const BurgerMenu = ({ paths, onDelete }: BurgerMenuProps) => {
  return (
    <div className="fixed inset-0 z-100 bg-[rgba(0,0,0,40%)]">
      <div className="fixed top-0 left-0 right-0 bg-neutral-0 py-8 rounded-b-[8px]">
        <Container>
          <div className="relative pt-8">
            <button onClick={onDelete} className="absolute top-0 right-0">
              <ExitIcon className="stroke-primary-500" />
            </button>
            <ul>
              {paths.map((el, i) => (
                <li className="not-last:mb-4 rounded-[8px] active:bg-neutral-20 py-2 px-4 transition-colors duration-200 ease-in-out" key={i}>
                  <a onClick={onDelete} className="block text-base leading-6 text-primary-500 font-medium font-inter" href={el.link}>{el.title}</a>
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default BurgerMenu;
