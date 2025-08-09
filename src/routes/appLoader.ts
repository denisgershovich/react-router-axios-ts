import type { LoaderFunction } from "react-router-dom";

export const appLoader: LoaderFunction = async ({ params }) => {
  return params;
};
