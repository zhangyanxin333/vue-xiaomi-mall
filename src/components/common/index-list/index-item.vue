<template>
  <div class="item" v-if="$router.path === '/home/shouye/today'">
    <div class="type-label" v-if="item.type === 'jmstore'" @click="$router.push({ name: 'detail', query: { item_id: item.item_id ,type:item.type}})">
      <img :src="item['image_url_set']['main']['800']">
    </div>
    <div class="type-item" v-else-if="item.type === 'jumei_deal'" @click="$router.push({ name: 'detail', query: { item_id: item.item_id ,type:item.type}})">
      <img v-if="item.image_url_set.single" :src="item['image_url_set']['single']['url']['800']">
      <img v-else :src="item['image_url_set']['dx_image']['url']['800']">
      <div class="item-detail">
        <div class="item-title">{{ item.name_tag.pre_or_presale }}{{item.name}}</div>
        <div class="price-warp">
          <div class="price-list">
            <span class="now-price">￥<span>{{ item.jumei_price}}</span></span>
            <span class="del-price">{{ item.market_price }}</span>
          </div>
          <div class="buy-num">{{ item.product_desc }}</div>
        </div>
      </div>
    </div>
    <div class="type-item" v-else @click="$router.push({ name: 'detail', query: { item_id: item.item_id ,type:item.type}})">
      <img :src="item['image_url_set']['dx_image']['url']['800']">
      <div class="item-detail">
        <div class="item-title">{{ item.name_tag.pre_or_presale }}{{item.name}}</div>
        <div class="price-warp">
          <div class="price-list">
            <span class="now-price">￥<span>{{ item.jumei_price}}</span></span>
            <span class="del-price">{{ item.market_price }}</span>
          </div>
          <div class="buy-num">{{ item.product_desc }}</div>
        </div>
      </div>
    </div>
  </div>

  <div class="item" v-else>
    <div class="type-labels" v-if="item.type === 'jmstore'" @click="$router.push({ name: 'detail', query: { item_id: item.item_id ,type:item.type}})">
      <img :src="item['image_url_set']['main']['800']">
    </div>
    <div class="type-item" v-else-if="item.type === 'jumei_deal'" @click="$router.push({ name: 'detail', query: { item_id: item.item_id ,type:item.type}})">
      <img v-if="item.image_url_set.single" :src="item['image_url_set']['single']['url']['800']">
      <img v-else :src="item['image_url_set']['dx_image']['url']['800']">
      <div class="item-detail">
        <div class="item-title">{{ item.name_tag.pre_or_presale }}{{item.name}}</div>
        <div class="price-warp">
          <div class="price-list">
            <span class="now-price">￥<span>{{ item.jumei_price}}</span></span>
            <span class="del-price">{{ item.market_price }}</span>
          </div>
          <div class="buy-num">{{ item.product_desc }}</div>
        </div>
      </div>
    </div>
    <div class="type-item" v-else @click="$router.push({ name: 'detail', query: { item_id: item.item_id ,type:item.type}})">
      <img :src="item['image_url_set']['dx_image']['url']['800']">
      <div class="item-detail">
        <div class="item-title">{{ item.name_tag.pre_or_presale }}{{item.name}}</div>
        <div class="price-warp">
          <div class="price-list">
            <span class="now-price">￥<span>{{ item.jumei_price}}</span></span>
            <span class="del-price">{{ item.market_price }}</span>
          </div>
          <div class="buy-num">{{ item.product_desc }}</div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
    props:{
        item:Object
    }
}
</script>

<style lang="stylus" scoped>
.type-label
  margin-bottom .08rem
  width 100%
  height 1.3rem
  img 
    height 100%
.type-item
  width 100%
  height 1.3rem
  position relative
  margin-bottom .08rem
  img 
    height 100%
  .item-detail
    width 2.03rem
    height 1.3rem
    position absolute
    top 0rem
    right .1rem
    .item-title
      margin-top .1rem
      margin-bottom .05rem
      color #333
      ellipsis(2)
    .price-warp
      position absolute
      bottom .1rem
      .price-list
        .now-price
          color #fe4070
          span 
            font-size .2rem;
            margin: 0 .02rem;
        .del-price
          color #999999
          font-size .12rem
          text-decoration line-through
      .buy-num
        color #999999
        font-size .12rem

.type-labels
  margin-bottom .1rem
  width 100%
  height 1.87rem
  img 
    height 100%
</style>
