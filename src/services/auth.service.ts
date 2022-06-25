import axios from 'axios';
import Service from './service';

type SignupAgreements = {
  privacy: boolean;
  ad:
    | {
        email: boolean;
        sms: boolean;
        app: boolean;
      }
    | false;
};

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
  async signup(
    email: string,
    password: string,
    name: string,
    phoneNumber: string,
    agreements: SignupAgreements
  ) {
    const {
      data: { access, refresh },
    } = await axios.post(process.env.NEXT_PUBLIC_API_HOST + '/auth/signup', {
      email,
      password,
      name,
      phoneNumber,
      agreements,
    });

    this.setToken(access, refresh);
  }

  /** 이미 생성된 계정의 토큰을 발급받습니다. */
  async login(email: string, password: string) {
    const {
      data: { access, refresh },
    } = await axios.post(process.env.NEXT_PUBLIC_API_HOST + '/auth/login', {
      email,
      password,
    });

    this.setToken(access, refresh);
  }
}

export default new AuthService();
