<template>
    <div class='head'>
        <div class="item" v-for="item of items" :key="item.item_id">
            <span class="check-box-checked"></span>
            <div class="item-content">
                <div class="img-title">
                    <div class="img-wrap"> <img :src="item.img" alt=""> </div>
                    <div class="text-wrap">
                        <span class="title">
                            <span class="red">[极速免税]</span>{{ item.title }}</span>
                        <div class="sub-title-1">
                            <span class='first'>125ml</span>
                            <span class='second'>x{{item.quantity}}</span>
                        </div>
                        <div class="price-edit">
                            <span class="price"> ¥{{ item.price }} </span>
                            <span class="edit">编辑</span>
                        </div>
                    </div>
                    <div class="text-wrap" style="display: none;">
                        <span class="title">
                            <span class="red">[极速免税]</span>科颜氏(契尔氏)高保湿面霜125ml </span>
                        <div class="number-editor">
                            <span class="decrease"></span>
                            <span>{{ item.quantity }}</span>
                            <span class="increase"></span>
                        </div>
                        <div class="price-edit">
                            <span class="price editing"> ¥349 </span>
                            <div class="actions">
                                <span class="delete">删除</span>
                                <span class="gap-line"></span>
                                <span class="action-finish">完成</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import { mapState } from "vuex";
export default {
  computed: {
    ...mapState("cart", {
      items: "products"
    })
  }
};
</script>

<style lang="stylus" scoped>
.head
    width 3.75rem
    height 1.04rem
    .item
        height 100%
        display flex
        padding 0 .1rem
        overflow hidden
        .item-content
            flex 1
            width 100%
            .img-title
                display flex
                padding-bottom .15rem
                margin-left .05rem
                height 100%
                .img-wrap
                    width .84rem
                    height .84rem
                    position relative
                    margin-top .1rem
                    img 
                        width 100%
                        height 100%
                .text-wrap
                    display flex
                    flex-direction column
                    margin-left .15rem
                    margin-top .15rem
                    .title 
                        width 2.33rem
                        max-height .2rem
                        text-overflow ellipsis
                        overflow hidden
                        color #333
                        line-height .2rem
                        text-align left
                        word-break break-all
                        .red
                            color #fe4070
                    .sub-title-1
                        display flex
                        justify-content space-between
                    .price-edit
                        display flex
                        justify-content space-between
                        .price 
                            color #fe4070
                            font-size .18rem
</style>