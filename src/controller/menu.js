import { Api } from './../common/wchat-api';

const wcApi = Api.getApi();

export default new class {

  async createMenu(menu) {
    return new Promise((resolve, reject) => {
      wcApi.createMenu(menu, (err, result) => {
        if (err) {
          reject(err);
        }
        resolve(result);
      });
    });
  }
};
