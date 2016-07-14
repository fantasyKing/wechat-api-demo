import message from './message';
import eventView from './eventView';
import subscribe from './subscribe';
import scancode from './scancode';
import photo from './photo';
import location from './location';

const wchatApi = Object.assign({}, message, eventView);
/**
 * {
 *  'msgtype': [
 *  []
 * ]
 * }
 */
export default {
  event: {
    click: {
      test: wchatApi.sendMsg
    },
    view: wchatApi.letGo,
    subscribe: subscribe.subscribe,
    unsubscribe: subscribe.unsubscribe,
    scancode_waitmsg: {
      scancode_wait: scancode.scancode_waitmsg
    },
    scancode_push: {
      scancode_push: scancode.scancode_push
    },
    pic_sysphoto: {
      pic_sysphoto: photo.pic_photo
    },
    pic_photo_or_album: {
      pic_photo_or_album: photo.pic_photo
    },
    pic_weixin: {
      pic_weixin: photo.pic_photo
    },
    location_select: {
      location_select: location.location_select
    }
  },
  location: message.location,
  image: message.image
};
