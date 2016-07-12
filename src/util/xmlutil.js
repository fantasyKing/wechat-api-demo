import xml2js from 'xml2js';

export default new class {
  buildXml = (obj) => {
    const builder = new xml2js.Builder();
    return builder.buildObject({ xml: obj });
  }
  parseString = body => new Promise((resolve, reject) => {
    xml2js.parseString(body, {
      trim: true,
      explicitArray: false
    }, (err, json) => {
      if (err) {
        err.name = 'XMLParseError';
        reject(err);
      }
      const data = json ? json.xml : {};
      resolve(data);
    });
  });
};
