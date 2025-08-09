import ApiProvider from "../api/ApiProvider";
import type { User } from "../models/User";

class UsersService extends ApiProvider<User> {
  constructor() {
    super("/users");
  }

  async getById(id: number) {
    const response = await this.api.get<User>(`/${id}`);
    return response.data;
  }
}

export default new UsersService();
