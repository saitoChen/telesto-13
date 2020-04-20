<template>
  <div class="articles">
    <ArticlesList :mode="'list'" :list='articlesList' />
  </div>
</template>
<script>
import ArticlesList from '../components/Articles/articlesList'
export default {
  components: {
    ArticlesList
  },
  data(){
    return {
      articlesList: [
        {
          id:0,
          name: 'OPPO高层变阵，老将回归决战中国市场',
          description: '这是OPPO今年以来的第二次高层人事调整，此前4月8日，OPPO在官方网站上对外宣布任命副总裁刘波为中国区总裁，至此OPPO完成中国区及整体市场营销的高层变阵。'
        },
        {
          id:1,
          name: 'DNA存储，拯救人类数据危机的良方？',
          description: 'DNA存储具体是怎么做到？'
        },
        {
          id:2,
          name: '蒋凡渡劫：80后创业者如何走入阿里权力中心？',
          description: '通过并购招纳、负责过阿里妈妈、没有经过内部培训，上一位是俞永福。'
        },
        {
          id:0,
          name: 'OPPO高层变阵，老将回归决战中国市场',
          description: '这是OPPO今年以来的第二次高层人事调整，此前4月8日，OPPO在官方网站上对外宣布任命副总裁刘波为中国区总裁，至此OPPO完成中国区及整体市场营销的高层变阵。'
        },
        {
          id:0,
          name: 'OPPO高层变阵，老将回归决战中国市场',
          description: '这是OPPO今年以来的第二次高层人事调整，此前4月8日，OPPO在官方网站上对外宣布任命副总裁刘波为中国区总裁，至此OPPO完成中国区及整体市场营销的高层变阵。'
        }
      ]
    }
  }
}
</script>
<style lang="less">

</style>