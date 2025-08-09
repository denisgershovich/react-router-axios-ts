import type { LoaderFunction } from "react-router-dom";
import { setGlobalQueryParams } from "../api/globalQueryParams";

export const appLoader: LoaderFunction = async ({ request }) => {
  const url = new URL(request.url);
  const queryParams = Object.fromEntries(url.searchParams.entries());

  setGlobalQueryParams(queryParams);

  return queryParams;
};
