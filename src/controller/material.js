import { Api } from './../common/wchat-api';

const wcApi = Api.getApi();

export default new class {
  uploadMaterial = async (params) => new Promise((resolve, reject) => {
    params.filepath = `${__dirname.substring(0, __dirname.indexOf('/src'))}/test/file/haitan.jpg`;
    wcApi.uploadMaterial(params.filepath, params.type, (err, result) => {
      if (err) {
        reject(err);
      }
      resolve(result);
    });
  })

  uploadNewsMaterial = async (params) => new Promise((resolve, reject) => {
    params.news = {
      articles: [{
        title: 'test',
        thumb_media_id: 'T8GD0S-0UmutnjdW_gTJHv5vYBcA27-y0b7Q1DRIEPY',
        author: 'Jim',
        digest: '',
        show_cover_pic: 1,
        content: '<p><span style=\"font-size: 12pt;\">任何一条信息都是有价格的。价格高低自然是可以量化衡量。</span><span style=\"font-size: 12pt;\"><br></span><span style=\"font-size: 12pt;\"><br></span><span style=\"font-size: 12pt;\">浏览信息占用你多少时间？你的单位时间收入是多少？算一下，这就是你浏览的信息价格。</span><span style=\"font-size: 12pt;\"><br></span><span style=\"font-size: 12pt;\">浏览信息占用带宽和大脑的记忆空间吗？如果这些带宽、记忆空间用来创作，做有价值的输出，又会有多少收益？这也是信息的价格。</span></p><p><span style=\"font-size: 12pt;\"><br></span><span style=\"font-size: 12pt;\">进一步想，一条信息，如果能够影响我们当下的心情变化、给我们的未来生活带来积极的影响，从而提高了我们生活质量，那这个高质量的生活不同样是信息的价格吗？</span><span style=\"font-size: 12pt;\"><br></span><span style=\"font-size: 12pt;\">例如：我们浏览到新生大学的文章，学习了知识，掌握了技能，丰富了经验，改善了我们的生活。这个价格又改怎么衡量呢？</span><span style=\"font-size: 12pt;\"><br></span><span style=\"font-size: 12pt;\"><br></span><span style=\"font-size: 12pt;\">反之，如果浏览信息对自己产生负面影响，让我们心生抱怨、变得消极，为这些负面影响所干扰，这是不是信息的价格呢？</span><span style=\"font-size: 12pt;\"><br></span><span style=\"font-size: 12pt;\"><br></span><span style=\"font-size: 12pt;\">想一想，最近在关注哪些信息，今天都接触到了哪些信息，对自己最近一段时间影响较大的信息有哪些，你能够从这些方面衡量出信息背后的价格吗？你是否能从中体会到信息带给自己的切身改变？</span><span style=\"font-size: 12pt;\"><br></span><br></p>',
        content_source_url: 'www.qq.com'
      }]
    };
    wcApi.uploadNewsMaterial(params.news, (err, result) => {
      if (err) {
        reject(err);
      }
      resolve(result);
    });
  })
};
