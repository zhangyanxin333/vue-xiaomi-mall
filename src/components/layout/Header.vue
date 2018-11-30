<template>
    <div>
        <div class="header">
            <div class="header-wrap">
                <div class="search">
                    <svg t="1541298491178" class="icon" style="" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="7634" xmlns:xlink="http://www.w3.org/1999/xlink" width="18.25" height="18.25">
                        <path d="M911.182027 898.238738 755.794004 729.695091c-0.11768-0.12382-0.25378-0.208754-0.370437-0.330528 73.567529-70.137407 119.567189-168.960133 119.567189-278.395568 0-212.18254-172.626639-384.805086-384.804063-384.805086-212.18561 0-384.806109 172.621523-384.806109 384.805086 0 212.18254 172.621523 384.804063 384.806109 384.804063 75.575256 0 146.07082-21.988804 205.589378-59.774385 1.055029 1.937119 2.270716 3.800559 3.836375 5.496178l155.39007 168.539554c10.211573 11.081383 27.482935 11.784394 38.561247 1.571798l16.054651-14.806217C920.702867 926.585343 921.395646 909.319098 911.182027 898.238738zM154.504398 450.968995c0-185.094602 150.585647-335.681272 335.681272-335.681272 185.090509 0 335.681272 150.58667 335.681272 335.681272 0 185.094602-150.590763 335.681272-335.681272 335.681272C305.090045 786.65129 154.504398 636.063597 154.504398           450.968995z" p-id="7635" fill="#ccc"></path>
                    </svg>
                    搜索商品 分类 功效
                </div>
                <span v-on:click='show = ! show'>
                    <svg t="1541300770440" class="icon" style="" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="12194" xmlns:xlink="http://www.w3.org/1999/xlink" width="50" height="50">
                        <path d="M455.212 532.79c56.378 110.245 191.453 153.914 301.699 97.536 110.246-56.378 153.914-191.454 97.536-301.7-56.378-110.245-191.453-153.914-301.699-97.536-110.246 56.378-153.914 191.454-97.536 301.7z m115.372-266.821c90.983-46.528 202.458-10.49 248.985 80.494 46.528 90.983 10.489 202.457-80.494 248.985-90.983 46.527-202.458 10.488-248.985-80.495-46.528-90.983-10.489-202.458 80.494-248.984z m308.508 535.75L815.74 677.836c-6.982-13.654-23.711-19.062-37.366-12.08l-6.445 3.296c-13.654 6.982-19.062 23.712-12.08 37.366L823.2 830.3c6.983 13.654 23.713 19.063 37.367 12.08l6.445-3.295c13.654-6.984 19.063-23.713 12.08-37.367z m-744.79-550.117h302.591c12.177 0 22.048-9.87 22.048-22.047s-9.871-22.047-22.048-22.047H134.302c-12.177 0-22.047 9.87-22.047 22.047s9.87 22.047 22.047 22.047z m0 197.711h224.027c12.176 0 22.047-9.87 22.047-22.047s-9.87-22.047-22.047-22.047H134.302c-12.177 0-22.047 9.87-22.047 22.047s9.87 22.047 22.047 22.047z m0 197.711H423.29c12.176 0 22.047-9.87 22.047-22.047 0-12.176-9.871-22.047-22.047-22.047H134.302c-12.177 0-22.047 9.87-22.047 22.047-0.001 12.175 9.87 22.047 22.047 22.047zM729.027 802.43H132.512c-11.189 0-20.258 9.07-20.258 20.258s9.07 20.258 20.258 20.258h596.515c11.189 0 20.258-9.07 20.258-20.258s-9.07-20.258-20.258-20.258z" fill="#aaaaaa" p-id="12195"></path>
                    </svg>
                </span>
            </div>
        </div>
        <transition :name="transitionName">
            <div v-if="!show" class="search-form">
            <!-- <div @click="slide" class="search-form"> -->
                <div class="search-head">
                    <div class="searchs">
                        <input type="text" v-model="keyword" class='search' placeholder="搜索商品 分类 功效">
                        <svg t="1541298491178" class="icon" style="" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="7634" xmlns:xlink="http://www.w3.org/1999/xlink" width="18.25" height="18.25">
                            <path d="M911.182027 898.238738 755.794004 729.695091c-0.11768-0.12382-0.25378-0.208754-0.370437-0.330528 73.567529-70.137407 119.567189-168.960133 119.567189-278.395568 0-212.18254-172.626639-384.805086-384.804063-384.805086-212.18561 0-384.806109 172.621523-384.806109 384.805086 0 212.18254 172.621523 384.804063 384.806109 384.804063 75.575256 0 146.07082-21.988804 205.589378-59.774385 1.055029 1.937119 2.270716 3.800559 3.836375 5.496178l155.39007 168.539554c10.211573 11.081383 27.482935 11.784394 38.561247 1.571798l16.054651-14.806217C920.702867 926.585343 921.395646 909.319098 911.182027 898.238738zM154.504398 450.968995c0-185.094602 150.585647-335.681272 335.681272-335.681272 185.090509 0 335.681272 150.58667 335.681272 335.681272 0 185.094602-150.590763 335.681272-335.681272 335.681272C305.090045 786.65129 154.504398 636.063597 154.504398           450.968995z" p-id="7635" fill="#ccc"></path>
                        </svg>
                        <span v-on:click='show = ! show'>返回</span>
                        <!-- <span >返回</span> -->
                    </div>
                </div>
                <ul class="search-links"  v-if="!keyword">
                    
                    <li :item='item' v-for='(item,index) of results' :key='index' @click="showToggle(item,index)">   
                        {{ item.name}}
                        <ul class="two-nav" v-if="item.isSubshow">   
                            <li class="two-li" :value='value' 
                            v-for='value of results[index].sub_categories' :key='value.category_id'
                            >
                                <a href="##">{{value.name}}</a>
                            </li>
                        </ul>
                    </li>

                    <!-- <li v-else v-for="(item,index) of searchResult" :key="index"></li> -->
                </ul>
                <ul class="search-links"  v-else>
                    <!-- <router-link to="/search" tag="li" :item='item' v-for='(item,index) of searchResult.data' :key='index' 
                        @click='searchProduct(item)' :end='end'>{{ item }}</router-link> -->
                    <li :item='item' v-for='(item,index) of searchResult.data' :key='index' 
                        @click="$router.push({path: '/search', query: {search:item}})" 
                    >   
                        {{ item }}
                    </li>
                </ul>
            </div>
        </transition>
    </div>
