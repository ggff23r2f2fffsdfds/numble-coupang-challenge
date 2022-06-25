import axios from 'axios';
import Service from './service';

class UserService extends Service {
  async me() {
    const accessToken = this.getToken('accessToken');
    if (!accessToken) {
      return;
    }

    const { data } = await axios.get(
      process.env.NEXT_PUBLIC_API_HOST + '/users/me',
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      }
    );

    return data;
  }

  async read(id: number) {
    const { data } = await axios.get(
      process.env.NEXT_PUBLIC_API_HOST + '/users/' + id
    );

    return data;
  }
}

export default new UserService();
