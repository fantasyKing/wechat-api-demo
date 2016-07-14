export default new class {
  pic_photo = async (req, res, params) => {
    logger.info('收到图片信息', params.SendPicsInfo);
    return res.end('success');
  }
};
