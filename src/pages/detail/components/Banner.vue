<template>
  <div>
    <div class="banner">
      <img @click="handleBannerClick" class="banner-img" src="http://img1.qunarzz.com/sight/source/1510/6e/1ea71e2f04e.jpg_r_640x214_aa6f091d.jpg" alt="">
      <div class="banner-info">
        <div class="banner-title">大连圣亚海洋世界（AAA景区）</div>
        <div class="banner-number"><span class="iconfont">&#xe632;</span>39</div>
      </div>
      <common-gallary :imgs="imgs" v-show="showGallary" @close="handleClose"></common-gallary>
    </div>
  </div>
</template>

<script>
import CommonGallary from '@/common/gallary/Gallary'
export default {
  name: 'Banner',
  components: {
    CommonGallary: CommonGallary
  },
  methods: {
    handleBannerClick () {
      console.log('handleBannerClick')
      this.showGallary = true
    },
    handleClose () {
      console.log('handleClose')
      this.showGallary = false
    }
  },
  data () {
    return {
      showGallary: false,
      imgs: ['http://img1.qunarzz.com/sight/source/1510/6e/1ea71e2f04e.jpg_r_640x214_aa6f091d.jpg', 'http://img1.qunarzz.com/sight/source/1510/6e/1ea71e2f04e.jpg_r_640x214_aa6f091d.jpg']
    }
  }
}
</script>

<style scoped>
  .banner {
    position: relative;
    height: 0;
    padding-bottom: 55%;
    overflow: hidden;
  }
  .banner-img {
    width: 100%;
  }
  .banner-info {
    display: flex;
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    line-height: .6rem;
    color: white;
    background-image: linear-gradient(top, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.8));
  }
  .banner-title {
    flex: 1;
  }
  .banner-number {
    padding: 0 .4rem;
    height: .4rem;
    line-height: .4rem;
    border-radius: .2rem;
    background: rgba(0, 0, 0, .8);
  }
</style>
