import { type ReactNode } from "react";

type ContainerProps = {
  children: ReactNode;
};

const Container = ({ children }: ContainerProps) => {
  return (
    <div className="mx-auto px-4 max-w-[394px] md:max-w-[896px] lg:max-w-[1440px]">
      {children}
    </div>
  );
};

export default Container;
