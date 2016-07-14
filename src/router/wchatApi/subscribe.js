export default new class {
  subscribe = async (req, res, params) => {
    logger.info('subscribe ===>', params);
    return res.end('success');
  }

  unsubscribe = async (req, res, params) => {
    logger.info('unsubscribe ===>', params);
    return res.end('success');
  }
};
