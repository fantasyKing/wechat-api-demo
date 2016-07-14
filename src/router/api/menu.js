import { menu } from './../../controller';
import Base from './base';

export default new class extends Base {

  createMenu = async (req, res, params) => {
    // const me = {
    //   button: [
    //     {
    //       type: 'click',
    //       name: '测试',
    //       key: 'test'
    //     },
    //     {
    //       name: '菜单',
    //       sub_button: [
    //         {
    //           type: 'view',
    //           name: '搜索',
    //           url: 'http://www.baidu.com'
    //         },
    //         {
    //           type: 'view',
    //           name: '视频',
    //           url: 'http://v.qq.com/'
    //         }
    //       ]
    //     }
    //   ]
    // };
    const me = {
      button: [
        {
          name: '扫码',
          sub_button: [
            {
              type: 'scancode_waitmsg',
              name: '扫码带提示',
              key: 'scancode_wait'
            },
            {
              type: 'scancode_push',
              name: '扫码推事件',
              key: 'scancode_push'
            }
          ]
        },
        {
          name: '发图',
          sub_button: [
            {
              type: 'pic_sysphoto',
              name: '系统拍照发图',
              key: 'pic_sysphoto'
            },
            {
              type: 'pic_photo_or_album',
              name: '拍照或者相册发图',
              key: 'pic_photo_or_album'
            },
            {
              type: 'pic_weixin',
              name: '微信相册发图',
              key: 'pic_weixin'
            }
          ]
        },
        {
          name: '发送位置',
          type: 'location_select',
          key: 'location_select'
        }
      ]
    };
    try {
      const result = await menu.createMenu(me);
      return this.ok(res, result);
    } catch (err) {
      return this.fail(res)(err);
    }
  }
};
