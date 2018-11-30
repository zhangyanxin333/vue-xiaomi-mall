<template>
    <div>
        <div id="detailscrol" v-if="isget">
            <div>
                <div>
                    <BreadLine>{{ results['data']['short_name'] }}</BreadLine>
                    <!-- 轮播图和定位图 -->
                    <div class="banner-warp">
                        <img :src="results['data']['image_url_set']['single_many'][0]['800']">

                        <!--  " -->
                        <div class="slide_left_icon">
                            <!-- <img :src="$route.query.type != 'jumei_mall' ? results['data']['area_icon']['320'] : '' "> -->
                            <img  v-if="$route.query.type === 'jumei_pop'" :src="results['data']['image_url_set']['single_many']['0']['480']">
                            <img  v-else-if="$route.query.type === 'jumei_mall'" >
                            <img  v-else-if="$route.query.type === 'jumei_deal'" :src="results['data']['image_url_set']['single_many']['0']['480']">                            
                            <img  v-else :src="results['data']['area_icon']['320']">
                            <!-- <img v-if="" :src="results['data']['area_icon']['320']">  -->
                            <!-- <img v-else > -->
                        </div>
                        <div class="right_icon">
                            <!-- <img :src='s'> -->
                        </div>
                    </div>
                    <!-- 价格详情 -->
                    <div class="normalShow">
                        <div class="price_info">
                            <span class="cur_price">
                                ￥{{ message['data']['result']['jumei_price']}}
                            </span>
                            <del class="cost_price">￥{{ message['data']['result']['market_price']}}</del>
                            <span class="detail_text">{{ message['data']['result']['product_detail_price_text']['title']}}</span>
                            <strong>{{message['data']['result']['buyer_number']}}人已购买</strong>
                        </div>

                    </div>
                    <!-- 店铺详情 -->
                    <div class="desc_wrap">
                        <div class="normal_desc">
                            <span class="desc_iconv2 fs14">聚美自营</span>
                            {{ results['data']['name']}}
                        </div>
                    </div>
                    <!-- 分期运费说明 -->
                    <div class="additional-info">
                        <div class="postage-wrap post-box">
                            <div class="postage-type">分期</div>
                            <div class="postage-content">
                                该商品最多可享花呗12期分期购买福利
                            </div>
                        </div>
                        <div class="postage-link additional-list">
                            <div class="postage-wrap">
                                <div class="postage-type">运费</div>
                                <div class="postage-content">
                                    <span class="tip-word">{{ message['data']['result']['freight']['text']}}</span>
                                    <span class="arrow-icon-right"></span>
                                </div>
                            </div>
                        </div>
                        <div class="introductions-content introduction-fold">
                            <div class="introduction-type">说明</div>
                            <div class="introduction-item">
                                <p class="introduction-list-title">
                                    <span class="instruction-title-text">自营保税仓发货</span>
                                    <span class="instruction-title-text">24小时内发货</span>
                                </p>
                                <p class="introduction-list-title">
                                    <span class="instruction-title-text">7天拆封无条件退货</span>
                                    <span class="instruction-title-text">支持分期</span>
                                </p>
                            </div>
                        </div>
                    </div>
                    <!-- 图片 -->
                    <div>
                        <div class="bd-img" v-html="results.data.description_info.description"></div>
                        <div class="bd-img" v-html="results.data.description_info.description_images"></div>
                        <div class="bd-img"></div>
                        <div alt=""></div>
                    </div>
                </div>
            </div>
        </div>
        <div class="box">
            <div class="fl">
                <a class="fm" @click="$router.push({path:'/cart'})">

                    购物车
                    <span class="cart-num">{{ this.num }}</span>
                </a>
                <svg t="1541906603441" class="icon" style="" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3427" xmlns:xlink="http://www.w3.org/1999/xlink" width="18" height="20">
                    <path d="M901.661186 375.839901l0 448.717721c0 41.879829-41.712007 75.834152-83.921341 75.834152L198.764438 900.391774c-42.209334 0-76.42767-33.955346-76.42767-75.834152L122.336768 375.839901 901.661186 375.839901zM709.449489 315.891554 314.548464 315.891554c32.432667-61.748343 113.251344-197.377346 197.451024-197.377346C596.198146 118.514207 677.017846 254.143211 709.449489 315.891554zM62.389444 871.121124c0 49.262984 40.263006 89.220021 89.922009 89.220021l719.376071 0c49.65798 0 89.922009-39.957037 89.922009-89.220021L961.609533 315.891554 779.511171 315.891554c-37.613666-72.65167-143.181003-252.232698-267.511683-252.232698s-229.898017 179.581028-267.512706 252.232698L62.389444 315.891554 62.389444 871.121124zM721.817168 465.761909l0 59.948347 59.948347 0 0-59.948347L721.817168 465.761909zM242.233462 465.761909l0 59.948347 59.948347 0 0-59.948347L242.233462 465.761909z" p-id="3428"></path>
                </svg>
            </div>
            <div class="fr">
                <!-- <a class="add" @click="addToCart({results,message})">加入购物车</a> -->
                <a class="add" @click='popupToggle' v-if='message.data.result.size["0"].attribute !== "" '>加入购物车</a>
                <a class="add" v-else @click="addToCart({results,message})">加入购物车</a>                
                <mt-popup v-model="popupVisible" position='bottom' modal=false class='car_s' v-if='message.data.result.size["0"].attribute !== "" '>
                    <div class='sku_wrapper'>
                        <div class='title_content clear'>
                            <div class='product_imgs'>
                                <img :src="results['data']['image_url_set']['single_many']['0']['320']" alt="">
                            </div>
                            <div class='product_info'>
                                <h2 class="product_name">¥69.9</h2>
                                <div class="selected_product">
                                    <strong class="selected_val">请选择</strong>
                                    <strong class="selected_val">型号</strong>
                                    <strong class="selected_val">分类</strong>
                                <i class="sku_close">X</i>
                                    
                                </div>
                            </div>
                        </div>
                        <div class="select_option_wrap">
                            <div class="select_item clear">
                                <div class="item_content">
                                    <div class="property_title">
                                        <span>型号</span>
                                        <!---->
                                    </div>
                                    <div class="property_name">
                                        <strong class="prop_val" 
                                            :a="a" v-for="(a,index) of selected" :key="index"
                                            @click='select(a,index)'
                                            v-bind:class="a.isSelected ? 'active' : ''"
                                        >
                                            {{ a.attribute}}
                                        </strong>
                                        
                                    </div>
                                </div>
                                <div class="item_content">
                                    <div class="property_title">
                                        <span>分类</span>
                                    </div>
                                    <div class="property_name">
                                        <strong class="prop_val" 
                                            :b="b" v-for="(b,index) of size" :key="index"
                                        >
                                            {{ b }}
                                        </strong>
                                    </div>
                                </div>
                            </div>
                            <div class="buy_num clear">
                                <span class="title_name">购买数量</span>
                                <div class="item_content clear">
                                    <button class="shoping shop_reduce reduceDis" @click="reduceToCart({results,message})">-</button>
                                    <span class="inputs">{{ this.number }}</span>
                                    <button class="shoping shop_addition" @click="addToCart({results,message})">+</button>
                                </div>
                            </div>
                        </div>
                        <div class="submit_confirm_box">
                            <button type="0" class="confirm_btn multi_submit f" @click="addToCart({results,message})">加入购物车</button>
                            <button type="1" class="confirm_btn s">立即购买</button>
                        </div>
                    </div>
                </mt-popup>
                <a class="buy">立即购买</a>
            </div>
        </div>

    </div>

