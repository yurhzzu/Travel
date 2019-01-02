<template>
  <div class="banner">
    <img class="banner-img" src="http://img1.qunarzz.com/sight/source/1510/6e/1ea71e2f04e.jpg_r_640x214_aa6f091d.jpg" alt="">
    <div class="banner-info">
      <div class="banner-title">大连圣亚海洋世界（AAA景区）</div>
      <div class="banner-number"><span class="iconfont">&#xe632;</span>39</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Banner'
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
