<template>
  <div class="article-page">
    <div class="article-close" @click="back">X</div>
    <div class="article">
      <div class="article-author">土卫十三</div>
      <div class="article-time">2020年4月21日</div>
      <div class="article-title">OPPO高层变阵，老将回归决战中国市场</div>
      <div class="article-content" v-html="content"></div>
    </div>
  </div>
</template>
<script>
export default {
  data(){
    return {
      content: `“搞到《原神》二测的资格了，要体验一下吗？”赶在4月13日《原神》二测结束之前，在朋友帮助下笔者有幸体验了这款自诞生以来就备受关注，并横跨三大平台的ARPG游戏。在交织着各种元素神灵信仰的提瓦特大陆“野外一日游”后，笔者对其背后的国产ACG游戏大厂米哈游的认知，也有了一些改观。《原神》的“原罪”3月19日，斗鱼主播zard拿到了《原神》的内测试码，想要直播这款游戏，于是他发了一条微博为这次直播预热，“醒了。搞了个原神的测试码，品一品国产塞尔达。”就是这条微博的内容，直接触及了《原神》开发商米哈游相对敏感的神经。zard后续发微博表示，米哈游直接联系到斗鱼方面让其删除该条微博，原因正是“国产塞尔达”这五个字。从米哈游的反应来看，对于这五个字是非常敏感的，而“国产塞尔达”恰恰是其过去一年争议不断的主要来源。从诞生那一刻起，《原神》就与任天堂的大作《塞尔达传说：旷野之息》紧紧绑定在了一起。尽管米哈游不愿意，但《原神》中的一系列类似的游戏设计和操作机制，都“责无旁贷”地直接让玩家赋予了“还原神作”的帽子。在《原神》宣布登录PS4之后，甚至有愤怒的玩家为了表达自己的不满，在去年8月的ChinaJoy 2019索尼展台前当众砸烂了自己的PS4。而后续《原神》宣布登陆Switch之后，也曾有任天堂玩家调侃“臣等正欲死战，陛下何故先降？”<br/><br/>
      “搞到《原神》二测的资格了，要体验一下吗？”赶在4月13日《原神》二测结束之前，在朋友帮助下笔者有幸体验了这款自诞生以来就备受关注，并横跨三大平台的ARPG游戏。在交织着各种元素神灵信仰的提瓦特大陆“野外一日游”后，笔者对其背后的国产ACG游戏大厂米哈游的认知，也有了一些改观。《原神》的“原罪”3月19日，斗鱼主播zard拿到了《原神》的内测试码，想要直播这款游戏，于是他发了一条微博为这次直播预热，“醒了。搞了个原神的测试码，品一品国产塞尔达。”就是这条微博的内容，直接触及了《原神》开发商米哈游相对敏感的神经。zard后续发微博表示，米哈游直接联系到斗鱼方面让其删除该条微博，原因正是“国产塞尔达”这五个字。从米哈游的反应来看，对于这五个字是非常敏感的，而“国产塞尔达”恰恰是其过去一年争议不断的主要来源。从诞生那一刻起，《原神》就与任天堂的大作《塞尔达传说：旷野之息》紧紧绑定在了一起。尽管米哈游不愿意，但《原神》中的一系列类似的游戏设计和操作机制，都“责无旁贷”地直接让玩家赋予了“还原神作”的帽子。在《原神》宣布登录PS4之后，甚至有愤怒的玩家为了表达自己的不满，在去年8月的ChinaJoy 2019索尼展台前当众砸烂了自己的PS4。而后续《原神》宣布登陆Switch之后，也曾有任天堂玩家调侃“臣等正欲死战，陛下何故先降？”
      `
    }
  },
  methods: {
    back (){
      history.go(-1)
    }
  }
}
</script>
<style lang="less">
@fontColor: #8795A1;
.article-page {
  position: relative;
  width: 100%;
  height: 100vh;
  padding: 1rem 1.4rem;
  box-sizing: border-box;
  font-size: 16px;
  color: #22292F;
  .article-close {}
  .article {
    margin: 0 auto;
    width: 8rem;
    padding-bottom: 1.6rem;
    .article-author, .article-time {
      color: @fontColor;
      margin-bottom: 5px;
    }
    .article-title {
      margin: 20px 0;
      font-size: 24px;
    }

    .article-content {
      line-height: 26px;
    }
  }
}
</style>