</template>

<script>
import BreadLine from "components/layout/BreadLine";
import Swiper from "components/common/index-list/swiper";
import http from "utils/http";
import BScroll from "better-scroll";
import { Popup } from "mint-ui";
import { callbackify } from 'util';

export default {
  data() {
    return {
      isget: false,
      results: {}, //详情页需要两条ajax请求
      message: {},
      num: 0,
      popupVisible: false,
      number:1,
      selected:[],
      size:[]
    };
  },
  methods: {
    popupToggle() {
      this.popupVisible = !this.popupVisible;
    },
    addToCart({results,message}){
          this.num++;
          this.number++;
          this.$store.dispatch('cart/addToCart',{results,message})
    },
    reduceToCart({results,message}){
        if(this.num > 0){
            this.num--;            
        }
        if(this.number > 0){
            this.number--;            
        }
        this.$store.dispatch('cart/reduceToCart',{results,message})
    },
    select(selected,index){
        let o = this.selected
        if(!selected.isSelected){
            for(var i=0;i<o.length;i++){
                o[i].isSelected = false
            }
            selected.isSelected = !selected.isSelected
        }else{
            for(var j=0;j<o.length;j++){
                o[j].isSelected = false
            }
        }
        this.selected = o
        this.$forceUpdate(); 
    },
  },
  components: {
    BreadLine,
    [Popup.name]: Popup
  },
  async mounted() {
    let item_id = this.$route.query.item_id;
    let type = this.$route.query.type;
    let result = await http({
      url: "/product/ajaxStaticDetail",
      method: "get",
      params: {
        item_id: item_id,
        type: type
      }
    });
    this.results = result;
    let message = await http({
      url: "/product/ajaxDynamicDetail",
      method: "get",
      params: {
        item_id: item_id,
        type: type
      }
    });
    this.message = message;
    this.isget = true;
    //这里是处理商品只能选中一个属性的逻辑
    let arr = message.data.result.size;
    for(var i = 0;i<arr.length;i++){
        arr[i].isSelected = false
    }
    this.selected = arr;
    for (var d = 0; d < arr.length; d++) {
     if(this.size.indexOf(arr[d].size)==-1){
      this.size.push(arr[d].size);
     }
  }
    console.log(this.size)
  },
  
  updated() {
    let bscroll = new BScroll("#detailscrol", {
      probeType: 1,
      click: true
    });
  }
};
</script>

