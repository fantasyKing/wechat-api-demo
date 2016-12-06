import { message } from './../../controller';

export default new class {
  subscribe = async (req, res, params) => {
    logger.info('subscribe ===>', params);
    // params.MediaId = 'T8GD0S-0UmutnjdW_gTJHnmupkGaTljPq3T_9wtRGhM';
    params.MediaId = 'T8GD0S-0UmutnjdW_gTJHtxOionTd4sUAA-DfFS5b_c';
    const result = await message.sendMpNews(params);
    logger.info('subscribe.sendMpNews', result);
    return res.end('success');
  }

  unsubscribe = async (req, res, params) => {
    logger.info('unsubscribe ===>', params);
    return res.end('success');
  }
};
