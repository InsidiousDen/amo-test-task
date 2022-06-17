import { ItemI } from "../utils/types";

const useHeadersArray = (item: ItemI, headers: string[]) => {
  const filterByHeaders = (headerItem: ItemI, obj: ItemI) => {
    const filteredArray: ItemI = obj;
    for (const i of Object.entries(headerItem)) {
      const [key, value] = i;
      headers.map((header: string) => {
        if (typeof value === "string" || typeof value === "number") {
          if (header === key) {
            filteredArray[key] = value;
          }
        } else if (typeof value === "object") {
          filterByHeaders(value, filteredArray);
        }
      });
    }

    return filteredArray;
  };

  const renderRow = (obj: ItemI, array: string[] = []) => {
    const renderedArray: any[] = array;
    for (const i of Object.entries(obj)) {
      const [key, value] = i;

      if (typeof value === "string" || typeof value === "number") {
        renderedArray.push([key, value]);
      } else if (typeof value === "object") {
        renderRow(value, renderedArray);
      }
    }

    return renderedArray;
  };

  const sortHeaders = (filterByHeaders: string[]) => {
    const sortedArray = filterByHeaders.sort((a, b) => {
      const indexOfA = headers.indexOf(a[0]);
      const indexOfB = headers.indexOf(b[0]);
      return indexOfA < indexOfB ? -1 : 1;
    });

    return sortedArray;
  };
  const finalArray = sortHeaders(renderRow(filterByHeaders(item, {})));

  return { finalArray };
};
export default useHeadersArray;
