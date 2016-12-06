import { Api } from './../common/wchat-api';

const wcApi = Api.getApi();

export default new class {
  sendText = async (params) => new Promise((resolve, reject) => {
    wcApi.sendText(params.openid, params.Content || 'Hello world', (err, result) => {
      if (err) {
        reject(err);
      }
      resolve(result);
    });
  });

  sendImage = async (params) => new Promise((resolve, reject) => {
    wcApi.sendImage(params.openid, params.MediaId, (err, result) => {
      if (err) {
        reject(err);
      }
      resolve(result);
    });
  })

  sendVoice = async (params) => new Promise((resolve, reject) => {
    wcApi.sendVoice(params.openid, params.MediaId, (err, result) => {
      if (err) {
        reject(err);
      }
      resolve(result);
    });
  })

  sendVideo = async (params) => new Promise((resolve, reject) => {
    wcApi.sendVideo(params.openid, params.MediaId, params.ThumbMediaId, (err, result) => {
      if (err) {
        reject(err);
      }
      resolve(result);
    });
  })

  sendMusic = async (params) => new Promise((resolve, reject) => {
    wcApi.sendMusic(params.openid, params.music, (err, result) => {
      if (err) {
        reject(err);
      }
      resolve(result);
    });
  })

  sendNews = async (params) => new Promise((resolve, reject) => {
    wcApi.sendNews(params.openid, params.articles, (err, result) => {
      if (err) {
        reject(err);
      }
      resolve(result);
    });
  })

  sendMpNews = async (params) => new Promise((resolve, reject) => {
    wcApi.sendMpNews(params.openid, params.MediaId, (err, result) => {
      if (err) {
        reject(err);
      }
      resolve(result);
    });
  })

  massSend = async (params) => new Promise((resolve, reject) => {
    wcApi.massSend(params.options, params.receivers, (err, result) => {
      if (err) {
        return reject(err);
      }
      return resolve(result);
    });
  })
};
