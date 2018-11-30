<template>
  <div class="swiper-container">
    <div class="swiper-wrapper">
      <div class="swiper-slide"><img src="http://mp5.jmstatic.com/mobile/card_material/item_29_2048_838-ipad2048_1541069561.jpeg?imageView2/2/w/640/q/90" alt=""></div>
      <div class="swiper-slide"><img src="http://mp5.jmstatic.com/mobile/card_material/item_29_2048_838-ipad2048_1541069561.jpeg?imageView2/2/w/640/q/90" alt=""></div>
      <div class="swiper-slide"><img src="http://mp5.jmstatic.com/mobile/card_material/item_29_2048_838-ipad2048_1541069561.jpeg?imageView2/2/w/640/q/90" alt=""></div>
    </div>
    <!-- 如果需要分页器 -->
    <div class="swiper-pagination"></div>
  </div>
</template>
 
<script>
import Swiper from 'swiper';
import 'swiper/dist/css/swiper.min.css';
export default {
    mounted(){
        var mySwiper = new Swiper('.swiper-container', {
            speed:3000,
            autoplay:1,
            direction:'horizontal'
        })
    }
}
</script> 
<style lang="stylus" scoped>
    .swiper-container 
        width 100%
        height 1.53rem
</style>




