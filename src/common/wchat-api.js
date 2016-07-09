import WechatAPI from 'wechat-api';
import config from './../config/config';

class WechatApi {
  constructor(appid, appsecret, getToken, saveToken) {
    this.api = new WechatAPI(appid, appsecret, getToken, saveToken);
  }

  async getApi() {
    return this.api;
  }
}

export const Api = new WechatApi(config.appid, config.appsecret);
