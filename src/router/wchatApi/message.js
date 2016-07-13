import message from './../../controller/message';

export default new class {
  sendMsg = async (req, res, params) => {
    const result = await message.sendMsg(params);
    logger.info('wechatApi.sendMsg.result', result);
    return res.end('success');
  }
};
