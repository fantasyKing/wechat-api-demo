# wechat-api-demo

### api的定义

* 主动调用的api全都写在./router/api/文件夹下。
* 被微信服务器被动调用的api，定义在./router/wchatApi下

>接收微信请求的接口，都必须经过auth.checkSignature中间件。

### 素材的使用

* 所有的素材，使用前都必须上传到微信服务器