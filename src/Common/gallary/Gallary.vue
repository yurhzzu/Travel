<template>
  <div class="container" @click="handleGallaryClick">
    <div class="wrapper">
      <swiper :options="swiperOption">
        <swiper-slide  v-for="(item, index) in imgs" :key="index">
          <img class="gallary-img" :src="item" >
        </swiper-slide>
        <div class="swiper-pagination"  slot="pagination"></div>
      </swiper>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CommonGallary',
  methods: {
    handleGallaryClick () {
      console.log('handleGallaryClick')
      this.$emit('close')
    }
  },
  props: {
    imgs: {
      type: Array,
      default () {
      }
    }
  },
  data () {
    return {
      swiperOption: {
        pagination: {
          el: '.swiper-pagination',
          type: 'fraction'
        },
        observeParents: true,
        observer: true
      }
    }
  }
}
</script>

<style scoped>
  .container >>> .swiper-container {
    overflow: inherit;
  }
  .container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    background: black;
    position: fixed;
    left: 0px;
    right: 0px;
    bottom: 0px;
    top: 0px;
  }
  .wrapper {
    background:white;
    width: 100%;
    height: 0%;
    padding-bottom: 100%;
  }
  .gallary-img {
    width: 100%;
  }
  .swiper-pagination {
    color: red;
    bottom: -10px;
  }
</style>
