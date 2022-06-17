import React, { FC } from "react";

interface PhoneProps {
  children: string;
}

const Phone: FC<PhoneProps> = ({ children }) => {
  return (
    <div style={{ color: "blue", textDecoration: "underline" }}>{children}</div>
  );
};

export default Phone;
