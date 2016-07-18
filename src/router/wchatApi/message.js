import { message } from './../../controller';

export default new class {
  sendText = async (req, res, params) => {
    const result = await message.sendText(params);
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
    params.Content = params.Label;
    return await this.sendText(req, res, params);
  }

  text = async (req, res, params) => {
    logger.info('收到文字消息', params.Content);
    return await this.sendText(req, res, params);
  }

  voice = async (req, res, params) => {
    logger.info('收到语音消息', params.MediaId, params.Format);
    const result = await message.sendVoice(params);
    logger.info('wechatApi.voice.result', result);
    return res.end('success');
  }

  video = async (req, res, params) => {
    logger.info('收到视频消息', params.MediaId, params.ThumbMediaId);
    params.Content = '收到视频消息';
    const result = await message.sendText(params);
    logger.info('wechatApi.video.result', result);
    return res.end('success');
  }

  shortvideo = async (req, res, params) => {
    logger.info('收到小视频消息', params.MediaId, params.ThumbMediaId);
    params.Content = '收到小视频消息';
    const result = await message.sendText(params);
    logger.info('wechatApi.shortvideo.result', result);
    return res.end('success');
  }

  link = async (req, res, params) => {
    logger.info('收到链接消息', params.Title, params.Description, params.Url);
    return await this.sendText(req, res, params);
  }
};
