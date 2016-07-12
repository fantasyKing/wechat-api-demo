import utility from 'utility';
// sign
export default new class {
  checkSignature = async (params) => {
    const { echostr, nonce, signature, timestamp } = params;
    const arry = [];
    arry.push('123');
    arry.push(timestamp);
    arry.push(nonce);
    const tmpStr = arry.sort().join('');
    const sign = utility.sha1(tmpStr);
    if (sign === signature) {
      logger.info('checkSignature', echostr);
      return echostr;
    }
    return false;
  }
};
