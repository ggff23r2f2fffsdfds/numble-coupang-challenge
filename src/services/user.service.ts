import Service from './service';
import { customAxios } from '../infra/api';

class UserService extends Service {
  async me() {
    const accessToken = this.getToken('accessToken');
    if (!accessToken) {
      return;
    }
    const option = {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    };
    try {
      const { data } = await customAxios(option).get('/users/me');
      return data;
    } catch (error) {
      console.log(error);
    }
  }

  async read(id: number) {
    try {
      const { data } = await customAxios().get(`/users/${id}`);
      return data;
    } catch (error) {
      console.log(error);
    }
  }
}

export default new UserService();
