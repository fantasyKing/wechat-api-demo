import { Api } from './../common/wchat-api';

export default new class {
  sendMsg = async (params) => new Promise((resolve, reject) => {
    const wcApi = Api.getApi();
    wcApi.sendText(params.openid, 'Hello world', (err, result) => {
      if (err) {
        reject(err);
      }
      resolve(result);
    });
  });
};
