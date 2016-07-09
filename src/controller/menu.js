import { Api } from './../common/wchat-api';

export default new class {

  async createMenu(menu) {
    return new Promise((resolve, reject) => {
      const wcApi = Api.getApi();
      wcApi.createMenu(menu, (err, result) => {
        if (err) {
          reject(err);
        }
        resolve(result);
      });
    });
  }
};
