import React, { FC } from "react";

interface DomainProps {
  variant: string;
  children: string;
}

const variantLiteral: { [key: string]: string } = {
  info: "green",
  net: "darkblue",
  org: "red",
  biz: "yellow",
};

const Domain: FC<DomainProps> = ({ variant, children }) => (
  <div style={{ color: variantLiteral[variant] }}>{children}</div>
);
export default Domain;
