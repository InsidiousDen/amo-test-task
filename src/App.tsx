import React, { FC } from "react";

import CustomTable from "./components/CustomTable/CustomTable";

const App: FC = () => {
  const headers1 = ["id", "username", "email", "phone", "city", "website"];
  const headers2 = ["id", "title", "body", "userId"];

  return (
    <div className="App">
      <CustomTable type="users" headers={headers1} />
      <CustomTable type="posts" headers={headers2} />
    </div>
  );
};

export default App;
