export default new class {
  scancode_waitmsg = async (req, res, params) => {
    logger.info('scancode_waitmsg收到二维码信息', params.ScanCodeInfo);
    return res.end('success');
  }

  scancode_push = async (req, res, params) => {
    logger.info('scancode_push收到二维码信息', params.ScanCodeInfo);
    return res.end('success');
  }
};
