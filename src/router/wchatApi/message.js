import message from './../../controller/message';

export default new class {
  sendMsg = async (req, res, params) => {
    const result = await message.sendMsg(params);
    logger.info('wechatApi.sendMsg.result', result);
    return res.end('success');
  }
  image = async (req, res, params) => {
    logger.info('收到图片消息', params.MsgId, params.PicUrl);
    const result = await message.sendImage(params);
    logger.info('wechatApi.image.result', result);
    return res.end('success');
  }

  location = async (req, res, params) => {
    logger.info('收到位置消息', params.Label);
    return await this.sendMsg(req, res, params);
  }

  text = async (req, res, params) => {
    logger.info('收到文字消息', params.Content);
    return await this.sendMsg(req, res, params);
  }

  voice = async (req, res, params) => {
    logger.info('收到语音消息', params.MediaId, params.Format);
    return await this.sendMsg(req, res, params);
  }

  video = async (req, res, params) => {
    logger.info('收到视频消息', params.MediaId, params.ThumbMediaId);
    return await this.sendMsg(req, res, params);
  }

  shortvideo = async (req, res, params) => {
    logger.info('收到小视频消息', params.MediaId, params.ThumbMediaId);
    return await this.sendMsg(req, res, params);
  }

  link = async (req, res, params) => {
    logger.info('收到链接消息', params.Title, params.Description, params.Url);
    return await this.sendMsg(req, res, params);
  }
};
