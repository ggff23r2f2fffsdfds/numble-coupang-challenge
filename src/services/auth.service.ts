import Service from './service';
import { LoginParams, SignupParams } from '../types/auth.type';
import { customAxios } from '../infra/api';

type SignupAgreements = {
  /** 만 14세 이상입니다 */
  terms_fourteen: boolean;
  /** 쿠팡 이용약관 동의 */
  terms_service: boolean;
  /** 전자금융거래 이용약관 동의 */
  terms_commerce: boolean;
  /** 개인정보 수집 및 이용 동의 */
  terms_privacy_collect_use: boolean;
  /** 개인정보 제3차 제공 동의 */
  agree_to_collect_third_part_information: boolean;
  /** 광고성 목적의 개인정보 수집 및 이용 동의 */
  agree_to_collect_for_ads: boolean;
  /** 이메일 수신 동의 */
  agree_to_receive_email: boolean;
  /** SMS,MMS 수신 동의 */
  agree_to_receive_sms: boolean;
  /** 앱 푸시 수신 동의 */
  agree_to_receive_push: boolean;
};

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
