import cookies from 'js-cookie';

class Service {
  getToken(key: string) {
    const value = cookies.get(key);
    return value;
  }

  setToken(access: string, refresh: string) {
    cookies.set('accessToken', access, { expires: 1 });
    cookies.set('refreshToken', refresh, { expires: 7 });
  }
}

export default Service;
