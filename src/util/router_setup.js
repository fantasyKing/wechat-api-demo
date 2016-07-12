/**
 * Created on 5/6/16.
 */

import validator from './validator';

function parseParams(req, method) {
  const params = {};
  for (const key of Object.keys(req.params)) {
    params[key] = req.params[key];
  }

  if (method === 'GET') {
    for (const key of Object.keys(req.query)) {
      params[key] = req.query[key];
    }
  } else if (method === 'POST' || method === 'PUT') {
    for (const key of Object.keys(req.body)) {
      params[key] = req.body[key];
    }
  }

  if (req.xfiles) {
    for (const [key, value] of req.xfiles.entries()) {
      params[key] = value;
    }
  }
  return params;
}

function handler(route) {
  return (req, res, next) => {
    const params = parseParams(req, route[0]);
    const error = validator.checkParamType(params, route[4], route[5], route[6]);

    const x_app_id = req.headers['x-app-id'];
    if (params.app_id) {
      if (x_app_id) {
        params.x_app_id = x_app_id;
      }
      // x_app_id && (params.x_app_id = x_app_id);
    } else {
      if (x_app_id) {
        params.app_id = x_app_id;
      }
      // x_app_id && (params.app_id = x_app_id);
    }

    if (error.length) {
      return res.send({ code: 0, message: error.join(',') });
    }
    return route[3](req, res, params);
  };
}

/**
routes = {
  passport: [
    [method, route, [middlewares], handler, [params], [params_options], [params_types]]
  ]
}
 */
function Router(router, routes) {
  for (const key of Object.keys(routes)) {
    const elements = routes[key];
    for (const element of elements) {
      const method = element[0].toLowerCase();
      router[method](`/${key}${element[1]}`, element[2], handler(element));
    }
  }
}

function morganParams(req, method) {
  const params = {};
  Object.keys(req.params).forEach(v => {
    params[v] = req.params[v];
  });

  if (method === 'GET') {
    Object.keys(req.query).forEach(v => {
      params[v] = req.query[v];
    });
  } else if (method === 'POST' || method === 'PUT') {
    Object.keys(req.body).forEach(v => {
      params[v] = req.body[v];
    });
  }
  params['x-app-id'] = req.headers['x-app-id'];
  params['x-access-token'] = req.headers['x-access-token'];
  return params;
}

export { Router as default, morganParams };
