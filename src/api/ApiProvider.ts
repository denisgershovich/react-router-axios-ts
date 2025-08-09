import config from "../config";
import BaseApi from "./BaseApi";

class ApiProvider<T> extends BaseApi<T> {
  constructor(endpoint: string) {
    super(config.apiBaseUrl, endpoint);
  }
}

export default ApiProvider;
