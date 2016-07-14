export default new class {
  location_select = async (req, res, params) => {
    logger.info('收到用户位置', params.SendLocationInfo);
    return res.end('success');
  }
};
