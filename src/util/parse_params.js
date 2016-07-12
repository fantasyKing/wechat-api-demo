async function parseParams(req) {
  const params = {};
  for (const key of Object.keys(req.params)) {
    params[key] = req.params[key];
  }
  for (const key of Object.keys(req.query)) {
    params[key] = req.query[key];
  }
  return params;
}

export { parseParams };
