import React, { ReactNode } from "react";

type WrapperProptype = {
  className?: string;
  children: ReactNode;
};
const Wrapper: React.FC<WrapperProptype> = ({ className = "", children }) => {
  return (
    <div
      className={`max-w-[64rem] w-full flex-1 mx-auto px-8  ${className}`}
    >
      {children}
    </div>
  );
};

export default Wrapper;
