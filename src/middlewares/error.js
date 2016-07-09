export default new class {
  errorLog = (e, req, res, next) => {
    console.error(req.path, 'error = ', e, e.stack);
    next(e);
  };

  clientErrorHandler = (e, req, res, next) => {
    if (req.xhr) {
      return res.send({ code: 0, message: '请求异常' });
    }
    return next(e);
  };

  errorHandler = (e, req, res, next) => {
    logger.error(e, e.stack);
    res.statusCode = 500;
    res.send({ code: 500 });
  };

  notFoundHandler = (req, res) => {
    console.log('req---->>>', req);
    res.statusCode = 404;
    res.end();
  };
};
