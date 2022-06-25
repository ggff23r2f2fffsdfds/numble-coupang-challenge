import Service from './service';
import { LoginParams, SignupParams } from '../types/auth.type';
import { customAxios } from '../infra/api';

class AuthService extends Service {
  /** refreshToken을 이용해 새로운 토큰을 발급받습니다. */
  async refresh() {
    const refreshToken = this.getToken('refreshToken');
    if (!refreshToken) {
      return;
    }

    try {
      const option = {
        headers: {
          Authorization: `Bearer ${refreshToken}`,
        },
      };
      const {
        data: { access, refresh },
      } = await customAxios(option).get('/auth/refresh');

      this.setToken(access, refresh);
    } catch (error) {
      console.log(error);
    }
  }

  /** 새로운 계정을 생성하고 토큰을 발급받습니다. */
  async signup(userSignupData: SignupParams) {
    const {
      data: { access, refresh },
    } = await customAxios().post('/auth/signup', userSignupData);

    this.setToken(access, refresh);
  }

  /** 이미 생성된 계정의 토큰을 발급받습니다. */
  async login(userLoginData: LoginParams) {
    const {
      data: { access, refresh },
    } = await customAxios().post('/auth/login', userLoginData);

    this.setToken(access, refresh);
  }
}

export default new AuthService();