<style lang="stylus" scoped>
@import '~styles/border.styl';
.car_s
    width 3.75rem
    height 4.34rem
    .sku_wrapper
        width 100%
        height 100%
        padding 0 .1rem
        .title_content
            width 3.51rem
            height 0.96rem
            border 0 0 1px 0,#cccccc
            padding 0 .15rem .2rem .1rem
            .product_imgs
                width 1rem
                height 1rem
                float left 
                img 
                    width 100%
                    height 100%
                    margin-top -.15rem
            .product_info
                float left 
                .product_name
                    font-size .24rem
                    font-weight 400
                    margin-top .1rem
                .selected_product
                    strong 
                        margin-left .08rem
                        margin-right .04rem
                        float left
                    .sku_close
                        position relative
                        top -.3rem
                        left .7rem
        .select_option_wrap
            width 3.51rem
            height 2.69rem
            padding 0 .15rem .08rem .1rem
            .select_item        
                width 100%
                height 1.98rem
                .item_content
                    padding-top .1rem
                    .property_title
                        width 100%
                        height .17rem
                        span    
                            color #333 
                            background none 
                            margin-left -2.8rem
                    .property_name
                        width 100%
                        height .88rem
                        .prop_val 
                            color #333
                            line-height 16px
                            height 24px
                            margin-right .1rem
                            margin-top .13rem
                            float left
                            font-weight 400
                            border 1px,solid #eeeeee
                            padding .02rem .08rem
                            &.active
                                background red
            .buy_num
                border 1px 0 1px 0,#cccccc
                height .6rem
                .title_name
                    margin-top .1rem
                    color #333 
                    background none 
                    margin-left -2.2rem
                    line-height .6rem                    
                .item_content
                    float right
                    margin-top .25rem
                    .inputs
                        background none
                        color #333
                    .shoping
                        width .21rem
                        height .21rem
                        background #ccc
        .submit_confirm_box
            width 3.75rem
            padding 0
            marign-left -0.1rem
            height .48rem
            position absolute 
            bottom 0
            .confirm_btn
                width 50%
                line-height .48rem
            .f
                background #ffcfdf
                border 0 0 0 0     
                color #333
                margin-left -.2rem        
            .s
                background #fe4070
                border 0 0 0 0
                color #fff
