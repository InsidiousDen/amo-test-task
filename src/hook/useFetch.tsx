import { useEffect, useState } from "react";

import { UserDTO } from "../utils/types";

const useFetch = (entity: string) => {
  const [data, setData] = useState<UserDTO[]>([]);

  useEffect(() => {
    async function fetchData() {
      await fetch(`https://jsonplaceholder.typicode.com/${entity}`)
        .then((response) => response.json())
        .then((json) => {
          setData(json);
        });
    }
    fetchData();
  }, []);

  return { data, setData };
};

export default useFetch;
