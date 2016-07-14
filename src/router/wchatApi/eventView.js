export default new class {
  letGo = async (req, res, params) => {
    logger.info('view.url = ', params.EventKey);
    return res.end('success');
  };
};
