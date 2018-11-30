<template>
    <div>
        <div id="nav-con">
            <ul class='list-tab'>
                <router-link tag="li" to="/group/yiqituan/coutuan_home" exact-active-class="active">推荐</router-link>
                <router-link tag="li" to="/group/yiqituan/coutuan_makeup" exact-active-class="active">美妆</router-link>
                <router-link tag="li" to="/group/yiqituan/coutuan_underwear" exact-active-class="active">内衣</router-link>
                <router-link tag="li" to="/group/yiqituan/coutuan_furniture" active-class="active">家居</router-link>
                <router-link tag="li" to="/group/yiqituan/coutuan_baby" active-class="active">母婴健康</router-link>
                <router-link tag="li" to="/group/yiqituan/coutuan_food" active-class="active">食品保健</router-link>
                <router-link tag="li" to="/group/yiqituan/coutuan_shose" active-class="active">礼品箱包</router-link>
                <router-link tag="li" to="/group/yiqituan/coutuan_bag" active-class="active">饰包配饰</router-link>
                <router-link tag="li" to="/group/yiqituan/coutuan_3c" active-class="active">数码家电</router-link>
                <router-link tag="li" to="/group/yiqituan/coutuan_jewellery" active-class="active">饰品配饰</router-link>
                <router-link tag="li" to="/group/yiqituan/coutuan_ladies" active-class="active">女装</router-link>
                <router-link tag="li" to="/group/yiqituan/coutuan_pre" active-class="active">下期预告</router-link>                                
            </ul>
        </div>
        <keep-alive>
            <router-view :results='results'></router-view>                        
        </keep-alive>
    </div>

</template>

<script>
import http from 'utils/http';
import BScroll from "better-scroll";

export default {
    data(){
        return {
            results:null
        }
    },
    async beforeRouteUpdate (to, from, next) {
        var path = to['path'].substr(16)
        let obj = await http({
            url:'/yiqituan/tab_list',
            method:'get',
            params:{
                tab:path,
                page:1,
                per_page:20
            }
        })
        this.results = obj
    },
    async beforeCreate() {
        let path = this.$route.path.substr(16)
        let obj = await http({
            url:'/yiqituan/tab_list',
            method:'get',
            params:{
                tab:path,
                page:1,
                per_page:20
            }
        })
        this.results = obj
    },
    mounted(){
        let bscroll = new BScroll('#nav-con',{
            click:true,
            probeType:1,
            scrollX:true
        })
    }
}
</script>


<style lang="stylus" scoped>
@import '~styles/border.styl';

#nav-con 
    position: fixed
    left 0
    top 0
    height 0.44rem
    border 0 0 2 0, #eeeeee
    z-index 999
    .list-tab 
        width 9.84rem
        height 100%
        display flex
        white-space nowrap
        background #ffffff
        align-items center
        justify-content center
        padding-left 0.2rem

        li  
            font-size 0.14rem
            height 0.44rem
            line-height 0.44rem
            position relative
            color #666
            padding 0 0.2rem

        .active 
            color #fe4070
                            
                        





</style>
