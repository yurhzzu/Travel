<template>
  <div class="header">
    <div class="header-left">
      <div class="iconfont icon-back">&#xe624;</div>
    </div>
    <div class="header-input">
      <span class="iconfont">&#xe632;</span>
      输入城市/景点/游玩主题
    </div>
    <router-link to="/city">
      <div class="header-right">
        {{this.currentCity}}
        <span class="iconfont icon-arrow">&#xe6aa;</span>
      </div>
    </router-link>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'HomeHeader',
  computed: {
    ...mapState({
      currentCity: 'city'
    })
  }
}
</script>

<style lang="stylus" scoped>
  @import "~styles/varibles.styl"
  .header
    line-height $headerHeight
    background $bgColor
    display flex
    color #ffffff
    .header-left
      float left
      width .64rem
      .icon-back
        text-align center
        font-size .4rem
    .header-input
      flex 1
      background white
      border-radius .1rem
      margin-top .12rem
      line-height .62rem
      height .62rem
      margin-left .2rem
      color gray
      padding-left .2rem
    .header-right
      float right
      min-width  1.04rem
      padding 0 .2rem
      text-align center
      color: #fff
      .icon-arrow
        font-size .24rem
        margin-left -.04rem
</style>
