export default new class {
  errorLog = (e, req, res, next) => {
    logger.error(req.path, 'error = ', e, e.stack);
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
    logger.info('notFound', req.path, req.url);
    res.statusCode = 404;
    res.end();
  };
};
