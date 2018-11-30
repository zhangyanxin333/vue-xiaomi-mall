<template>
    <div id="content-scroll">
        <ul class='content'>
            <li :item="item" v-for="item of items" :key="item.item_id">
                <a class="goods" href="##">
                    <div class="goods-topsmall"><img :src='item.image'></div>
                    <div class="goods-middle">
                        <span class="goods-num">{{item.group_name_tag}}</span>
                        <span class="goods-share">{{item.short_name}}</span>
                    </div>
                    <div class="goods-foot">
                        <div class="price-left">
                            <span class="ct-price">{{item.jumei_price}}</span>
                            <span class="sc-price">{{item.single_price}}</span>
                            <span class="jm-price">{{item.market_price}}</span>
                        </div>
                        <div class="time-right timer" data-time="216802">
                            <span class="sy-time" style="display:none;"></span>
                            <span class="goods-btn">去开团</span>
                        </div>
                    </div>
                </a>
            </li>
        </ul>
    </div>
</template>

<script>
import http from 'utils/http';
import {scroll} from 'utils/scroll'
export default {
    props:{
        results:Object
    },
    data(){
        return {
            items:[]
        }
    },
    watch: {
        results() {
        this.items = (this.results && this.results.data) || [];
        scroll({
                el:'#content-scroll',
                data:this.items,
                url:'/yiqituan/tab_list',
                vm:this,
        })
        }
  },
  mounted(){
      console.log(1)
  }
}
</script>

<style lang="stylus" scoped>
#content-scroll 
    height 5.73rem
    width 100%
    .content
        width 100%
        display block
        background #f5f5f5
        height auto 
        li 
            margin-bottom .08rem
            background #ffffff
            a
                width: 100%
                display block
                overflow hidden
                position relative
                .goods-topsmall 
                    overflow hidden
                    text-align center
                    img 
                        width 1.5rem
                        height 1.5rem
                .goods-middle 
                    font-size .14rem
                    max-height .34rem
                    line-height .18rem
                    padding 0 .12rem
                    margin-top .1rem
                    .goods-num
                        color #fe4070
                    .goods-share
                        color #424242
                        font-size .13rem
                .goods-foot 
                    padding .12rem
                    .price-left 
                        float left
                        font-family Arial
                        .ct-price 
                            font-size 18px
                            color #fe4070
                        .sc-price 
                            font-size 12px
                            padding-left 4px
                            text-decoration line-through
                            color #999
                        .jm-price 
                            font-size 11px
                            color #999
                            display block
                    .time-right 
                        border-radius: 25px
                        float right
                        border .0625rem solid #fe4070
                        margin-top .25rem
                        background #fe4070
                        .sy-time
                            padding 0 0.06rem
                            min-width .9rem
                            float left 
                            font-size .13rem
                        .goods-btn
                            width .6rem
                            height .1rem
                            display block
                            line-height .1rem
                            text-align center
                            color #ffffff
                            border-radius .25rem
</style>
