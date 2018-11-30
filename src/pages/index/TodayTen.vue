<template>
    <div id="scroll-wraps">
      <div>
        <index-item :item="item" v-for="item of product" :key='item.id'></index-item>        
      </div>
    </div>    
</template>

<script>
import IndexItem from "components/common/index-list/index-item";
import BScroll from "better-scroll";
import { scroll } from 'utils/scroll'
export default {
  data() {
    return {
      product: [],
    };
  },
  props: {
    results: Object,
  },
  components: {
    IndexItem
  },
  mounted(){
  },
  watch: {
    results() {
      this.product = (this.results && this.results.item_list) || [];
      scroll({
            el:'#total-scroll',
            data:this.product,
            url:'/index/ajaxDealactList',
            vm:this
      })
    }
  }
};

</script>
<style lang="stylus" scoped>
/*   #scroll-wraps
    width 100%
    height 3.28rem */
</style>


