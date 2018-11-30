<template>
<div>
    <router-view></router-view>
    <Footer></Footer>
</div>
        
</template>

<script>
import Index from "pages/index/index.vue"
import Footer from "components/layout/Footer.vue"
export default {
    components:{
        Index,
        Footer
    }
}
</script>

<style lang="stylus" scoped>
    #scroll-wrap 
        width 100%
        height 6.67rem    
        div
            position relative      
</style>