</template>
<script>
import axios from 'utils/http';
import _ from 'lodash'

export default {
  data() {
    return {
      show: true,
      results:null,
      keyword:'',
      searchResult:null,
      transitionName: '',
      
    };
  },
  watch:{
        keyword:_.throttle(async function(){
            let keyword = this.keyword 
            let result = await axios({
                method:'get',
                url:'/index/requestDelegate',
                params:{
                    url:'http://mobile.jumei.com/msapi/search/suggestion.json?keyword='+this.keyword+'&url=http://mobile.jumei.com/msapi/search/suggestion.json'
                }
            })
            this.searchResult = result            
            },1000)
  },
  methods:{
      showToggle:function(item,index){
          let a = this.results
          if(!item.isSubshow){
                for(var i = 0 ;i<a.length;i++){
                    a[i].isSubshow = false
                }
                item.isSubshow = !item.isSubshow
          }else{
                for(var i = 0 ;i<a.length;i++){
                    a[i].isSubshow = false
                }
          }
        this.results = a
      }
  },
  async beforeCreate() {
        let result = await axios({
            method:'get',
            url:'/index/requestDelegate',
            params:{
                url:'http://mobile.jumei.com/msapi/mall/allcategories.json'
            }
        })
        let array = result.data
        for(var i = 0 ;i<array.length;i++){
            array[i].isSubshow = false
        }
        this.results = array  
    }
};
</script>


<style lang="stylus" scoped>
@import '~styles/border.styl'
.header 
    width 100%
    height 0.45rem
    position relative
    z-index 999
    .header-wrap {
        width: 100%;
        height: 0.45rem;
        display: flex;
        background-color: #ffffff;

        .search {
            display: flex;
            position: relative;
            flex: 321;
            background: #f5f5f5;
            border-radius: 1.25rem;
            margin: 0.08rem 0.02rem 0.08rem 0.2rem;
            justify-content: center;
            align-items: center;
            font-size: 0.14rem;
            color: #999;
        }

        span {
            display: flex;
            flex: 54;
            justify-content: center;
            align-items: center;

            svg {
                width: 0.5rem;
                height: 0.3rem;
            }
        }
    }

.search-form 
    position absolute
    width 100%
    height 100%
    z-index 999
    top 0
    //left .59rem
    background #ffffff
    .search-head 
        display flex
        border 0 0 2px 0,#f5f5f5
        .searchs
            width 100%
            position relative
            svg 
                position absolute
                left .25rem
                top .14rem
            .search 
                //display flex
                padding-left .3rem
                position: relative
                width 78%
                background #f5f5f5
                border-radius 1.25rem
                margin 0.08rem 0.02rem 0.08rem 0.2rem
                justify-content center
                align-items center
                font-size: 0.14rem
                color #999
                height .3rem
                color #999
                margin-right .2rem
            span 
                width 22%
                text-align center
                line-height .46rem
                color #999
    .search-links
        width 100%
        height 6.21rem
        display block
        li
            padding-left .1rem
            border 0 0 2px 0,#f5f5f5
            width 100%
            height .45rem
            line-height .45rem
            display block
            position relative
            .two-nav
                //top .45rem
                left -0.1rem
                width 3.75rem
                display block
                border 2px 0 0 0, #eeeeee
                height auto 
                position relative
                .two-li
                    height .44rem
                    text-indent .30rem
                    line-height .44rem
                    background #f5f5f5
                    border 0 0 2px 0,#ffffff
                    a
                        color #666

      



        



</style>