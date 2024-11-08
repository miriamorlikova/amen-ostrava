import React from "react";

type H1TextProps = {
  children: React.ReactNode;
};

const H1Text = ({ children }: H1TextProps) => {
  return <div>{children}</div>;
};

export default H1Text;
