import React from "react";

import Domain from "../Domain/Domain";
import Phone from "../Phone/Phone";

const GenerateComponent = ({ value }: any) => {
  if (value[0] === "website") {
    return (
      <Domain variant={value[1].split(".").pop() ?? ""}>{value[1]}</Domain>
    );
  } else if (value[0] === "phone") {
    return <Phone>{value[1]}</Phone>;
  }
  return value[1];
};

export default GenerateComponent;
