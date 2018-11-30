<template>
    <ul class="nav-wrap">
        <router-link to='/home/shouye' active-class="active" tag="li">首页</router-link>
        <router-link to='/home/mianshui' active-class="active" tag="li">极数免税店</router-link>
        <router-link to='/home/motherbaby' active-class="active" tag="li">母婴</router-link>
        <router-link to='/home/qingshe' active-class="active" tag="li">轻奢</router-link>
        <router-link to='/home/pinpai' active-class="active" tag="li">名品特卖</router-link>                 
    </ul>
</template>

<style lang="stylus" scopesd>
@import '~styles/border.styl'

    .active 
        color #fe4070
    ul
        background-color #fff
        z-index 99
        display flex
        position relative
        height .45rem
        width 100%
        justify-content space-between  
        align-items center      
        /* border 0 0 1px 0, #ccc */  
        li
            display flex
            padding 0 .13rem
            color #666   
</style>
