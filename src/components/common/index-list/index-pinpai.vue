<template>
    <div id="total-wrap">
        <div>
            <h2 class="items-title">
                <span class="head_bg">
                    <img src="http://f0.jmstatic.com/btstatic/h5/common/icon_title.png">
                </span>
                <span class="head_title">疯抢专场 早10点上新</span>
            </h2>
            <ul class="tuan-list">
                <IndexItem :item="item" v-for="item of motherItems" :key='item.id'></IndexItem>
            </ul>
        </div>
    </div>
</template>
<script>
import IndexItem from "components/common/index-list/index-item";
import BScroll from "better-scroll";
import { scroll } from "utils/scroll";
export default {
  data() {
    return {
      motherItems: []
    };
  },
  props: {
    motherProduct: Object
  },
  components: {
    IndexItem
  },
  watch: {
    motherProduct() {
      this.motherItems =
        (this.motherProduct && this.motherProduct.item_list) || [];
      scroll({
        el: "#total-wrap",
        data: this.motherItems,
        url: "/pop/ajaxGetList",
        vm: this
      });
    }
  }
};
</script>

<style lang="stylus" scoped>
#total-wrap {
    width: 100%;
    height: 5.12rem;

    div {
        width: 100%;

        .items-title {
            text-align: center;
            font-weight: 400;
            height: 0.4rem;

            span {
                font-size: 14px;
                color: #333;
                font-weight: 400;
                display: inline-block;
                margin-top: 0.1rem;
                margin-left: -0.3rem;
            }

            .head_bg {
                width: 0.15rem;
                height: 0.15rem;
                margin-right: 0.375rem;
                position: relative;

                img {
                    width: 100%;
                    height: 100%;
                }
            }
        }

        .tuan-list {
            width: 100%;
            height: auto;
            display: block;
        }
    }
}
</style>
