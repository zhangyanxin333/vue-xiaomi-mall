<template>
    <nav class="touch-header">
        <img src="../../assets/left_arrow.png" class="left_arrow" @click="back">
        <div class="touch-header-title"><slot></slot></div>
        <img src="../../assets/home.png" class="home" @click="gohome">
    </nav>
</template>

<script>
export default {
    methods:{
        back(){
            this.$router.back(-1)
        },
        gohome(){
            this.$router.push('/home/shouye/today')
        }
    }
}
</script>


<style lang="stylus" scoped>
@import '~styles/border.styl';
    .touch-header 
        text-align center
        height .45rem
        width 100%
        z-index 1
        border 0 0 1px 0, #eee
        background #ffffff
        .left_arrow 
            position absolute
            left .2rem
            top .15rem
            width .075rem
            height .15rem

        .touch-header-title 
            display block
            text-align center
            font-size .16rem
            color #333
            height .44rem
            line-height .44rem
        .home
            width .2rem
            height .2rem
            position absolute
            top .1rem
            right .2rem

</style>