#detailscrol {
    height: 6.18rem;
    overflow: hidden;
}

.detail-title, >>> span {
    font-size: 0.14rem !important;
}

>>> .banner {
    height: 3.75rem;
}

img {
    width: 100%;
    height: 100%;
}

.banner-warp {
    position: relative;
}

.slide_left_icon, .right_icon {
    width: 0.6rem;
    position: absolute;
    top: 0;
    z-index: 99;
    img;
    width: 100%;
}

.slide_left_icon {
    left: 0;
}

.right_icon {
    right: 0;
}

.normalShow {
    padding: 0.15rem 0.12rem 0 0.12rem;
    background: #ffffff;
}

.cur_price {
    font-size: 0.28rem;
    color: #f33873;
    margin-right: 0.02rem;
    background: none;
    font-size: 0.28rem !important;
}

.cost_price {
    font-size: 0.13rem;
    color: #666;
    text-decoration: line-through;
}

.detail_text {
    font-size: 0.13rem;
    color: #666;
    margin-left: 0.1rem;
    background: none;
}

strong {
    float: right;
    font-weight: 400;
    color: #666;
    font-size: 0.13rem;
    line-height: 0.5rem;
}

.desc_wrap {
    padding: 0.12rem 0.15rem;
    background: #ffffff;
}

span {
    margin-right: 0.04rem;
    background: #fe4070;
    border-radius: 0.04rem;
    color: #fff;
    padding: 0.01rem 0.04rem;
}

.additional-info {
    margin-bottom: 0.08rem;
    background: #ffffff;
}

.postage-wrap {
    margin: 0 0.14rem;
    border-bottom: 1px solid #eee;
    overflow: hidden;
    height: 0.38rem;
    display: flex;
    justify-content: space-between;
    align-items: center;

    .postage-type {
        color: #999;
    }

    .postage-content {
        color: #fe4070;

        span {
            background: none;
            color: #333;
        }
    }
}

.introduction-fold {
    padding: 0 0.12rem;
    display: flex;
    justify-content: space-between;
}

.introduction-type {
    color: #999;
    font-size: 0.13rem;
    margin-top: 0.12rem;
    margin-left: 0.02rem;
}

.introduction-item {
    padding: 0 0.3rem 0.15rem 0;

    span {
        background: none;
        color: #333;
    }

    p {
        padding: 0.1rem 0.12rem 0 0;
    }

    span {
        margin-right: 0.1rem;
    }
}

.bd-img {
    width: 3.75rem;
}

>>> img {
    width: 100%;
}

.box {
    font-size: 0.12rem;
    height: 0.49rem;
    width: 100%;
    border: 1px 0 0 0, #eeeeee;
    bottom: -0.01rem;
    background: #ffffff;
    position: fixed;
    z-index: 999;

    .fl {
        width: 1.2rem;
        height: 100%;
        float: left;

        a {
            color: #979797;
            font-size: 0.14rem;
            position: relative;
            left: 0.4rem;
            top: 0.1rem;

            .cart-num {
                display: block;
                width: 0.16rem;
                height: 0.16rem;
                background: #fe4070;
                position: absolute;
                font-size: 0.12rem;
                padding: 0.02rem 0.04rem;
                left: 0.18rem;
                top: -0.25rem;
                border-radius: 50%;
                color: #fff;
                line-height: 0.16rem;
            }
        }

        svg {
            margin-top: 0.1rem;
            margin-bottom: 0.05rem;
        }
    }

    .fr {
        width: 2.55rem;
        height: 0.49rem;
        float: left;
        font-size: 0.14rem;
        text-align: center;

        .add {
            width: 50%;
            color: #fe4070;
            background: rgb(255, 207, 223);
            line-height: 0.49rem;
            display: block;
            float: left;
        }

        .buy {
            width: 50%;
            color: #ffffff;
            line-height: 0.49rem;
            background: #fe4070;
            display: block;
            float: left;
        }
    }
}
.isactive 
    background red
</style>

