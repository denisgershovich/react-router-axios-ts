type QueryParams = Record<string, string | number | null>;

let globalQueryParams: QueryParams = {};

export const setGlobalQueryParams = (params: QueryParams): void => {
  globalQueryParams = { ...globalQueryParams, ...params };
};

export const getGlobalQueryParams = (): QueryParams => {
  return globalQueryParams;
};
