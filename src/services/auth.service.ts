import axios from 'axios';
import Service from './service';
import { LoginParams, SignupParams } from '../types/auth.type';

class AuthService extends Service {
  /** refreshToken을 이용해 새로운 토큰을 발급받습니다. */
  async refresh() {
    const refreshToken = this.getToken('refreshToken');
    if (!refreshToken) {
      return;
    }

    const {
      data: { access, refresh },
    } = await axios.post(
      process.env.NEXT_PUBLIC_API_HOST + '/auth/refresh',
      null,
      {
        headers: {
          Authorization: `Bearer ${refreshToken}`,
        },
      }
    );

    this.setToken(access, refresh);
  }

  /** 새로운 계정을 생성하고 토큰을 발급받습니다. */
  async signup(userSignupData: SignupParams) {
    const {
      data: { access, refresh },
    } = await axios.post(
      process.env.NEXT_PUBLIC_API_HOST + '/auth/signup',
      userSignupData
    );

    this.setToken(access, refresh);
  }

  /** 이미 생성된 계정의 토큰을 발급받습니다. */
  async login(userLoginData: LoginParams) {
    const {
      data: { access, refresh },
    } = await axios.post(
      process.env.NEXT_PUBLIC_API_HOST + '/auth/login',
      userLoginData
    );

    this.setToken(access, refresh);
  }
}

export default new AuthService();
