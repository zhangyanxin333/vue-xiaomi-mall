<template>
    <div id="total-scroll">

        <div>
            <BreadLine v-if="$route.path === '/home/mianshui'">极速免税店</BreadLine>
            <BreadLine v-if="$route.path === '/home/motherbaby'">母婴</BreadLine>
            <BreadLine v-if="$route.path === '/home/qingshe'">轻奢</BreadLine>
            <BreadLine v-if="$route.path === '/home/pinpai'">品牌</BreadLine>
            <Header></Header>
            <Nav></Nav>
            <!-- <Swiper></Swiper> -->
            <keep-alive>
                <router-view></router-view>
            </keep-alive>
        </div>

    </div>
</template>

<script>
import BreadLine from "components/layout/BreadLine";

import Header from "components/layout/Header";
import Nav from "components/layout/Nav";
import Swiper from "components/common/index-list/swiper";

export default {
  components: {
    Header,
    Nav,
    Swiper,
    BreadLine
  },
  mounted() {
    document.cookie = "referer_site=wap_touch_";
    document.cookie = "referer_site_cps=wap_touch_";
    document.cookie = "guide_download_show=1";
    document.cookie = "has_download=1";
    document.cookie =
      "sensorsdata2015jssdkcross=%7B%22distinct_id%22%3A%22166e158139f296-015bb98da1bf16-2d604637-250125-166e15813a082f%22%7D";
    document.cookie = "sensorsdata_is_new_user=true";
    document.cookie =
      "Hm_lvt_884477732c15fb2f2416fb892282394b=1541320640,1541321712,1541378939";
    document.cookie = "Hm_lpvt_884477732c15fb2f2416fb892282394b=1541378939";
    document.cookie = "device_platform=other";
    document.cookie = "sid=952f74b2660e53924d526b04942b50f2";
    document.cookie = "jmdl14=2";
    document.cookie = "jml14=2";
    document.cookie = "route=6cf9ffe4014f0bf241681c1db92a3674";
  }
};
</script>
<style lang="stylus" scoped>
#total-scroll {
    width: 100%;
    height: 6.15rem;
}
</style>
